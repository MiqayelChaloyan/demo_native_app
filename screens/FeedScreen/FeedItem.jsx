import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const FeedItem = ({ item, itemIndex, navigation }) => {
  // const currentDate = new Date();
  // const createdDate = item && item.createdData;
  // const diffMonths = createdDate ?
  //   (currentDate.getFullYear() - createdDate.getFullYear()) * 12 +
  //   (currentDate.getMonth() - createdDate.getMonth());

  const diffMonths = 15;

  return (
    item &&
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({
            name: 'Content',
            params: { itemIndex },
          });
        }}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.imageUri }} style={styles.feedItemImage} />
          </View>
          <View style={styles.contentInfo}>
            <View style={styles.headerContent}>
              <Text style={styles.headerFeedText}>{item.title}</Text>
              <Text style={styles.aboutContentDate}>{diffMonths}m ago</Text>
            </View>
            <View style={styles.feedTextContainer}>
              <Text
                style={styles.feedText}
                numberOfLines={2}
                ellipsizeMode="tail">
                {item.message}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

FeedItem.propTypes = {
  item: PropTypes.object,
  itemIndex: PropTypes.number,
  navigation: PropTypes.object,
};

export default FeedItem;
