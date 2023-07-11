import PropTypes from 'prop-types';
import {memo} from 'react';
import {FlatList, View} from 'react-native';
import ExpenseItemList from './ExpenseItemList';
import styles from './style';

const ExpenseList = ({data}) => {
  return (
    <View style={styles.itemListContainer}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={props => <ExpenseItemList {...props} />}
      />
    </View>
  );
};

ExpenseList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default memo(ExpenseList);
