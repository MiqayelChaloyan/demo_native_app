import React, {useCallback, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Keyboard} from 'react-native';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import {GlobalDataContext} from '../../contexts/context';
import OutletList from './OutletList';
import SwiperList from './SwiperList';
import styles from './style';

const getFilteredData = (data, index) => {
  if (!data || data.length === 0) {
    return null;
  }

  const length = data.length;
  const previousIndex = (index - 1 + length) % length;
  const nextIndex = (index + 1) % length;
  return [data[previousIndex], data[index], data[nextIndex]];
}

const ContentScreen = ({navigation, route}) => {
  const {feeds} = useContext(GlobalDataContext);
  const [keyboardStatus, setKeyboardStatus] = useState(true);
  const {itemIndex} = route.params;
  const [outletData, setOutletData] = useState([]);
  const [emptyDataMessage, setEmptyDataMessage] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    const result = feeds.map(item => {
      return {
       id: item.id,
       title: item.title,
      }
    })
    setOutletData(result);
  }, []);

  const unsubscribeFromKeyboardEvents = useCallback(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(false);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(true);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    const result = getFilteredData(feeds, itemIndex);
    setFilteredArray(result);
    unsubscribeFromKeyboardEvents();
  }, []);

  return (
    <View style={styles.contentContainer}>
      <View style={styles.contentBox}>
        <Header
          screen="Content"
          navigation={navigation}
          back="Feed"
          continueTo="Market"
          left="Back"
          right="Filter"
        />
        <Search
          list={feeds}
          researchResult={setOutletData}
          keyword="title"
          setEmptyDataMessage={setEmptyDataMessage}
        />
      </View>
      {
        keyboardStatus &&
        <SwiperList
          itemIndex={itemIndex}
          feeds={filteredArray.length ? filteredArray : feeds}
        />
      }
      <OutletList data={outletData} emptyDataMessage={emptyDataMessage} />
    </View>
  );
};

ContentScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default React.memo(ContentScreen);
