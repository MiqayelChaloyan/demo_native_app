import PropTypes from 'prop-types';
import {memo} from 'react';
import {Text, View} from 'react-native';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const ExpenseItemList = props => {
  const {item, index} = props;
  const backgroundColorStyle =
    index % 2 === 1 ? theme.colors.dark_green : theme.colors.primary_green;

  return (
    <View style={styles.expenseItemOfList}>
      <View style={styles.leftSide}>
        <View
          style={[styles.circle, {backgroundColor: backgroundColorStyle}]}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.priceText}>$ {item.price}</Text>
      </View>
    </View>
  );
};

ExpenseItemList.propTypes = {
  props: PropTypes.object,
};

export default memo(ExpenseItemList);
