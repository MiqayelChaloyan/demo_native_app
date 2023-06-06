import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import ExpenseItemList from '../../components/ExpenseItemList/ExpenseItemList';
import styles from './style';

const ListOfExpenses = ({data}) => {
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
ListOfExpenses.propTypes = {
  data: PropTypes.object,
};
export default ListOfExpenses;
