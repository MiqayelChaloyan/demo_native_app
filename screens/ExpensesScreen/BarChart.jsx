import PropTypes from 'prop-types';
import React from 'react';
import {FlatList, View} from 'react-native';
import ExpenseItem from './ExpenseItem';
import styles from './style';

const BarChart = ({data}) => {
  return (
    <View style={styles.barChartContainer}>
      <View style={styles.itemsContainer}>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item, index) => index.toString() + item.title}
          renderItem={({item, index}) => {
            return <ExpenseItem item={item} index={index} />;
          }}
        />
      </View>
    </View>
  );
};

BarChart.propTypes = {
  data: PropTypes.array,
};

export default React.memo(BarChart);
