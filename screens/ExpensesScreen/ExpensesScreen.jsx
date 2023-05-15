import React, { useContext } from 'react';
import { Text, FlatList, TextInput, TouchableOpacity, View, ScrollView, } from 'react-native';
import Item from './Item';
import { DNAdataContext } from '../../Data/data';
import styles from './style';

const ExpensesScreen = ({ navigation }) => {
  const { marketData } = useContext(DNAdataContext);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.headerContainer}>
          <View style={styles.headerButtonContainer}>
            <TouchableOpacity>
              <Text style={styles.headerButtonText}>Back</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Market</Text>
          </View>

          <View style={styles.headerButtonContainer}>
            <TouchableOpacity>
              <Text style={styles.headerButtonText}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </ScrollView>
  );
};

export default ExpensesScreen;
