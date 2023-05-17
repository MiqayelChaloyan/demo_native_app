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
import {DNAdataContext} from '../../Data/data';
import Message from './Message';
import ArrowIcon from '../../assets/icons/Arrow.svg';
import Header from '../../components/Header/Header';
import styles from './style';

const MessagesList = ({navigation, route}) => {
  const {setMessages, messages} = useContext(DNAdataContext);
  const [value, setValue] = useState('');
  const user = useRef(0);
  const scrollWiew = useRef();
  const {item} = route.params;

  const getMessage = () => {
    if (value.length && value.trim() !== '') {
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
        ref={ref => (scrollWiew.current = ref)}
        onContentSizeChange={() =>
          scrollWiew.current.scrollToEnd({animated: true})
        }>
        <FlatList
          data={messages}
          renderItem={({item, index}) => (
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
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            variant="standard"
            onChangeText={value => setValue(value)}
            value={value}
            keyboardType="twitter"
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
                    value.length > 0 && value.trim() !== ''
                      ? '#5DB075'
                      : '#BDBDBD',
                },
              ]}>
              <ArrowIcon width={16} height={25} fill="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

MessagesList.propTypes = {
  navigation: PropTypes.object,
};

export default MessagesList;
