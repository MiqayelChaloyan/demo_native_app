import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {TextInput, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {DNAdataContext} from '../../Data/data';
import RenderItem from './RenderItem';
import Header from '../../components/Header/Header';
import styles from './style';

const ContentScreen = ({navigation, route}) => {
  const {feedData} = useContext(DNAdataContext);
  const {itemIndex} = route.params;

  return (
    <View style={styles.contentBox}>
      <Header
        screen={'Content'}
        navigation={navigation}
        back={'Feed'}
        continueTo={'Market'}
      />

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          multiline={false}
        />
      </View>

      <View style={styles.swiperItem}>
        <SwiperFlatList
          autoplay
          autoplayDelay={3}
          autoplayLoop
          index={itemIndex}
          showPagination
          paginationStyle={styles.paginationStyle}
          paginationStyleItem={styles.dotStyle}
          paginationStyleItemActive={styles.activeDotStyle}
          data={feedData}
          renderItem={RenderItem}
        />
      </View>
    </View>
  );
};

ContentScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default ContentScreen;
