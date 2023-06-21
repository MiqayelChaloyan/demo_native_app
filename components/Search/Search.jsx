import {useEffect} from 'react';
import useSearch from '../../customHooks/useSearch';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import {theme} from '../../assets/theme/theme';
import styles from './style';

let delayDebounceFn = null;

const Search = ({list: initialData, setState, keyword, setNothingData}) => {
  const {data: searchResults, handleSearch} = useSearch(initialData, keyword);
  const handleInputText = inputText => {
    if (delayDebounceFn) {
      clearTimeout(delayDebounceFn);
    }

    delayDebounceFn = setTimeout(() => {
      handleSearch(inputText);
      setNothingData(inputText);
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
  keyword: PropTypes.string,
};

export default Search;
