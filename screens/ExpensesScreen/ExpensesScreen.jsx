import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { DNAdataContext } from "../../Data/data";
import styles from "./style";
import ExpenseItem from "./ExpenseItem";
import ExpenseItemList from "./ExpenseItemList";

const ExpensesScreen = () => {

  const { expensesData } = useContext(DNAdataContext);

  return (
    <View style={styles.container}>
      <Header
        screen={"Expenses"}
        // TODO: This part is will increase later.
        // navigation={navigation}
        // back={'Auth'}
        // continueTo={'Market'}
      />

      <View style={styles.barChartContainer}>
        <View style={styles.itemsContainer}>

          <FlatList
            horizontal
            data={expensesData}
            key={item => item.id}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
              return <ExpenseItem item={item} index={index} />;
            }}
          />

        </View>
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          Expenses
        </Text>
      </View>
      <View style={styles.ItemListContainer}>

        <FlatList
          data={expensesData}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            return <ExpenseItemList item={item} index={index} />;
          }}
        />

      </View>
    </View>
  );
};

export default ExpensesScreen;

