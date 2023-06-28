import React, {useState, useCallback, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import {useRoute} from '@react-navigation/native';
import {FlatList, View} from 'react-native';
import Photos from '../../screens/ProfileScreen/page/Photos/Photos';
import SkeletonPhotos from '../Skeleton/SkeletonPhotos';
import SkeletonPosts from '../Skeleton/SkeletonPosts';
import Warning from '../Warning/Warning';
import FeedItem from './FeedItem';
import Search from '../Search/Search';
import {GlobalDataContext} from '../../contexts/context';
import styles from './style';

const FeedList = ({navigation, showHide}) => {
  const route = useRoute();
  const {feeds} = useContext(GlobalDataContext);
  const [data, setData] = useState(feeds);
  const [emptyDataMessage, setEmptyDataMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);

  const loadedData = () => {
    const timer = setTimeout(() => setIsLoaded(false), 2500);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    loadedData();
  }, []);

  const renderSwitchValue = (item, index) => {
    if (route.name === "Profile") {
      if (showHide) {
        return isLoaded ? (
          <SkeletonPosts />
        ) : (
          <FeedItem item={item} itemIndex={index} navigation={navigation} />
        );
      } else {
        return isLoaded ? <SkeletonPhotos /> : <Photos item={item} />;
      }
    }

    return isLoaded ? (
      <SkeletonPosts />
    ) : (
      <FeedItem item={item} itemIndex={index} navigation={navigation} />
    );
  };

  const searchResult = useCallback((result) => {
    return setData(result);
  }, []);

  const specifiedResultText = useCallback((text) => {
    return setEmptyDataMessage(text);
  }, []);

  return (
    <>
      {
        route.name === 'Feed' && feeds.length > 0 &&
        <Search list={feeds} researchResult={searchResult} keyword="title" setEmptyDataMessage={specifiedResultText} />
      }
      <View
        style={[
          styles.contentsBlockContainer]}>
        <FlatList
          data={route.name === 'Feed' ? data : feeds}
          ListEmptyComponent={<Warning emptyDataMessage={emptyDataMessage} />}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => renderSwitchValue(item, index)}
        />
      </View>
    </>
  );
};

FeedList.propTypes = {
  navigation: PropTypes.object.isRequired,
  showHide: PropTypes.bool,
};

export default React.memo(FeedList);
