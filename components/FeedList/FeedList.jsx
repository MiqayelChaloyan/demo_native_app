import React from 'react';
import {useRoute} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import {verticalScale} from '../../assets/metrics/Metrics';
import Photos from '../../screens/ProfileScreen/page/Photos/Photos';
import SkeletonPhotos from '../Skeleton/SkeletonPhotos';
import SkeletonPosts from '../Skeleton/SkeletonPosts';
import Warning from '../Warning/Warning';
import FeedItem from './FeedItem';
import styles from './style';

const FeedList = React.memo(
  ({state, navigation, loading, showHide, screen}) => {
    const route = useRoute();

    const renderSwitchValue = (item, index) => {
      if (route.name === 'Profile') {
        if (showHide) {
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

    console.log('>>> Fead List >>> Render >>> Child');

    return (
      <View
        style={[
          styles.contentsBlockContainer,
          {height: screen === 'Feed' ? verticalScale(356) : verticalScale(275)},
        ]}>
        <FlatList
          data={state}
          ListEmptyComponent={<Warning />}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => renderSwitchValue(item, index)}
        />
      </View>
    );
  },
);

FeedList.propTypes = {
  state: PropTypes.array,
  navigation: PropTypes.object,
  loading: PropTypes.bool,
  showHide: PropTypes.bool,
  screen: PropTypes.string,
};

export default FeedList;
