import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const Search = ({list, setState, keyword}) => {
  const [searchItemValue, setSearchItemValue] = useState('');

  useEffect(() => {
    const result = list.filter(item => {
      let param = item[keyword].toLowerCase();
      return param.indexOf(searchItemValue) > -1;
    });
    setState(result);
  }, [keyword, list, searchItemValue, setState]);

  return (
    <View style={styles.container}>
      <TextInput
        name="search"
        placeholder="Search"
        placeholderTextColor={theme.colors.cool_gray}
        style={styles.input}
        variant="outlined"
        onChangeText={value => setSearchItemValue(value)}
        value={searchItemValue}
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
