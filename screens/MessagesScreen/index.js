import {useContext, useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import {GlobalDataContext} from '../../contexts/context';
import Message from './Message';
import ArrowIcon from '../../assets/icons/Arrow.svg';
import Header from '../../components/Header/Header';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const MessagesList = ({navigation, route}) => {
  const {setMessages, messages} = useContext(GlobalDataContext);
  const [value, setValue] = useState('');
  const user = useRef(0);
  const flatListRef = useRef();
  const userItem = route.params.userItem;

  const getMessage = () => {
    if (value.trim() !== '') {
      setMessages([
        ...messages,
        {
          user: 0,
          content: value,
        },
      ]);
      setValue('');
    }
  };

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
              ? {uri: userItem.imageUrl}
              : require('../../assets/images/Profile.png')
          }
        />
        {userItem.isActive && <View style={styles.activeChat} />}
        <Text style={styles.userFullName}>{userItem.fullName}</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        onContentSizeChange={() =>
          flatListRef.current.scrollToEnd({animated: true})
        }
      />
      <View style={styles.newMessage}>
        <View style={styles.inputBox}>
          <TextInput
            name="messages"
            placeholder="Message here..."
            placeholderTextColor={theme.colors.cool_gray}
            style={styles.input}
            variant="standard"
            onChangeText={text => setValue(text)}
            value={value}
            keyboardType="web-search"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.sendBox}>
          <TouchableOpacity onPress={getMessage}>
            <View
              style={[
                styles.send,
                {
                  backgroundColor:
                    value.trim() !== ''
                      ? theme.colors.dark_green
                      : theme.colors.cool_gray,
                },
              ]}>
              <ArrowIcon
                width={horizontalScale(16)}
                height={verticalScale(25)}
                fill={theme.colors.primary_white}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

MessagesList.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default MessagesList;
