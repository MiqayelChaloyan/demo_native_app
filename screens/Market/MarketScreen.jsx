import PropTypes from 'prop-types';
import {useContext, useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import ItemList from './ItemList';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import VideoIcon from '../../assets/icons/Video.svg';
import {theme} from '../../assets/theme/theme';
import {GlobalDataContext} from '../../Data/context';
import styles from './style';

const MarketScreen = ({navigation}) => {
  const {marketData} = useContext(GlobalDataContext);
  const [state, setState] = useState(marketData);

  return (
    <ScrollView style={styles.market}>
      <View style={styles.headerPartContainer}>
        <Header
          screen={'Market'}
          navigation={navigation}
          back={'Feed'}
          continueTo={'Expenses'}
          left={'Back'}
          right={'Filter'}
        />
        <Search list={marketData} setState={setState} keyword="title" />
      </View>
      {state.length ? (
        <View style={styles.contentContainer}>
          <View style={styles.hotDealsContainer}>
            <Text style={styles.hotDealsText}>Hot deals</Text>
            <TouchableOpacity style={styles.playButton}>
              <VideoIcon width={30} height={30} fill={theme.colors.green} />
            </TouchableOpacity>
          </View>
          <ItemList data={state} />
          <View style={styles.hotDealsContainer}>
            <Text style={styles.hotDealsText}>Trending</Text>
            <TouchableOpacity style={styles.playButton}>
              <VideoIcon width={30} height={30} fill={theme.colors.green} />
            </TouchableOpacity>
          </View>
          <ItemList data={state} />
          <View style={styles.hotDealsContainer}>
            <Text style={styles.hotDealsText}>Deals</Text>
            <TouchableOpacity style={styles.playButton}>
              <VideoIcon width={30} height={30} fill={theme.colors.green} />
            </TouchableOpacity>
          </View>
          <ItemList data={state} />
        </View>
      ) : (
        <View style={styles.warning}>
          <Text style={styles.warningText}>
            Nothing was found in your search results.
          </Text>
        </View>
      )}
      {/* </View> */}
    </ScrollView>
  );
};

MarketScreen.propTypes = {
  navigation: PropTypes.object,
};

export default MarketScreen;
