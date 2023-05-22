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
import styles from './style';

const MarketScreen = ({navigation}) => {
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

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            multiline={false}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.hotDealsContainer}>
          <Text style={styles.hotDealsText}>Hot deals</Text>
          <TouchableOpacity style={styles.playButton}>
            <VideoIcon width={30} height={30} fill={'#5DB075'} />
          </TouchableOpacity>
        </View>

        <ItemList />

        <View style={styles.hotDealsContainer}>
          <Text style={styles.hotDealsText}>Trending</Text>
          <TouchableOpacity style={styles.playButton}>
            <VideoIcon width={30} height={30} fill={'#5DB075'} />
          </TouchableOpacity>
        </View>

        <ItemList />

        <View style={styles.hotDealsContainer}>
          <Text style={styles.hotDealsText}>Deals</Text>
          <TouchableOpacity style={styles.playButton}>
            <VideoIcon width={30} height={30} fill={'#5DB075'} />
          </TouchableOpacity>
        </View>

        <ItemList />
      </View>
    </ScrollView>
  );
};

MarketScreen.propTypes = {
  navigation: PropTypes.object,
};

export default MarketScreen;
