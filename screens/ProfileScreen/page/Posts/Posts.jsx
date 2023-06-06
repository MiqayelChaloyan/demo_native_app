import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';

const Posts = ({item}) => {
  const diffMonths = () => {
    const currentDate = new Date();
    const createdDate = new Date(item.createdData);
    return (
      (currentDate.getFullYear() - createdDate.getFullYear()) * 12 +
      (currentDate.getMonth() - createdDate.getMonth())
    );
  };

  const monthsAgo = diffMonths(item);

  return (
    <View>
      <TouchableOpacity>
        <View style={styles.contentContainer}>
          <View style={styles.contentBlock}>
            <Image source={{uri: item.imageUri}} style={styles.postImage} />
          </View>
          <View style={styles.contentInfo}>
            <View style={styles.headerContent}>
              <Text style={styles.headerText}>{item.title}</Text>
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
  );
};

Posts.propTypes = {
  item: PropTypes.object,
};

export default Posts;
