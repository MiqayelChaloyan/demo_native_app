import {useContext} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import {GlobalDataContext} from '../../contexts/context';
import Header from '../../components/Header/Header';
import MessageInput from './MessageInput';
import Chat from './Chat';
import styles from './style';

const MessagesList = ({navigation, route}) => {
  const {setMessages, messages} = useContext(GlobalDataContext);
  const userItem = route.params.userItem;

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Header
          screen="Messages"
          navigation={navigation}
          back="Messages"
          continueTo="Market"
          left="Back"
          right="Filter"
        />
      </View>
      <View style={styles.userContainer}>
        <Image
          style={styles.userImageProfile}
          source={
            userItem.imageUrl
              ? { uri: userItem.imageUrl }
              : require('../../assets/images/Profile.png')
          }
        />
        {userItem.isActive && <View style={styles.activeChat} />}
        <Text style={styles.userFullName}>{userItem.fullName}</Text>
      </View>
      <Chat />
      <View style={styles.newMessage}>
        <MessageInput messages={messages} setMessages={setMessages} />
      </View>
    </View>
  );
};

MessagesList.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object,
};

export default MessagesList;
