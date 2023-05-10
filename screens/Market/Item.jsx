import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Item = () => {


    return (
        <View style={styles.singleItemContainer}>
            <View style={styles.itemImageContainer}>

            </View>
            <View style={styles.itemNameContainer}>
                <Text style={styles.itemNameText}>
                    Item #1 Name Goes Here
                </Text>
            </View>
            <View style={styles.itemPriceContainer}>
                <Text style={styles.itemPriceText}>
                    $19.99
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    itemImageContainer: {
        width: windowWidth * 0.3,
        height: windowWidth * 0.3,
        backgroundColor: '#F6F6F6',
        borderRadius: 8
    },
    itemNameContainer: {
        width: windowWidth * 0.3,
        height: windowHeight * 0.045,
        marginVertical: windowHeight * 0.01
    },
    itemNameText: {
        fontSize: 14,
        fontWeight: 400,
        color: 'black'
    },
    itemPriceContainer: {
        width: windowWidth * 0.128,
    },
    itemPriceText: {
        fontSize: 14,
        fontWeight: 600,
        color: 'black'
    }

});

export default Item;