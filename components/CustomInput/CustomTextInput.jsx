import PropTypes from 'prop-types';
import React from 'react';
import {TextInput, Text} from 'react-native';
import {theme} from '../../assets/theme/theme';
import styles from './style';


let delayDebounceFn = null;

const CustomTextInput = ({
  name,
  placeholder,
  onChangeText,
  onBlur,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  secureTextEntry,
  touched,
  errors,
}) => {

  const handleInputText = (inputText) => {
    if (delayDebounceFn) {
      clearTimeout(delayDebounceFn);
    }

    delayDebounceFn = setTimeout(() => {
      onChangeText(inputText);
      delayDebounceFn = null;
    }, 500);
  };

  return (
    <>
      <TextInput
        name={name}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.cool_gray}
        style={styles.input}
        variant={'standard'}
        onChangeText={handleInputText}
        onBlur={onBlur}
        keyboardType={keyboardType ? keyboardType : null}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
      />
      {touched && errors && (
        <Text style={styles.inputError}>{errors}</Text>
      )}
    </>
  );
};

CustomTextInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  onBlur: PropTypes.func,
  keyboardType: PropTypes?.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  touched: PropTypes.bool,
  errors: PropTypes.string,
};


export default React.memo(CustomTextInput);
