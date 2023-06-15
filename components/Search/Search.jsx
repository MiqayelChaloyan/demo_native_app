import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import {theme} from '../../assets/theme/theme';
import useEffectAfterMount from '../../customHooks/useEffectAfterMount';
import useSearch from '../../customHooks/useSearch';
import styles from './style';

const Search = React.memo(({list: initialData, setState, keyword}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const {data: filteredData, handleSearch} = useSearch(initialData, keyword);

  useEffectAfterMount(() => {
    console.log('1');
    handleSearch(searchQuery);
  }, [searchQuery]);

  useEffectAfterMount(() => {
    console.log('2');
    setState(filteredData);
  }, [handleSearch]);

  console.log('The child component is rendered >>>> search');

  return (
    <View style={styles.container}>
      <TextInput
        name="search"
        placeholder="Search"
        placeholderTextColor={theme.colors.cool_gray}
        style={styles.input}
        variant="outlined"
        onChangeText={value => setSearchQuery(value)}
        value={searchQuery}
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
