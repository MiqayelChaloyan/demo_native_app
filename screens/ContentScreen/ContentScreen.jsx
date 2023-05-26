import {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, FlatList, Keyboard} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {GlobalDataContext} from '../../Data/context';
import ChangeSwiperItem from './ChangeSwiperItem';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import ContentItemList from './ContentItemList';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const ContentScreen = ({navigation, route}) => {
  const {feedData} = useContext(GlobalDataContext);
  const [state, setState] = useState(feedData);
  const [keyboardStatus, setKeyboardStatus] = useState(true);
  const {itemIndex} = route.params;

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
    <View style={styles.contentBox}>
      <View style={styles.contentContainer}>
        <Header
          screen={'Content'}
          navigation={navigation}
          back={'Feed'}
          continueTo={'Market'}
          left={'Back'}
          right={'Filter'}
        />
        <Search list={feedData} setState={setState} keyword="title" />
      </View>
      {keyboardStatus && (
        <View style={styles.swiperItemContainer}>
          <SwiperFlatList
            autoplay
            autoplayDelay={3}
            autoplayLoop
            index={itemIndex}
            showPagination
            paginationStyle={styles.paginationStyle}
            paginationStyleItemInactive={styles.dotStyle}
            paginationStyleItemActive={[
              styles.dotStyle,
              {backgroundColor: theme.colors.green},
            ]}
            data={feedData}
            renderItem={ChangeSwiperItem}
          />
        </View>
      )}
      <View style={styles.outletContainer}>
        {keyboardStatus && (
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Outlet</Text>
          </View>
        )}
        <View style={styles.itemListContainer}>
          <FlatList
            data={state}
            ListEmptyComponent={
              <View style={styles.warning}>
                <Text style={styles.warningText}>
                  Nothing was found in your search results.
                </Text>
              </View>
            }
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item, index}) => (
              <ContentItemList item={item} index={index} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

ContentScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default ContentScreen;
