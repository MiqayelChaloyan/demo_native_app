import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FeedItem from './FeedItem';
import { DNAdataContext } from '../../Data/data';
import styles from './style';
import SkeletonPosts from '../../components/Skeleton/SkeletonPosts';

const FeedScreen = ({ navigation }) => {
  const { feedData } = useContext(DNAdataContext);
  const [loading, setLoading] = useState(true);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
      <View style={styles.feedScreenContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
              <Text style={styles.headerButtonText}>Back</Text>
            </TouchableOpacity>
          </View>

          <View>
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
              return loading ? (
                <View style={styles.skeleton}>
                  <SkeletonPosts />
                </View>
              ) : (
                <FeedItem
                  item={item}
                  itemIndex={index}
                  navigation={navigation}
                />
              );
            }}
          />
        </View>
      </View>
  );
};

export default FeedScreen;
