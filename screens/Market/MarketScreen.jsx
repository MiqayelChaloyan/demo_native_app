import React, { useContext, useEffect, useState } from "react";
import { Text, FlatList, TextInput, TouchableOpacity, View, ScrollView, } from 'react-native';
import Item from './Item';
import { DNAdataContext } from '../../Data/data';
import styles from './style';
import MarketSkeletonItem from "../../components/MarketSkeleton";

const MarketScreen = ({ navigation }) => {
  const { marketData } = useContext(DNAdataContext);
  const [isLoading , setIsLoading]= useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView style={styles.marketScreen}>
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

      <View style={styles.itemsContainer}>

          <FlatList
            numColumns={3}
            data={marketData}
            key={item => item.id}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return  isLoading ? <MarketSkeletonItem/>
                 : <Item item={item} navigation={navigation} />
              ;
            }}
          />

      </View>

      <View style={styles.hotDealsContainer}>
        <Text style={styles.hotDealsText}>Trending</Text>
      </View>

      <View style={styles.itemsContainer}>
        <FlatList
          numColumns={3}
          data={marketData}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return  isLoading ? <MarketSkeletonItem/>
              : <Item item={item} navigation={navigation} />
              ;
          }}
        />
      </View>

      <View style={styles.hotDealsContainer}>
        <Text style={styles.hotDealsText}>Deals</Text>
      </View>

      <View style={styles.itemsContainer}>
        <FlatList
          numColumns={3}
          data={marketData}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return  isLoading ? <MarketSkeletonItem/>
              : <Item item={item} navigation={navigation} />
              ;
          }}
        />

      </View>
    </ScrollView>
  );
};

export default MarketScreen;
