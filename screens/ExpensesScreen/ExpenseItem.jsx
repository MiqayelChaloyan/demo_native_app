import React, { useContext } from "react";
import { Text, View } from "react-native";
import { DNAdataContext } from "../../Data/data";
import styles from "./style";

const ExpenseItem = ({ item , index }) => {
  const { expensesData } = useContext(DNAdataContext);
  const priceArray = expensesData.map((item)=>item.price);
  const maxPrice = Math.max(...priceArray);
  let progressPercent = (item.price * 159)/maxPrice;
  let backgroundColorStyle = index % 2 === 1 ?'#4B9460' : '#5DB075' ;
  return (
    <View style={styles.expenseItem}>
      <View style={styles.progressContainer}>
        <View style={[styles.progressStyle,{height:progressPercent , backgroundColor:backgroundColorStyle  }]} />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemText}>
          {item.title}
        </Text>
      </View>
    </View>
  );
};

export default ExpenseItem;
