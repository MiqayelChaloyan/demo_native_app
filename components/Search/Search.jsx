import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import {theme} from '../../assets/theme/theme';
import useDelayDebounce from '../../customHooks/useDebounce';
import useSearch from '../../customHooks/useSearch';
import styles from './style';

const Search = ({ list: initialData, researchResult, keyword, setEmptyDataMessage }) => {
  const { data: searchResults, handleSearch } = useSearch(initialData, keyword);
  const [inputText, setInputText] = useDelayDebounce('', 500);
  
  useEffect(() => {
    handleSearch(inputText);
    setEmptyDataMessage(inputText);
    researchResult(searchResults);
  }, [setInputText]);

  return (
    <View style={styles.container}>
      <TextInput
        name="search"
        placeholder="Search"
        placeholderTextColor={theme.colors.cool_gray}
        style={styles.input}
        variant="outlined"
        onChangeText={setInputText}
        keyboardType="web-search"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

Search.propTypes = {
  list: PropTypes.array.isRequired,
  researchResult: PropTypes.func,
  setEmptyDataMessage: PropTypes.func,
  keyword: PropTypes.string,
};

export default React.memo(Search);
