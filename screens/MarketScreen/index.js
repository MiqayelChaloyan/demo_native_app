import {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';
import Warning from '../../components/Warning/Warning';
import Chapter from './Chapter';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';
import styles from './style';
import useDataForUpdate from '../../customHooks/useDataForUpdate';

const MarketScreen = ({navigation}) => {
  const [marketData, setMarketData] = useState([]);
  const [state, setState] = useState([]);
  const {data, error} = useDataFromAPI('market');

  useDataForUpdate(data, setMarketData, error);
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
        <Search list={marketData} setState={setState} keyword="title" />
      </View>
      <View style={styles.contentContainer}>
        {state.length ? (
          <>
            <Chapter data={state} navigation={navigation} header="Hot Deals" />
            <Chapter data={state} navigation={navigation} header="Trending" />
            <Chapter data={state} navigation={navigation} header="Deals" />
          </>
        ) : (
          <View style={styles.warningContainer}>
            <Warning />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

MarketScreen.propTypes = {
  navigation: PropTypes.object,
};

export default memo(MarketScreen);
