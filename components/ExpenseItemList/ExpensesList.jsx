import PropTypes from 'prop-types';
import React from 'react';
import {FlatList, View} from 'react-native';
import ExpenseItemList from './ExpenseItemList';
import styles from './style';

const ExpenseList = ({data}) => {
  return (
    <View style={styles.itemListContainer}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return <ExpenseItemList item={item} index={index} />;
        }}
      />
    </View>
  );
};

ExpenseList.propTypes = {
  data: PropTypes.array,
};

export default React.memo(ExpenseList);
