import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import BuyIcon from '../../assets/icons/Buy.svg';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const ContentItemList = ({item, index}) => {
  const navigation = useNavigation();
  let backgroundColorStyle =
    index % 2 === 1 ? theme.colors.darkGray : theme.colors.lightGray;

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

      <TouchableOpacity
        onPress={() => {
          navigation.navigate({
            name: 'Feed',
            params: {index},
            merge: true,
          });
        }}>
        <View>
          <BuyIcon width={45} height={45} fill={theme.colors.green} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

ContentItemList.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default ContentItemList;
