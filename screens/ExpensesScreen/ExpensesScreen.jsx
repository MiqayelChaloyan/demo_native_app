import React, { useContext } from 'react';
import { Text, TouchableOpacity, View,  } from 'react-native';
import { DNAdataContext } from "../../Data/data";
import styles from "./style";

const ExpensesScreen = () => {
  const { expensesData } = useContext(DNAdataContext);

  return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerButtonContainer}>
            <TouchableOpacity>
              <Text style={styles.headerButtonText}>Back</Text>
            </TouchableOpacity>
          </View>

          <View >
            <Text style={styles.headerText}>Market</Text>
          </View>

          <View style={styles.headerButtonContainer}>
            <TouchableOpacity>
              <Text style={styles.headerButtonText}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

  );
};

export default ExpensesScreen;
