import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {theme} from '../../assets/theme/theme';
import styles from './style';
import {useRoute} from '@react-navigation/native';

const ExpenseItemList = ({item, index}) => {
  let backgroundColorStyle =
    index % 2 === 1 ? theme.colors.dark_green : theme.colors.primary_green;
  const route = useRoute();
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
      {route.name === 'Calendar' ? (
        <View>
          <Text style={styles.priceText}>{item.time} min</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.priceText}>$ {item.price}</Text>
        </View>
      )}
    </View>
  );
};

ExpenseItemList.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default ExpenseItemList;
