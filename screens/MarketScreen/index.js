import {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View} from 'react-native';
import Warning from '../../components/Warning/Warning';
import Chapter from './Chapter';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';
import useDataForUpdate from '../../customHooks/useDataForUpdate';
import styles from './style';

const MarketScreen = ({navigation}) => {
  const [marketData, setMarketData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [emptyDataMessage, setEmptyDataMessage] = useState('');
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
        <Search
          list={marketData}
          setState={setFilteredData}
          keyword="title"
          setEmptyDataMessage={setEmptyDataMessage}
        />
      </View>
      <View style={styles.contentContainer}>
        {filteredData.length ? (
          <>
            <Chapter
              data={filteredData}
              navigation={navigation}
              header="Hot Deals"
            />
            <Chapter
              data={filteredData}
              navigation={navigation}
              header="Trending"
            />
            <Chapter
              data={filteredData}
              navigation={navigation}
              header="Deals"
            />
          </>
        ) : (
          <View style={styles.warningContainer}>
            <Warning emptyDataMessage={emptyDataMessage} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

MarketScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(MarketScreen);
