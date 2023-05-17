import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

const ExpenseItemList = ({ item, index }) => {

  let backgroundColorStyle = index % 2 === 1 ? "#4B9460" : "#5DB075";
  return (
    <View style={styles.expenseItemOfList}>
      <View style={styles.leftSide}>

        <View style={[styles.circle, { backgroundColor: backgroundColorStyle }]} />

        <View style={styles.titleContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>

      </View>
      <View>
        <Text style={styles.priceText}>$ {item.price}</Text>
      </View>
    </View>

  );
};

export default ExpenseItemList;
