import {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Keyboard} from 'react-native';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import {GlobalDataContext} from '../../contexts/context';
import OutletList from './OutletList';
import styles from './style';
import SwiperList from './SwiperList';

const ContentScreen = ({navigation, route}) => {
  const {feeds} = useContext(GlobalDataContext);
  const [keyboardStatus, setKeyboardStatus] = useState(true);
  const {itemIndex} = route.params;
  const [state, setState] = useState(feeds);

  useEffect(() => {
    setState(feeds);
  }, [feeds]);

  useEffect(() => {
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
        <Search list={feeds} setState={setState} keyword="title" />
      </View>
      {keyboardStatus && <SwiperList itemIndex={itemIndex} feeds={feeds} />}
      <OutletList state={state} feeds={feeds} />
    </View>
  );
};

ContentScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default ContentScreen;
