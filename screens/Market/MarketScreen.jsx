import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Item from './Item';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MarketScreen = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
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
        <Item />
        <Item />
        <Item />
      </View>

      <View style={styles.hotDealsContainer}>
        <Text style={styles.hotDealsText}>Trending</Text>
      </View>

      <View style={styles.itemsContainer}>
        <Item />
        <Item />
        <Item />
      </View>

      <View style={styles.hotDealsContainer}>
        <Text style={styles.hotDealsText}>Deals</Text>
      </View>

      <View style={styles.itemsContainer}>
        <Item />
        <Item />
        <Item />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.046,
    marginTop: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentInfo: {
    width: windowWidth * 0.9,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
    color: 'black',
  },
  headerButtonContainer: {
    width: windowWidth * 0.105,
    height: windowHeight * 0.024,
  },
  headerButtonText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#5DB075',
    position: 'absolute',
  },
  searchContainer: {
    width: windowWidth * 0.9,
    marginTop: windowHeight * 0.05,
    marginHorizontal: windowWidth * 0.05,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  hotDealsContainer: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.04,
    // backgroundColor: 'red',
    marginLeft: windowWidth * 0.05,
    marginTop: windowHeight * 0.04,
    marginBottom: windowHeight * 0.02,
  },
  hotDealsText: {
    fontSize: 24,
    fontWeight: 500,
    color: 'black',
  },
  itemsContainer: {
    flexDirection: 'row',
    marginLeft: windowWidth * 0.05,
    gap: windowWidth * 0.043,
  },
});

export default MarketScreen;
