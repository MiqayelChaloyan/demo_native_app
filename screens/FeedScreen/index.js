import {memo, useEffect, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import FeedList from '../../components/FeedList/FeedList';
import Header from '../../components/Header/Header';
import EvaluationModal from '../../components/Modal/Modal';
import {getDataStorage, setDataStorage} from '../../utils/AsyncStorageApiUtils';
import styles from './style';

const calculateElapsedTime = (currentTime, lastTime) => {
  if (!lastTime) {
    return Number.MAX_SAFE_INTEGER;
  }

  const lastPopUpTime = new Date(lastTime);
  const elapsedMilliseconds = currentTime - lastPopUpTime;
  const elapsedHours = elapsedMilliseconds / (1000 * 60 * 60);
  return elapsedHours;
};

const FeedScreen = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState(true);

  const openModal = async () => {
    try {
      const currentTime = new Date();
      const minimumElapsedTimeInHours = 24;
      const lastPopUpTime = await getDataStorage('@lastPopUpTime');
      const elapsedTime = calculateElapsedTime(currentTime, lastPopUpTime);
      if (elapsedTime >= minimumElapsedTimeInHours && modalStatus) {
        await setDataStorage('@lastPopUpTime', currentTime);
        setTimeout(() => {
          setShowModal(true);
        }, elapsedTime);
      }
    } catch (error) {
      console.error('Error storing/retrieving modal status:', error);
    }
  };

  useEffect(() => {
    openModal();
  }, [showModal]);

  const onAskMeLaterClicked = useCallback(async () => {
    const today = new Date().toISOString();
    try {
      await setDataStorage('@lastPopUpTime', today);
      setShowModal(false);
    } catch (error) {
      console.error('Error storing modal status:', error);
    }
  }, []);

  const handleCloseModal = useCallback(async () => {
    try {
      setModalStatus(false);
      setShowModal(false);
    } catch (error) {
      console.error('Error storing modal status:', error);
    }
  }, []);

  return (
    <View style={styles.feedScreenContainer}>
      <View style={styles.feedScreen}>
        <Header
          screen="Feed"
          navigation={navigation}
          back="Feed"
          continueTo="Market"
          left="Back"
          right="Filter"
        />
        <FeedList navigation={navigation} />
      </View>
      {showModal && (
        <>
          <EvaluationModal
            isModalVisible={showModal}
            navigation={navigation}
            handleClose={handleCloseModal}
            onAskMeLaterClicked={onAskMeLaterClicked}
          />
          <FeedList navigation={navigation} />
        </>
      )}
    </View>
  );
};

FeedScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(FeedScreen);
