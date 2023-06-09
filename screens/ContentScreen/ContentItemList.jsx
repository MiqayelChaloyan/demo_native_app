import {memo, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import BuyIcon from '../../assets/icons/Buy.svg';
import {useNavigation} from '@react-navigation/native';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const ContentItemList = ({item, index}) => {
  const navigation = useNavigation();

  const backgroundColorStyle =
    index % 2 === 1 ? theme.colors.light_gray : theme.colors.cool_gray;
  const navigateTo = useCallback(() => {
    navigation.navigate({
      name: 'Feed',
      params: {index},
    });
  }, []);

  return (
    <View style={styles.contentItemOfList}>
      <View style={styles.leftSide}>
        <View
          style={[styles.circle, {backgroundColor: backgroundColorStyle}]}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={navigateTo}>
        <View>
          <BuyIcon
            width={horizontalScale(45)}
            height={verticalScale(45)}
            fill={theme.colors.primary_green}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

ContentItemList.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default memo(ContentItemList);
