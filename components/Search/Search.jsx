import React, {useEffect} from 'react';
import useSearch from '../../customHooks/useSearch';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import {theme} from '../../assets/theme/theme';
import styles from './style';

let delayDebounceFn = null;

const Search = ({list: state, setState, keyword, setEmptyDataMessage}) => {
  const {data: searchResults, handleSearch} = useSearch(state, keyword);

  const handleInputText = inputText => {
    if (delayDebounceFn) {
      clearTimeout(delayDebounceFn);
    }

    delayDebounceFn = setTimeout(() => {
      handleSearch(inputText);
      setEmptyDataMessage(inputText);
      delayDebounceFn = null;
    }, 500);
  };

  useEffect(() => {
    setState(searchResults);
  }, [handleInputText]);

  return (
    <View style={styles.container}>
      <TextInput
        name="search"
        placeholder="Search"
        placeholderTextColor={theme.colors.cool_gray}
        style={styles.input}
        variant="outlined"
        onChangeText={handleInputText}
        keyboardType="web-search"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

Search.propTypes = {
  list: PropTypes.array,
  setState: PropTypes.func,
  setEmptyDataMessage: PropTypes.func,
  keyword: PropTypes.string,
};

export default React.memo(Search);
