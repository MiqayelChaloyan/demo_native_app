import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import styles from './style';

const diffMonths = item => {
  const currentDate = new Date();
  const createdDate = new Date(item.createdData);
  return (
    (currentDate.getFullYear() - createdDate.getFullYear()) * 12 +
    (currentDate.getMonth() - createdDate.getMonth())
  );
};

const ChangeSwiperItem = ({item}) => {
  const monthsAgo = diffMonths(item);
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
          <Text style={styles.postMessage} numberOfLines={2} ellipsizeMode="tail">
            {item.message}
          </Text>

          <Text style={styles.dateStyle}>{monthsAgo}m ago</Text>
        </View>
      </View>

    </View>
  );
};

ChangeSwiperItem.propTypes = {
  item: PropTypes.object,
};

export default ChangeSwiperItem;
