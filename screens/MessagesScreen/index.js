import {useContext, useRef, useEffect, useCallback, memo} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, Text, Image} from 'react-native';
import {GlobalDataContext} from '../../contexts/context';
import Message from './Message';
import Header from '../../components/Header/Header';
import styles from './style';
import NewMessage from './NewMessage';

const MessagesList = ({navigation, route}) => {
  const {setMessages, messages} = useContext(GlobalDataContext);
  const user = useRef(0);
  const flatListRef = useRef();
  const userItem = route.params.userItem;

  useEffect(() => {
    flatListRef.current.scrollToEnd({animated: true});
  }, [messages]);

  const renderItem = ({item, index}) => (
    <Message
      key={index}
      isLeft={item.user !== user.current}
      message={item.content}
    />
  );
  const userImage = userItem.imageUrl
    ? {uri: userItem.imageUrl}
    : require('../../assets/images/Profile.png');
  const onContentSizeChange = useCallback(() => {
    flatListRef.current.scrollToEnd({animated: true});
  }, []);
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
        <Image style={styles.userImageProfile} source={userImage} />
        {userItem.isActive && <View style={styles.activeChat} />}
        <Text style={styles.userFullName}>{userItem.fullName}</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        onContentSizeChange={onContentSizeChange}
      />
      <NewMessage setMessages={setMessages} />
    </View>
  );
};

MessagesList.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default memo(MessagesList);
