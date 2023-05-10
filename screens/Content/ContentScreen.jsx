import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ContentScreen = ({ navigation }) => {


    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, alignItems: 'center', }} >
                <View style={styles.headerContainer}>

                    <View style={styles.headerButtonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
                            <Text style={styles.headerButtonText}>
                                Back
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>Content</Text>
                    </View>

                    <View style={styles.headerButtonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate("Market")}>
                            <Text style={styles.headerButtonText}>
                                Filter
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>

                <View style={styles.searchContainer}>

                    <TextInput style={styles.searchInput}
                        placeholder="Search"
                        multiline={false} />

                </View>

                <View style={styles.contentsBlockContainer}>


                </View >

                <View style={styles.contentInfo}>
                    <Text style={styles.headerText}>Header</Text>
                    <View style={styles.feedTextContainer}>
                        <Text style={styles.feedText}>
                            He'll want to use your yacht,
                            and I don't want this thing smelling like fish.
                        </Text>
                    </View>


                    <Text style={styles.aboutContentDate}>8m ago</Text>

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
        position: 'absolute'
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
        height: windowHeight * 0.31,
        backgroundColor: '#F6F6F6',
        marginVertical: windowHeight * 0.02,
        marginHorizontal: windowWidth * 0.05,
        borderRadius: 8
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
    },

    feedText: {
        fontSize: 14,
        fontWeight: 400,
        color: 'black',
        marginVertical: 8,
    },

});

export default ContentScreen;
