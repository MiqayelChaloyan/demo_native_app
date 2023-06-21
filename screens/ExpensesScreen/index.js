import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Header from '../../components/Header/Header';
import BarChart from './BarChart';
import ListOfExpenses from './ListOfExpenses';
import {getDataExpensesFromFile} from '../../utils/ApiUtils';
import styles from './style';

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
          screen="Expenses"
          navigation={navigation}
          back="Market"
          continueTo="Insights"
          left="Back"
          right="New"
        />
        <BarChart data={data} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Expenses</Text>
        </View>
        <ListOfExpenses data={data} />
      </View>
    </View>
  );
};

ExpensesScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ExpensesScreen;
