import PropTypes from 'prop-types';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

const FeedItem = ({ item, itemIndex, navigation }) => {
  const { title, imageUri, message, createdData } = item;

  const diffMonths = (createdData) => {
    const currentDate = new Date();
    const createdDate = new Date(createdData);
    return (
      (currentDate.getFullYear() - createdDate.getFullYear()) * 12 +
      (currentDate.getMonth() - createdDate.getMonth())
    );
  };

  const monthsAgo = diffMonths(createdData);

  return  title && (
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
            <Image
              source={{ uri: imageUri }}
              style={styles.feedItemImage}
            />
          </View>
          <View style={styles.contentInfo}>
            <View style={styles.headerContent}>
              <Text style={styles.headerFeedText}>{title}</Text>
              <Text style={styles.aboutContentDate}>{monthsAgo}m ago</Text>
            </View>
            <View style={styles.feedTextContainer}>
              <Text
                style={styles.feedText}
                numberOfLines={2}
                ellipsizeMode="tail">
                {message}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

FeedItem.propTypes = {
  item: PropTypes.object.isRequired,
  itemIndex: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default React.memo(FeedItem);

