import {useRoute} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import Photos from '../../screens/ProfileScreen/page/Photos/Photos';
import SkeletonPhotos from '../Skeleton/SkeletonPhotos';
import SkeletonPosts from '../Skeleton/SkeletonPosts';
import Warning from '../Warning/Warning';
import FeedItem from './FeedItem';
import styles from './style';

const FeedList = ({state, navigation, loading, showHide}) => {
  const route = useRoute();
  console.log(route.name);
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
  return (
    <View style={styles.contentsBlockContainer}>
      <FlatList
        data={state}
        ListEmptyComponent={<Warning />}
        key={item => item.id}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => renderSwitchValue(item, index)}
      />
    </View>
  );
};

FeedList.propTypes = {
  state: PropTypes.array,
  navigation: PropTypes.object,
  loading: PropTypes.bool,
  showHide: PropTypes.bool,
};

export default FeedList;
