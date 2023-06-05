import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import Warning from '../../components/Warning/Warning';
import Chapter from './Chapter';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import {getDataMarketFromFile} from '../../utils/ApiUtils';
import styles from './style';

const MarketScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [state, setState] = useState(data);

  useEffect(() => {
    const fetchData = () => {
      const result = getDataMarketFromFile();
      setData(result);
    };
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
        <Search list={data} setState={setState} keyword="title" />
      </View>
      {state.length ? (
        <View style={styles.contentContainer}>
          <Chapter data={state} navigation={navigation} header="Hot Deals" />
          <Chapter data={state} navigation={navigation} header="Trending" />
          <Chapter data={state} navigation={navigation} header="Deals" />
        </View>
      ) : (
        <Warning />
      )}
    </ScrollView>
  );
};

MarketScreen.propTypes = {
  navigation: PropTypes.object,
};

export default MarketScreen;
