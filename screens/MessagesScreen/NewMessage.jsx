import styles from './style';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {theme} from '../../assets/theme/theme';
import ArrowIcon from '../../assets/icons/Arrow.svg';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import {memo, useState} from 'react';
import PropTypes from 'prop-types';

const NewMessage = ({setMessages, messages}) => {
  const [value, setValue] = useState('');
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
  return (
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
  );
};

NewMessage.propTypes = {
  setMessages: PropTypes.func,
  messages: PropTypes.array,
};

export default memo(NewMessage);
