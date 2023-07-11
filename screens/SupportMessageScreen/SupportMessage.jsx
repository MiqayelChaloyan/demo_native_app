import {memo, useCallback} from 'react';
import PropTypes from 'prop-types';
import {TextInput, View} from 'react-native';
import styles from './style';

let delayDebounceFn = null;

const SupportMessage = ({setText}) => {
  const handleInputText = useCallback(
    inputText => {
      if (delayDebounceFn) {
        clearTimeout(delayDebounceFn);
      }
      delayDebounceFn = setTimeout(() => {
        setText(inputText);
        delayDebounceFn = null;
      }, 1000);
    },
    [setText],
  );

  return (
    <View style={styles.inputContainer}>
      <TextInput
        multiline
        style={styles.input}
        onChangeText={handleInputText}
        placeholder="Compose your message here..."
      />
    </View>
  );
};

SupportMessage.propTypes = {
  setText: PropTypes.func,
};

export default memo(SupportMessage);
