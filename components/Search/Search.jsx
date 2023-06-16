import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import {theme} from '../../assets/theme/theme';
import useEffectAfterMount from '../../customHooks/useEffectAfterMount';
import useSearch from '../../customHooks/useSearch';
import styles from './style';


let delayDebounceFn = null;

const Search = React.memo(({list: initialData, setState, keyword}) => {
  const {data: filteredData, handleSearch} = useSearch(initialData, keyword);

  const handleInputText = inputText => {
    if (delayDebounceFn) {
      clearTimeout(delayDebounceFn);
    }

    delayDebounceFn = setTimeout(() => {
      handleSearch(inputText);
      delayDebounceFn = null;
    }, 1000);
  };

  useEffectAfterMount(() => {
    setState(filteredData);
  }, [handleInputText]);

  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

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
});

Search.propTypes = {
  list: PropTypes.array,
  setState: PropTypes.func,
  keyword: PropTypes.string,
};

export default Search;
