import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FeedItem = ({ item }) => {

    const todaysDate = new Date();

    const createdDate = item.createdData

    const diffMonths = (todaysDate.getFullYear() - createdDate.getFullYear()) * 12 + (todaysDate.getMonth() - createdDate.getMonth());

    return (
        <ScrollView >
            <View style={styles.contentContainer}>

                {console.log("ttttttttttttt", item)}


                <View style={styles.contentBlock}>
                    <Image source={{ uri: item.imageUri }} style={{ width: 50, height: 50, borderRadius: 8, }} />

                </View >

                <View style={styles.contentInfo}>
                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>{item.title}</Text>
                        <Text style={styles.aboutContentDate}>{diffMonths}m ago</Text>
                    </View>
                    <View style={styles.feedTextContainer}>
                        <Text style={styles.feedText}>
                            {item.message}
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
        fontWeight: 400,
        color: '#BDBDBD'
    },
    feedTextContainer: {
        paddingRight: 24
    },
    feedText: {
        fontSize: 14,
        fontWeight: 400,
        color: 'black'
    },
    bottomBorder: {

    },

});

export default FeedItem;
