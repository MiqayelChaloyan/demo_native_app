import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import MarketItemList from './MarketItemList';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import VideoIcon from '../../assets/icons/Video.svg';
import {theme} from '../../assets/theme/theme';
import { getDataMarketFromFile } from '../../utils/ApiUtils';
import styles from './style';

const MarketScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [state, setState] = useState(data);

  useEffect(() => {
      const fetchData = async () => {
          const result = await getDataMarketFromFile();
          setData(result)
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
          <View style={styles.hotDealsContainer}>
            <Text style={styles.hotDealsText}>Hot deals</Text>
            <TouchableOpacity style={styles.playButton}>
              <VideoIcon
                width={horizontalScale(30)}
                height={verticalScale(30)}
                fill={theme.colors.black}
              />
            </TouchableOpacity>
          </View>
          <MarketItemList data={state} navigation={navigation} />
          <View style={styles.hotDealsContainer}>
            <Text style={styles.hotDealsText}>Trending</Text>
            <TouchableOpacity style={styles.playButton}>
              <VideoIcon
                width={horizontalScale(30)}
                height={verticalScale(30)}
                fill={theme.colors.black}
              />
            </TouchableOpacity>
          </View>
          <MarketItemList data={state} navigation={navigation} />
          <View style={styles.hotDealsContainer}>
            <Text style={styles.hotDealsText}>Deals</Text>
            <TouchableOpacity style={styles.playButton}>
              <VideoIcon
                width={horizontalScale(30)}
                height={verticalScale(30)}
                fill={theme.colors.black}
              />
            </TouchableOpacity>
          </View>
          <MarketItemList data={state} navigation={navigation} />
        </View>
      ) : (
        <View style={styles.warning}>
          <Text style={styles.warningText}>
            Nothing was found in your search results.
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

MarketScreen.propTypes = {
  navigation: PropTypes.object,
};

export default MarketScreen;
