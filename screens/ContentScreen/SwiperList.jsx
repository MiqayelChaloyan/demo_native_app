import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {theme} from '../../assets/theme/theme';
import ChangeSwiperItem from './ChangeSwiperItem';
import styles from './style';

const SwiperList = ({feeds}) => {
  return (
    <View style={styles.swiperItemContainer}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        index={1}
        showPagination
        paginationStyle={styles.paginationStyle}
        paginationStyleItemInactive={styles.dotStyle}
        paginationStyleItemActive={[
          styles.dotStyle,
          {backgroundColor: theme.colors.primary_green},
        ]}
        data={feeds}
        renderItem={({ item }) => <ChangeSwiperItem item={item} />}
      />
    </View>
  );
};

SwiperList.propTypes = {
  feeds: PropTypes.array,
};

export default React.memo(SwiperList);