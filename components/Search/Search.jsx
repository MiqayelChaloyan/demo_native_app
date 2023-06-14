import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const Search = React.memo(({list, setState, keyword}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      const result = list.filter(item => {
        let value = item[keyword].toLowerCase();
        return value.includes(searchQuery.toLowerCase());
      });
      setState(result);
    } else {
      setState(list);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [list, searchQuery]);

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
