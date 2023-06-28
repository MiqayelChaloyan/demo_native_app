import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {TextInput, Text} from 'react-native';
import {theme} from '../../assets/theme/theme';
import useDelayDebounce from '../../customHooks/useDebounce';
import styles from './style';

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
  const [inputValue, setInputValue] = useDelayDebounce('', 500);

  useEffect(() => {
    onChangeText(inputValue);
  }, [inputValue])

  return (
    <>
      <TextInput
        name={name}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.cool_gray}
        style={styles.input}
        variant={'standard'}
        onChangeText={setInputValue}
        onBlur={onBlur}
        keyboardType={keyboardType}
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
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  touched: PropTypes.bool,
  errors: PropTypes.string,
};

CustomTextInput.defaultProps = {
  keyboardType: "default",
};

export default React.memo(CustomTextInput);
