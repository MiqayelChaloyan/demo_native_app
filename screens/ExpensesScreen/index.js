import {memo} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Header from '../../components/Header/Header';
import BarChart from './BarChart';
import ListOfExpenses from './ListOfExpenses';
import styles from './style';

const ExpensesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.expenses}>
        <Header
          // TODO: This part is will increase later.
          screen="Expenses"
          navigation={navigation}
          back="Market"
          continueTo="Insights"
          left="Back"
          right="New"
        />
        <BarChart />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Expenses</Text>
        </View>
        <ListOfExpenses />
      </View>
    </View>
  );
};

ExpensesScreen.propTypes = {
  navigation: PropTypes.object,
};

export default memo(ExpensesScreen);
