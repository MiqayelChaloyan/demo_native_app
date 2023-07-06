import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './style';
import CalendarComponent from './Calendar';
import {getDataExpensesFromFile} from '../../utils/ApiUtils';
import ListOfExpenses from '../ExpensesScreen/ListOfExpenses';

const CalendarScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataExpensesFromFile();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerPart} />
      <View style={styles.content}>
        <View style={styles.calendarOverlay}>
          <CalendarComponent />
        </View>
        <View style={styles.listContainer}>
          <ListOfExpenses data={data} />
        </View>
      </View>
    </View>
  );
};

CalendarScreen.propTypes = {
  navigation: PropTypes.object,
};

export default CalendarScreen;
