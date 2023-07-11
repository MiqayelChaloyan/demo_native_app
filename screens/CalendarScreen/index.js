import {memo, useCallback, useContext} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './style';
import CalendarComponent from './Calendar';
import ListOfExpenses from '../ExpensesScreen/ListOfExpenses';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';
import {GlobalDataContext} from '../../contexts/context';
import {useFocusEffect} from '@react-navigation/native';

const CalendarScreen = () => {
  const {data} = useDataFromAPI('expenses');
  const {setChangeStatusBar} = useContext(GlobalDataContext);

  useFocusEffect(
    useCallback(() => {
      setChangeStatusBar(true);
      return () => {
        setChangeStatusBar(false);
      };
    }, []),
  );

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

export default memo(CalendarScreen);
