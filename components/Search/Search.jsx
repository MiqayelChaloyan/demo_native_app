import {useState, useCallback, memo} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import {theme} from '../../assets/theme/theme';
import useDelayedAction from '../../customHooks/useDelayedAction';
import styles from './style';

const Search = ({list, setState, keyword, setEmptyDataMessage}) => {
  const [searchItemValue, setSearchItemValue] = useState('');

  const handleSearch = useCallback(() => {
    if (searchItemValue.trim() === '') {
      setState(list);
      return;
    }

    const result = list.filter(item => {
      let param = item[keyword].toLowerCase();
      return param.indexOf(searchItemValue.toLowerCase()) > -1;
    });

    if (result.length) {
      return setState(result);
    }

    setEmptyDataMessage(searchItemValue);
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

export default memo(Search);
