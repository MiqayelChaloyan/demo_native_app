import React, {useContext, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Text,
  Image,
} from 'react-native';
import {GlobalDataContext} from '../../Data/context';
import Message from './Message';
import ArrowIcon from '../../assets/icons/Arrow.svg';
import Header from '../../components/Header/Header';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const MessagesList = ({navigation, route}) => {
  const {setMessages, messages} = useContext(GlobalDataContext);
  const [value, setValue] = useState('');
  const user = useRef(0);
  const scrollView = useRef();
  const {item} = route.params;

  const getMessage = () => {
    if (value.trim() !== '') {
      setMessages([
        ...messages,
        {
          user: 0,
          content: value,
        },
      ]);
      return setValue('');
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Header
          screen={'Messages'}
          navigation={navigation}
          back={'Messages'}
          continueTo={'Market'}
          left={'Back'}
          right={'Filter'}
        />
      </View>
      <View style={styles.userContainer}>
        <Image
          style={styles.userImageProfile}
          source={
            item.imageUrl
              ? {uri: item.imageUrl}
              : require('../../assets/images/Profile.png')
          }
        />
        {item.isActive && <View style={styles.activeChat} />}
        <Text style={styles.userFullName}>{item.fullName}</Text>
      </View>
      <ScrollView
        style={styles.messegesList}
        ref={ref => (scrollView.current = ref)}
        onContentSizeChange={() =>
          scrollView.current.scrollToEnd({animated: true})
        }>
        <FlatList
          data={messages}
          renderItem={({index}) => (
            <Message
              key={index}
              isLeft={item.user !== user.current}
              message={item.content}
            />
          )}
          keyExtractor={(_, index) => index}
        />
      </ScrollView>
      <View style={styles.newMessage}>
        <View style={styles.inputBox}>
          <TextInput
            name="messages"
            placeholder="Message here..."
            placeholderTextColor={theme.colors.lightGray}
            style={styles.input}
            variant="standard"
            onChangeText={() => setValue(value)}
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
                      ? theme.colors.green
                      : theme.colors.lightGray,
                },
              ]}>
              <ArrowIcon width={16} height={25} fill={theme.colors.primary} />
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
