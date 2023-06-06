import PropTypes from 'prop-types';
import {View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {theme} from '../../assets/theme/theme';
import ChangeSwiperItem from './ChangeSwiperItem';
import styles from './style';

const SwiperList = ({itemIndex, feeds}) => {
  return (
    <View style={styles.swiperItemContainer}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        index={itemIndex}
        showPagination
        paginationStyle={styles.paginationStyle}
        paginationStyleItemInactive={styles.dotStyle}
        paginationStyleItemActive={[
          styles.dotStyle,
          {backgroundColor: theme.colors.primary_green},
        ]}
        data={feeds}
        renderItem={ChangeSwiperItem}
      />
    </View>
  );
};
SwiperList.propTypes = {
  feeds: PropTypes.array,
  itemIndex: PropTypes.number,
};

export default SwiperList;
