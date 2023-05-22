import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, TextInput, View} from 'react-native';
import FeedItem from './FeedItem';
import {DNAdataContext} from '../../Data/data';
import SkeletonPosts from '../../components/Skeleton/SkeletonPosts';
import Header from '../../components/Header/Header';
import styles from './style';

const FeedScreen = ({navigation}) => {
  const {feedData} = useContext(DNAdataContext);
  const [loading, setLoading] = useState(true);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.feedScreen}>
      <View style={styles.feedScreenContainer}>
        <Header
          screen={'Feed'}
          navigation={navigation}
          back={'Auth'}
          continueTo={'Market'}
          left={'Back'}
          right={'Filter'}
        />
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
            renderItem={({item, index}) => {
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
    </View>
  );
};

FeedScreen.propTypes = {
  navigation: PropTypes.object,
};

export default FeedScreen;
