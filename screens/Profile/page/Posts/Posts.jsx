import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';

const Posts = ({item}) => {
  const todaysDate = new Date();
  const createdDate = item.createdData;

  const diffMonths =
    (todaysDate.getFullYear() - createdDate.getFullYear()) * 12 +
    (todaysDate.getMonth() - createdDate.getMonth());

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

Posts.propTypes = {
  item: PropTypes.object,
};

export default Posts;
