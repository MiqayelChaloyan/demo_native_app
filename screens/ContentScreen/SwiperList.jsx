import {memo, useEffect, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Keyboard, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {theme} from '../../assets/theme/theme';
import ChangeSwiperItem from './ChangeSwiperItem';
import styles from './style';

const SwiperList = ({itemIndex, data}) => {
  const [keyboardStatus, setKeyboardStatus] = useState(true);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(false);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(true);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [keyboardStatus]);

  const renderItem = useCallback(item => <ChangeSwiperItem item={item} />, []);

  return (
    keyboardStatus && (
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
          data={data}
          renderItem={renderItem}
        />
      </View>
    )
  );
};

SwiperList.propTypes = {
  itemIndex: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default memo(SwiperList);
