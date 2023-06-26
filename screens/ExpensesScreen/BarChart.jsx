import {memo} from 'react';
import {FlatList, View} from 'react-native';
import ExpenseItem from './ExpenseItem';
import styles from './style';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';

const BarChart = () => {
  const {data} = useDataFromAPI('expenses');
  return (
    <View style={styles.barChartContainer}>
      <View style={styles.itemsContainer}>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item, index) => index.toString() + item.title}
          renderItem={({item, index}) => {
            return <ExpenseItem item={item} index={index} data={data} />;
          }}
        />
      </View>
    </View>
  );
};

export default memo(BarChart);
