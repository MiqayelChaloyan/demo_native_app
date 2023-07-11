import {memo} from 'react';
import {FlatList, View} from 'react-native';
import ExpenseItemList from '../../components/ExpenseItemList/ExpenseItemList';
import styles from './style';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';

const ListOfExpenses = () => {
  const {data} = useDataFromAPI('expenses');
  const renderExpenseItem = ({item, index}) => {
    return <ExpenseItemList item={item} index={index} />;
  };
  return (
    <View style={styles.itemListContainer}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderExpenseItem}
      />
    </View>
  );
};
export default memo(ListOfExpenses);
