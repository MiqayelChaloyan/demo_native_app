import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FeedItem = () => {


    return (
        <ScrollView >
            <View style={styles.contentContainer}>

                <View style={styles.contentBlock}>


                </View >

                <View style={styles.contentInfo}>
                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>Header</Text>
                        <Text style={styles.aboutContentDate}>8m ago</Text>
                    </View>
                    <View style={styles.feedTextContainer}>
                        <Text style={styles.feedText}>
                            He'll want to use your yacht,
                            and I don't want this thing smelling like fish.
                        </Text>
                    </View>
                    <View style={styles.bottomBorder}>

                    </View>
                </View>

            </View>
        </ScrollView>

    )

};

const styles = StyleSheet.create({

    contentContainer: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.1,
        // backgroundColor: 'khaki',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',


    },
    contentBlock: {
        // position: 'absolute',
        width: 50,
        height: 50,
        // left: 0,
        // top: 0,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
    },
    contentInfo: {
        width: windowWidth * 0.74,
        height: windowHeight * 0.1,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',

        flexDirection: 'column',
        // justifyContent: 'space-between',
        // alignItems: 'flex-start'
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8
    },
    headerText: {
        fontSize: 16,
        fontWeight: 600,
        color: 'black'
    },
    aboutContentDate: {
        fontSize: 14,
        fontWeight: 4,
        color: '#BDBDBD'
    },
    feedTextContainer: {
        paddingRight: 24
    },
    feedText: {
        fontSize: 14,
        fontWeight: 4,
        color: 'black'
    },
    bottomBorder: {

    },

});

export default FeedItem;
