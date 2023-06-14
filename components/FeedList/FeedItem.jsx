import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';

const FeedItem = React.memo(
  ({item, itemIndex, navigation}) => {
    const diffMonths = () => {
      const currentDate = new Date();
      const createdDate = new Date(item.createdData);
      return (
        (currentDate.getFullYear() - createdDate.getFullYear()) * 12 +
        (currentDate.getMonth() - createdDate.getMonth())
      );
    };

    const monthsAgo = diffMonths(item);

    console.log('The child component is rendered >>>> item');

    return (
      item.title && (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate({
                name: 'Content',
                params: {itemIndex},
              });
            }}>
            <View style={styles.contentContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: item.imageUri}}
                  style={styles.feedItemImage}
                />
              </View>
              <View style={styles.contentInfo}>
                <View style={styles.headerContent}>
                  <Text style={styles.headerFeedText}>{item.title}</Text>
                  <Text style={styles.aboutContentDate}>{monthsAgo}m ago</Text>
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
      )
    );
  },
  (prevProps, nextProps) => {
    return prevProps.data === nextProps.data;
  },
);

FeedItem.propTypes = {
  item: PropTypes.object,
  itemIndex: PropTypes.number,
  navigation: PropTypes.object,
};

export default FeedItem;
