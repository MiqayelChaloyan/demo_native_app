import {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {calculateMonthDifference} from '../../assets/features/calculateDiffmonts';

const FeedItem = ({item, itemIndex, navigation}) => {
  const diffMonths = useMemo(() => calculateMonthDifference(item), [item]);

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
    )
  );
};

FeedItem.propTypes = {
  item: PropTypes.object,
  itemIndex: PropTypes.number,
  navigation: PropTypes.object,
};

export default FeedItem;
