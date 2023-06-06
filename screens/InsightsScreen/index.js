import {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import ExpenseItemList from '../../components/ExpenseItemList/ExpenseItemList';
import Header from '../../components/Header/Header';
import ProgressCircle from '../../components/ProgressCircle/ProgressCircle';
import {getDataExpensesFromFile} from '../../utils/ApiUtils';
import styles from './style';

const InsightsScreen = ({navigation}) => {
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
      <View style={styles.insights}>
        <Header
          screen="Insights"
          navigation={navigation}
          back="Expenses"
          left="Back"
          right="Filter"
        />
        <View style={styles.progressCircle}>
          <ProgressCircle />
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
export default InsightsScreen;
