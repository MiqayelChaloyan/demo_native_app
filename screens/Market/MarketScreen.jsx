import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ItemList from './ItemList';
import Header from '../../components/Header/Header';
import VideoIcon from '../../assets/icons/Video.svg';
import { theme } from '../../assets/theme/theme';
import styles from './style';

const MarketScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.market}>
      <View style={styles.marketScreenContainer}>
        <Header
          screen={'Market'}
          navigation={navigation}
          back={'Feed'}
          continueTo={'Expenses'}
          left={'Back'}
          right={'Filter'}
        />

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            multiline={false}
          />
        </View>
      </View>

      <View style={styles.hotDealsContainer}>
        <Text style={styles.hotDealsText}>Hot deals</Text>
        <TouchableOpacity>
        <VideoIcon width={30} height={30} fill={theme.colors.green} />
        </TouchableOpacity>
      </View>

      <ItemList />

      <View style={styles.hotDealsContainer}>
        <Text style={styles.hotDealsText}>Trending</Text>
        <TouchableOpacity>
        <VideoIcon width={30} height={30} fill={theme.colors.green} />
        </TouchableOpacity>
      </View>

      <ItemList />

      <View style={styles.hotDealsContainer}>
        <Text style={styles.hotDealsText}>Deals</Text>
        <TouchableOpacity>
        <VideoIcon width={30} height={30} fill={theme.colors.green}/>
        </TouchableOpacity>
      </View>

      <ItemList />
    </ScrollView>
  );
};

MarketScreen.propTypes = {
  navigation: PropTypes.object,
};

export default MarketScreen;
