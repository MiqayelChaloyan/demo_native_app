import {useRoute} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import Photos from '../../screens/ProfileScreen/page/Photos/Photos';
import SkeletonPhotos from '../Skeleton/SkeletonPhotos';
import SkeletonPosts from '../Skeleton/SkeletonPosts';
import FeedItem from './FeedItem';
import styles from './style';
import {memo, useMemo, useState} from 'react';
import Search from '../Search/Search';
import Warning from '../Warning/Warning';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';
import useDataForUpdate from '../../customHooks/useDataForUpdate';

const FeedList = ({navigation, loading, showPostsOrPhotos}) => {
  const route = useRoute();
  const [feedData, setFeedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const {data, error} = useDataFromAPI('feeds');

  useDataForUpdate(data, setFeedData, error);

  const renderSwitchValue = (item, index) => {
    if (route.name === 'Profile') {
      if (showPostsOrPhotos) {
        return loading ? (
          <SkeletonPosts />
        ) : (
          <FeedItem item={item} itemIndex={index} navigation={navigation} />
        );
      } else {
        return loading ? <SkeletonPhotos /> : <Photos item={item} />;
      }
    } else {
      return loading ? (
        <SkeletonPosts />
      ) : (
        <FeedItem item={item} itemIndex={index} navigation={navigation} />
      );
    }
  };

  const dataOfList = route.name === 'Feed' ? filteredData : feedData;

  return (
    <>
      {route.name === 'Feed' && (
        <Search list={feedData} setState={setFilteredData} keyword="title" />
      )}
      <View style={styles.contentsBlockContainer}>
        <FlatList
          data={dataOfList}
          ListEmptyComponent={<Warning />}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => renderSwitchValue(item, index)}
        />
      </View>
    </>
  );
};

FeedList.propTypes = {
  navigation: PropTypes.object,
  loading: PropTypes.bool,
  showPostsOrPhotos: PropTypes.bool,
};

export default memo(FeedList);
