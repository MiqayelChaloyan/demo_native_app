import {useEffect, useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import FeedList from '../../components/FeedList/FeedList';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import {GlobalDataContext} from '../../contexts/context';
import {getDataFeedsFromFile} from '../../utils/ApiUtils';
import EvaluationModal from '../../components/Modal/Modal';
import {getDataStorage, setDataStorage} from '../../utils/AsyncStorageApiUtils';
import styles from './style';

const FeedScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const {setFeeds} = useContext(GlobalDataContext);
  const [data, setData] = useState([]);
  const [state, setState] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState(true);
  const [nothingData, setNothingData] = useState('');

  const fetchData = async () => {
      const result = getDataFeedsFromFile();
      setData(result);
      return setFeeds(result);
  }

  useEffect(() => {
    fetchData();
  }, [loading]);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // TODO: This part is for a test and will be changed lately.
  const calculateElapsedTime = (currentTime, lastTime) => {
    if (!lastTime) {
      return Number.MAX_SAFE_INTEGER; 
    }

    const lastPopUpTime = new Date(lastTime);
    const elapsedMilliseconds = currentTime - lastPopUpTime;
    const elapsedHours = elapsedMilliseconds / (1000 * 60 * 60);

    return elapsedHours;
  };

  const openModal = async () => {
    try {
      const currentTime = new Date();
      const minimumElapsedTimeInHours = 24;
      const lastPopUpTime = await getDataStorage('@lastPopUpTime');
      const elapsedTime = calculateElapsedTime(currentTime, lastPopUpTime);
      if (modalStatus && !lastPopUpTime || modalStatus && elapsedTime >= minimumElapsedTimeInHours) {
        await setDataStorage('@lastPopUpTime', currentTime);
        setTimeout(() => {
          setShowModal(true);
        }, elapsedHours);
      }
    } catch (error) {
      console.error('Error storing/retrieving modal status:', error);
    }
  }

  useEffect(() => {
    openModal()
  }, [showModal]);

  const onAskMeLaterClicked = async () => {
    const today = new Date().toISOString();
    try {
      await setDataStorage('@lastPopUpTime', today);
      setShowModal(false);
    } catch (error) {
      console.error('Error storing modal status:', error);
    }
  }

  const handleCloseModal = async () => {
    try {
      setModalStatus(false);
      setShowModal(false);
    } catch (error) {
      console.error('Error storing modal status:', error);
    }
  };

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
          <Search list={data} setState={setState} keyword="title" setNothingData={setNothingData}/>
          <FeedList
            state={state}
            navigation={navigation}
            loading={loading}
            screen="Feed"
            nothingData={nothingData}
          />
        </View>
        <EvaluationModal
          isModalVisible={showModal}
          navigation={navigation}
          handleClose={handleCloseModal}
          onAskMeLaterClicked={onAskMeLaterClicked}
        />
      </View>
  );
};

FeedScreen.propTypes = {
  navigation: PropTypes.object,
};

export default FeedScreen;
