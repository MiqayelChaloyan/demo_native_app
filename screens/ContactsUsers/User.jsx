import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {GlobalDataContext} from '../../contexts/context';
import styles from './style';

const User = ({ userItem, navigation }) => {
  const {messages} = useContext(GlobalDataContext);
  const {imageUrl, fullName, isActive} = userItem;
  const today = new Date();
  const curTime = today.getHours() + ':' + today.getMinutes();
  const timestamp = userItem.isActive ? curTime : userItem.timestamp;

  return (
    <TouchableOpacity
      style={styles.swipeable}
      onPress={() => {
        navigation.navigate({
          name: 'Chat',
          params: { userItem },
        });
      }}>
      <View>
        <View style={styles.user}>
          <View>
            <Image
              style={styles.profileImage}
              source={
                imageUrl
                  ? { uri: imageUrl }
                  : require('../../assets/images/Profile.png')
              }
            />
          </View>
          <Text style={styles.userName}>{fullName}</Text>
          {isActive && <View style={styles.activeChat} />}
        </View>
        <View style={styles.messages}>
          {messages[messages.length - 1].user === 0 && (
            <Text style={styles.messagesText}>You: </Text>
          )}
          <Text style={styles.messagesText}>
            {messages[messages.length - 1].message.slice(0, 25)}...
          </Text>
        </View>
        <View style={styles.activeTime}>
          <Text>{timestamp}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

User.propTypes = {
  item: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

export default React.memo(User);
