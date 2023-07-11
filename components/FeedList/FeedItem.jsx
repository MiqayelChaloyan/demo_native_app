import {memo, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {calculateMonthDifference} from '../../assets/features/calculateDiffMonths';
import styles from './style';

const FeedItem = ({item, itemIndex, navigation}) => {
  const {title, imageUri, message, createdData} = item;
  const diffMonths = useMemo(
    () => calculateMonthDifference(createdData),
    [createdData],
  );
  const handlePress = useCallback(() => {
    navigation.navigate({
      name: 'Content',
      params: {itemIndex},
    });
  }, [itemIndex, navigation]);

  return (
    title && (
      <View>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              <Image source={{uri: imageUri}} style={styles.feedItemImage} />
            </View>
            <View style={styles.contentInfo}>
              <View style={styles.headerContent}>
                <Text style={styles.headerFeedText}>{title}</Text>
                <Text style={styles.aboutContentDate}>{diffMonths}m ago</Text>
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
    )
  );
};

FeedItem.propTypes = {
  item: PropTypes.object.isRequired,
  itemIndex: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default memo(FeedItem);
