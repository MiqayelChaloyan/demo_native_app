import {useContext} from 'react';
import PropTypes from 'prop-types';
import {TextInput, View, Text, FlatList} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import { theme } from "../../assets/theme/theme";
import {DNAdataContext} from '../../Data/data';
import ChangeSwiperItem from './ChangeSwiperItem';
import Header from '../../components/Header/Header';
import styles from './style';
import ContentItemList from './ContentItemList';

const ContentScreen = ({navigation, route}) => {
  const {feedData} = useContext(DNAdataContext);
  const {itemIndex} = route.params;

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
          paginationStyleItemActive={[styles.dotStyle,{backgroundColor:theme.colors.green}]}
          data={feedData}
          renderItem={ChangeSwiperItem}
        />
      </View>

      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Outlet</Text>
      </View>

      <View style={styles.itemListContainer}>
        <FlatList
          data={feedData}
          keyExtractor={(item, index) => index.toString()}
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
