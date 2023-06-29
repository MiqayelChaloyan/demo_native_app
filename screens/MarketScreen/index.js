import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import {getDataFromFile} from '../../utils/ApiUtils';
import MarketContent from './MarketContent';
import styles from './style';

const MarketScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const result = getDataFromFile('market');
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.marketContainer}>
      <View style={styles.headerPartContainer}>
        <Header
          screen="Market"
          navigation={navigation}
          back="Feed"
          continueTo="Expenses"
          left="Back"
          right="Filter"
        />
      </View>
      {
        data.length > 0 &&
        <MarketContent
          navigation={navigation}
          initialData={data}
        />
      }
    </ScrollView>
  );
};

MarketScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(MarketScreen);
