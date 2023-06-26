import {memo} from 'react';
import {FlatList, View} from 'react-native';
import ExpenseItemList from '../../components/ExpenseItemList/ExpenseItemList';
import styles from './style';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';

const ListOfExpenses = () => {
  const {data} = useDataFromAPI('expenses');
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
export default memo(ListOfExpenses);
