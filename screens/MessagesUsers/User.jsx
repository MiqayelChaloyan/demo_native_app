import {useContext} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {DNAdataContext} from '../../Data/data';
import styles from './style';

const User = ({item, navigation}) => {
  const {messages} = useContext(DNAdataContext);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate({
          name: 'Chat',
          params: {item},
          merge: true,
        });
      }}>
      <View style={styles.userRoot}>
        <View style={styles.user}>
          <View>
            <Image
              style={styles.profileImage}
              source={
                item.imageUrl
                  ? {uri: item.imageUrl}
                  : require('../../assets/images/Profile.png')
              }
            />
          </View>
          <Text style={styles.userName}>{item.fullName}</Text>
          {item.isActive && <View style={styles.activeChat} />}
        </View>
        <View style={styles.messages}>
          {messages[messages.length - 1].user === 0 && (
            <Text style={styles.messagesText}>You: </Text>
          )}
          <Text style={styles.messagesText}>
            {messages[messages.length - 1].content.slice(0, 25)}...
          </Text>
        </View>
      </View>
      <View style={styles.line} />
    </TouchableOpacity>
  );
};

User.propTypes = {
  item: PropTypes.object,
  navigation: PropTypes.object,
};

export default User;
