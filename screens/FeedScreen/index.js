import PropTypes from 'prop-types';
import {View} from 'react-native';
import FeedList from '../../components/FeedList/FeedList';
import Header from '../../components/Header/Header';
import styles from './style';

const FeedScreen = ({navigation}) => {
  // TODO: This part is for a test and will be changed lately.
  return (
    <View style={styles.feedScreenContainer}>
      <View style={styles.feedScreen}>
        <Header
          screen="Feed"
          navigation={navigation}
          back="Auth"
          continueTo="Market"
          left="Back"
          right="Filter"
        />
        <FeedList navigation={navigation} />
      </View>
    </View>
  );
};

FeedScreen.propTypes = {
  navigation: PropTypes.object,
};

export default FeedScreen;
