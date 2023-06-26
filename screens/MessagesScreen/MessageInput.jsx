import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';
import ArrowIcon from '../../assets/icons/Arrow.svg';
import styles from './style';

let delayDebounceFn = null;

const MessageInput = ({ messages, setMessages }) => {
    const [message, setMessage] = useState('');

    const handleInputText = inputText => {
        if (delayDebounceFn) {
            clearTimeout(delayDebounceFn);
        }

        delayDebounceFn = setTimeout(() => {
            setMessage(inputText);
            delayDebounceFn = null;
        }, 500);
    };  

    const getMessage = () => {
        if (message.trim() !== '') {
            setMessages([
                ...messages,
                {
                    user: 0,
                    message,
                },
            ]);
          return setMessage('');
        };
    };

    return (
        <View>
            <View style={styles.inputBox}>
                <TextInput
                    name="messages"
                    placeholder="Message here..."
                    placeholderTextColor={theme.colors.cool_gray}
                    style={styles.input}
                    variant="standard"
                    onChangeText={handleInputText}
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
                                    message.trim() !== ''
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
    )
}

MessageInput.propTypes = {
    messages: PropTypes.array,
    setMessages: PropTypes.func,
};

export default React.memo(MessageInput);