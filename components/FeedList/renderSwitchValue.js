import SkeletonPosts from '../Skeleton/SkeletonPosts';
import FeedItem from './FeedItem';
import SkeletonPhotos from '../Skeleton/SkeletonPhotos';
import Photos from '../../screens/ProfileScreen/page/Photos/Photos';

const renderSwitchValue = (
  item,
  index,
  navigation,
  loading,
  showPostsOrPhotos,
  route,
) => {
  const renderPosts = () =>
    loading ? (
      <SkeletonPosts />
    ) : (
      <FeedItem item={item} itemIndex={index} navigation={navigation} />
    );

  const renderPhotos = () =>
    loading ? <SkeletonPhotos /> : <Photos item={item} />;

  if (route.name === 'Profile') {
    return showPostsOrPhotos ? renderPosts() : renderPhotos();
  } else {
    return renderPosts();
  }
};

export default renderSwitchValue;
