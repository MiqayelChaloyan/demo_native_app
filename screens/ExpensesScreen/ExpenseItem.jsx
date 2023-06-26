import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';
import {getDataFromFile} from '../../utils/ApiUtils';
import styles from './style';

const ExpenseItem = ({item, index}) => {
  const {title, price} = item;
  const [percent, setPercent] = useState(0);
  const [data, setData] = useState([]);
  const priceArray = data.map(expItem => expItem.price);
  const maxPrice = Math.max(...priceArray);
  let progressPercent = (price * verticalScale(150)) / maxPrice;
  let backgroundColorStyle =
    index % 2 === 1 ? theme.colors.dark_green : theme.colors.primary_green;

  const fetchData = () => {
    const result = getDataFromFile('expenses');
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (percent < Math.ceil(progressPercent)) {
        setPercent(percent + 2);
      }
    }, 15);

    return () => clearTimeout(timer);
  }, [percent, progressPercent]);

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
        <Text style={styles.itemText}>{title}</Text>
      </View>
    </View>
  );
};

ExpenseItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default React.memo(ExpenseItem);
