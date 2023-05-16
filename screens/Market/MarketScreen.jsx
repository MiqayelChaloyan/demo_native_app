import React from 'react';
import {Text, TextInput, View, ScrollView} from 'react-native';
import ItemList from './ItemList';
import Header from '../../components/Header/Header';
import styles from './style';

const MarketScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.market}>
      <View style={styles.marketScreenContainer}>
        <Header
          screen={'Market'}
          navigation={navigation}
          back={'Feed'}
          continueTo={'Expenses'}
        />

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

      <ItemList />

      <View style={styles.hotDealsContainer}>
        <Text style={styles.hotDealsText}>Trending</Text>
      </View>

      <ItemList />

      <View style={styles.hotDealsContainer}>
        <Text style={styles.hotDealsText}>Deals</Text>
      </View>

      <ItemList />
    </ScrollView>
  );
};

export default MarketScreen;
