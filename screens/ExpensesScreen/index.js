import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text, View} from 'react-native';
import Header from '../../components/Header/Header';
import ExpenseItem from './ExpenseItem';
import ExpenseItemList from '../../components/ExpenseItemList/ExpenseItemList';
import styles from './style';
import {getDataExpensesFromFile} from '../../utils/ApiUtils';

const ExpensesScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const result = getDataExpensesFromFile();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.expenses}>
        <Header
          // TODO: This part is will increase later.
          screen={'Expenses'}
          navigation={navigation}
          back={'Market'}
          continueTo={'Insights'}
          left={'Back'}
          right={'New'}
        />
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
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Expenses</Text>
        </View>
        <View style={styles.itemListContainer}>
          <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item, index}) => {
              return <ExpenseItemList item={item} index={index} />;
            }}
          />
        </View>
      </View>
    </View>
  );
};

ExpensesScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ExpensesScreen;