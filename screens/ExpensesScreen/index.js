import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Header from '../../components/Header/Header';
import BarChart from './BarChart';
import {getDataFromFile} from '../../utils/ApiUtils';
import ExpensesList from '../../components/ExpenseItemList/ExpensesList';
import styles from './style';

const ExpensesScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
      const result = getDataFromFile('expenses');
      setData(result);
  };

  useEffect(() => {
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
        <ExpensesList data={data} />
      </View>
    </View>
  );
};

ExpensesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(ExpensesScreen);
