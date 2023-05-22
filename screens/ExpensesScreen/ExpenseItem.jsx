import {useContext} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {DNAdataContext} from '../../Data/data';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const ExpenseItem = ({item, index}) => {
  const {expensesData} = useContext(DNAdataContext);
  const priceArray = expensesData.map(item => item.price);
  const maxPrice = Math.max(...priceArray);
  let progressPercent = (item.price * 159) / maxPrice;
  let backgroundColorStyle =
    index % 2 === 1 ? theme.colors.darkGreen : theme.colors.green;

  return (
    <View style={styles.expenseItem}>
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressStyle,
            {height: progressPercent, backgroundColor: backgroundColorStyle},
          ]}
        />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    </View>
  );
};

ExpenseItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default ExpenseItem;
