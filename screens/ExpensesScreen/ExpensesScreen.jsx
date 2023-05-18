import React, {useContext} from 'react';
import {FlatList, Text, View} from 'react-native';
import Header from '../../components/Header/Header';
import {DNAdataContext} from '../../Data/data';
import ExpenseItem from './ExpenseItem';
import ExpenseItemList from './ExpenseItemList';
import styles from './style';

const ExpensesScreen = ({navigation}) => {
  const {expensesData} = useContext(DNAdataContext);

  return (
    <View style={styles.container}>
      <Header
        // TODO: This part is will increase later.
        screen={'Expenses'}
        navigation={navigation}
        back={'Market'}
        continueTo={'Market'}
        left={'Back'}
        right={'New'}
      />
      <View style={styles.barChartContainer}>
        <View style={styles.itemsContainer}>
          <FlatList
            horizontal
            data={expensesData}
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
          data={expensesData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => {
            return <ExpenseItemList item={item} index={index} />;
          }}
        />
      </View>
    </View>
  );
};

export default ExpensesScreen;
