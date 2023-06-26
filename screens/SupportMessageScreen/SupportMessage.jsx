import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View} from 'react-native';
import styles from './style';

let delayDebounceFn = null;

const SupportMessage = ({handleChangeText}) => {

    const handleInputText = inputText => {
        if (delayDebounceFn) {
            clearTimeout(delayDebounceFn);
        }

        delayDebounceFn = setTimeout(() => {
            handleChangeText(inputText);
            delayDebounceFn = null;
        }, 500);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                multiline
                style={styles.input}
                onChangeText={handleInputText}
                placeholder="Compose your message here..."
            />
        </View>
    )
}

SupportMessage.propTypes = {
    handleChangeText: PropTypes.func,
};

export default React.memo(SupportMessage);