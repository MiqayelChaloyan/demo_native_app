import React, { useContext } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import FeedItem from './FeedItem';
import { DNAdataContext } from '../../Data/data';
import styles from './style';


const FeedScreen = ({ navigation }) => {
    const { feedData } = useContext(DNAdataContext);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerButtonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
                            <Text style={styles.headerButtonText}>Back</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>Feed</Text>
                    </View>

                    <View style={styles.headerButtonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Market')}>
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
                        key={item => item.id}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return <FeedItem item={item} navigation={navigation} />;
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default FeedScreen;
