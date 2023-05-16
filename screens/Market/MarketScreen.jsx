import React from "react";
import { Text,TextInput, TouchableOpacity, View, ScrollView, } from 'react-native';
import styles from './style';
import ItemList from "./ItemList";

const MarketScreen = () => {


  return (
    <ScrollView style={styles.market}>
      <View style={styles.marketScreenContainer}>
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

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            multiline={false}
          />
        </View>
      </View>

      <View style={styles.hotDealsContainer}>
        <Text style={styles.hotDealsText}>Hot deals</Text>
      </View>

      <ItemList/>

      <View style={styles.hotDealsContainer}>
        <Text style={styles.hotDealsText}>Trending</Text>
      </View>

      <ItemList/>

      <View style={styles.hotDealsContainer}>
        <Text style={styles.hotDealsText}>Deals</Text>
      </View>

      <ItemList/>

    </ScrollView>
  );
};

export default MarketScreen;
