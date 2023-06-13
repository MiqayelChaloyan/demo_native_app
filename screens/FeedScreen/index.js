import PropTypes from 'prop-types';
import {useEffect, useState, useContext, useCallback, useMemo} from 'react';
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
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const {loggedIn, setFeeds} = useContext(GlobalDataContext);

  const fetchData = useCallback(() => {
    const result = getDataFeedsFromFile();
    setInitialData(result);
    return setFeeds(result);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const changeLoadingState = useMemo(() => () => setLoading(false), []);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => changeLoadingState(), 2500);
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

  const checkModalStatus = useCallback(async () => {
    try {
      const value = await getDataStorage('@modalStatus');
      setShowModal(value === 'closed');
    } catch (error) {
      console.error('Error retrieving modal status:', error);
    }
  }, []);

  const closeModal = useCallback(async () => {
    try {
      await setDataStorage('@modalStatus', 'closed');
      setShowModal(false);
    } catch (error) {
      console.error('Error storing modal status:', error);
    }
  }, []);

  return (
    initialData.length > 0 && (
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
          <Search list={initialData} setState={setData} keyword="title" />
          <FeedList
            state={data}
            navigation={navigation}
            loading={loading}
            screen="Feed"
          />
        </View>
        {showModal && (
          <CustomModal
            visible={showModal}
            navigation={navigation}
            onClose={closeModal}
          />
        )}
      </View>
    )
  );
};

FeedScreen.propTypes = {
  navigation: PropTypes.object,
};

export default FeedScreen;
