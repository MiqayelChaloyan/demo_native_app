import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header/Header';
import ProgressCircle from '../../components/ProgressCircle/ProgressCircle';
import {getDataFromFile} from '../../utils/ApiUtils';
import ExpensesList from '../../components/ExpenseItemList/ExpensesList';
import styles from './style';

const InsightsScreen = ({navigation}) => {
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
      <View style={styles.insights}>
        <Header
          screen="Insights"
          navigation={navigation}
          back="Expenses"
          left="Back"
          right="Filter"
          continueTo={"Feed"}
        />
        <View style={styles.progressCircle}>
          <ProgressCircle />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Expenses</Text>
        </View>
        <ExpensesList data={data} />
      </View>
    </View>
  );
};

InsightsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(InsightsScreen);
