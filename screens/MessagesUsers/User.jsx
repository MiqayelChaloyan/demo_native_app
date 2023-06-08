import {useContext} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {GlobalDataContext} from '../../contexts/context';
import styles from './style';

const User = ({userItem, navigation}) => {
  const {messages} = useContext(GlobalDataContext);

  return (
    <TouchableOpacity
      style={styles.swipeable}
      onPress={() => {
        navigation.navigate({
          name: 'Chat',
          params: {userItem},
        });
      }}>
      <View>
        <View style={styles.user}>
          <View>
            <Image
              style={styles.profileImage}
              source={
                userItem.imageUrl
                  ? {uri: userItem.imageUrl}
                  : require('../../assets/images/Profile.png')
              }
            />
          </View>
          <Text style={styles.userName}>{userItem.fullName}</Text>
          {userItem.isActive && <View style={styles.activeChat} />}
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
    </TouchableOpacity>
  );
};

User.propTypes = {
  item: PropTypes.object,
  navigation: PropTypes.object,
};

export default User;
