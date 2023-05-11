import React, { useContext } from 'react';
import { Dimensions, ScrollView, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FeedItem from './FeedItem';
import { DNAdataContext } from '../../Data/data';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FeedScreen = ({ navigation }) => {

    const { feedData } = useContext(DNAdataContext);


    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, alignItems: 'center', }} >
                <View style={styles.headerContainer}>

                    <View style={styles.headerButtonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
                            <Text style={styles.headerButtonText}>
                                Back
                            </Text>
                        </TouchableOpacity>
                    </View>

          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Feed</Text>
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

                <View style={styles.contentsBlockContainer}>

                    <FlatList
                        data={feedData}
                        key={(item) => item.id}

                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => {
                            return (

                                <FeedItem
                                    item={item}
                                />
                            )

                        }}

                    />


                </View>


            </View>

        </ScrollView>

    )
};

const styles = StyleSheet.create({
  headerContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.046,
    marginTop: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red'
  },
  headerTextContainer: {},
  headerText: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
    color: 'black',

    // backgroundColor: 'red'
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
  contentsBlockContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.45,
    // backgroundColor: 'pink',
    marginVertical: windowHeight * 0.02,
    marginHorizontal: windowWidth * 0.05,
    justifyContent: 'space-between',
  },
});

export default FeedScreen;
