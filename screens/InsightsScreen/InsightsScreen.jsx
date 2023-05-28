import { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import ExpenseItemList from '../../components/ExpenseItemList/ExpenseItemList';
import Header from '../../components/Header/Header';
import ProgressCircle from '../../components/ProgressCircle/ProgressCircle';
import { GlobalDataContext } from '../../Data/context';
import styles from './style';

const InsightsScreen = ({ navigation }) => {
  const { expensesData } = useContext(GlobalDataContext);

  return (
    <View style={styles.insights}>
      <View style={styles.container}>
        <Header
          screen={'Insights'}
          navigation={navigation}
          back={'Expenses'}
          left={'Back'}
          right={'Filter'}
        />
        <View style={styles.progressCircle}>
          <ProgressCircle />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Expenses</Text>
        </View>
        <View style={styles.itemListContainer}>
          <FlatList
            data={expensesData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => {
              return <ExpenseItemList item={item} index={index} />;
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default InsightsScreen;
