import {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import styles from './style';
import {calculateMonthDifference} from '../../assets/features/calculateDiffmonts';

const ChangeSwiperItem = ({item}) => {
  const diffMonths = useMemo(() => calculateMonthDifference(item), [item]);

  return (
    <View style={styles.contentItem}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.imageUri}} />
      </View>
      <View style={styles.itemInfoContainer}>
        <View>
          <Text style={styles.titleStyle}>{item.title}</Text>
        </View>

        <View>
          <Text
            style={styles.postMessage}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.message}
          </Text>

          <Text style={styles.dateStyle}>{diffMonths}m ago</Text>
        </View>
      </View>
    </View>
  );
};

ChangeSwiperItem.propTypes = {
  item: PropTypes.object,
};

export default memo(ChangeSwiperItem);
