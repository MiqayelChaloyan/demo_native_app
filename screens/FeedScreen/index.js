import PropTypes from 'prop-types';
import React, {useEffect, useState, useContext, useCallback} from 'react';
import {View} from 'react-native';
import FeedList from '../../components/FeedList/FeedList';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import {GlobalDataContext} from '../../contexts/context';
import {getDataFeedsFromFile} from '../../utils/ApiUtils';
import CustomModal from '../../components/Modal/Modal';
import {getDataStorage, setDataStorage} from '../../utils/AsyncStorageApiUtils';
import useEffectAfterMount from '../../customHooks/useEffectAfterMount';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const FeedScreen = () => {
  const navigation = useNavigation();
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

  const changeLoadingState = useCallback(() => setLoading(false), []);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => changeLoadingState(), 2500);
    return () => clearTimeout(timer);
  }, []);

  // TODO: This part is for a test and will be changed lately.
  const startModalTimer = useCallback(() => {
    const timer = setTimeout(() => {
      if (loggedIn) {
        setShowModal(true);
        checkModalStatus();
      }
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  useEffectAfterMount(() => {
    startModalTimer();
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

  const getFeedListData = useCallback(state => {
    return setData(state);
  }, []);

  console.log('The parent component is rendered >>>> screen >>>>>');

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
        <Search list={initialData} setState={getFeedListData} keyword="title" />
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
  );
};

FeedScreen.propTypes = {
  navigation: PropTypes.object,
};

export default FeedScreen;
