import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {TextInput, Text, View} from 'react-native';
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
  style
}) => {
  const [inputValue, setInputValue] = useDelayDebounce('', 500);

  useEffect(() => {
    onChangeText(inputValue);
  }, [inputValue]);

  const inputStyle = style ? style : styles.input;

  return (
    <View style={styles.container}>
      <TextInput
        name={name}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.cool_gray}
        style={inputStyle}
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
    </View>
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
  style: PropTypes.object,
};

CustomTextInput.defaultProps = {
  name: "",
  placeholder: "",
  autoCapitalize: "none",
  autoCorrect: false,
  secureTextEntry: false,  
  keyboardType: "default",
  style: null,
};

export default React.memo(CustomTextInput);