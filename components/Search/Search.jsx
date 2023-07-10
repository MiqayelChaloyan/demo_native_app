import {useState, useCallback, memo} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import {theme} from '../../assets/theme/theme';
import styles from './style';
import useDelayedAction from '../../customHooks/useDelayedAction';

const Search = ({list, setState, keyword}) => {
  const [searchItemValue, setSearchItemValue] = useState('');

  const handleSearch = useCallback(() => {
    const result = list.filter(item => {
      let param = item[keyword].toLowerCase();
      return param.indexOf(searchItemValue.toLowerCase()) > -1;
    });
    setState(result);
  }, [list, setState, keyword, searchItemValue]);

  useDelayedAction(handleSearch, 1000);
  const handleChangeText = useCallback(value => setSearchItemValue(value), []);

  return (
    <View style={styles.container}>
      <TextInput
        name="search"
        placeholder="Search"
        placeholderTextColor={theme.colors.cool_gray}
        style={styles.input}
        variant="outlined"
        onChangeText={handleChangeText}
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

export default memo(Search);
