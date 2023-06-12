import {useEffect, useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import FeedList from '../../components/FeedList/FeedList';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import {GlobalDataContext} from '../../contexts/context';
import {getDataFeedsFromFile} from '../../utils/ApiUtils';
import CustomModal from '../../components/Modal/Modal';
import {getDataStorage, setDataStorage} from '../../utils/AsyncStorageApiUtils';
import styles from './style';

const FeedScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const {loggedIn, setFeeds} = useContext(GlobalDataContext);
  const [data, setData] = useState([]);
  const [state, setState] = useState(data);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      const result = getDataFeedsFromFile();
      setData(result);
      return setFeeds(result);
    };
    fetchData();
  }, [loading, setFeeds]);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loggedIn) {
        setShowModal(true);
        checkModalStatus();
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [loggedIn]);

  const checkModalStatus = async () => {
    try {
      const value = await getDataStorage('@modalStatus');
      setShowModal(value === 'closed');
    } catch (error) {
      console.error('Error retrieving modal status:', error);
    }
  };

  const closeModal = async () => {
    try {
      await setDataStorage('@modalStatus', 'closed');
      setShowModal(false);
    } catch (error) {
      console.error('Error storing modal status:', error);
    }
  };

  return (
    data.length > 0 && (
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
          <Search list={data} setState={setState} keyword="title" />
          <FeedList
            state={state}
            navigation={navigation}
            loading={loading}
            screen="Feed"
          />
        </View>
        <CustomModal
          visible={showModal}
          navigation={navigation}
          onClose={closeModal}
        />
      </View>
    )
  );
};

FeedScreen.propTypes = {
  navigation: PropTypes.object,
};

export default FeedScreen;
