import {memo, useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';
import styles from './style';
import useTimeout from '../../customHooks/useTimeout';

const ExpenseItem = ({item, index, data}) => {
  const [percent, setPercent] = useState(0);
  const priceArray = useMemo(() => data.map(expItem => expItem.price), [data]);
  const maxPrice = useCallback(() => Math.max(...priceArray), [priceArray]);
  const progressPercent = useMemo(
    () => (item.price * verticalScale(150)) / maxPrice(),
    [item.price, maxPrice],
  );

  const backgroundColorStyle =
    index % 2 === 1 ? theme.colors.dark_green : theme.colors.primary_green;

  const updatePercent = useCallback(() => {
    if (percent < Math.ceil(progressPercent)) {
      setPercent(prevPercent => prevPercent + 2);
    }
  }, [percent, progressPercent]);

  useTimeout(updatePercent, 15);
  return (
    <View style={styles.expenseItem}>
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressStyle,
            {height: percent, backgroundColor: backgroundColorStyle},
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
  data: PropTypes.array,
};

export default memo(ExpenseItem);
