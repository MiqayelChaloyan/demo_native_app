import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';
import ArrowIcon from '../../assets/icons/Arrow.svg';
import useDelayDebounce from '../../customHooks/useDebounce';
import styles from './style';

const MessageInput = ({messages, setMessages}) => {
    const [message, setMessage] = useDelayDebounce('', 500);

    const getMessage = () => {
        if (message.trim() !== '') {
            setMessages([
                ...messages,
                {
                    user: 0,
                    message,
                },
            ]);
        };
        setMessage('');
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
                    onChangeText={setMessage}
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
                        ]}
                    >
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

MessageInput.propTypes = {
    messages: PropTypes.array,
    setMessages: PropTypes.func,
};

export default React.memo(MessageInput);
