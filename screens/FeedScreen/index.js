import {useEffect, useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text, View} from 'react-native';
import FeedItem from './FeedItem';
import SkeletonPosts from '../../components/Skeleton/SkeletonPosts';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import {GlobalDataContext} from '../../contexts/context';
// import CustomModal from '../../components/Modal/Modal';
import {getDataFeedsFromFile} from '../../utils/ApiUtils';
// import { setDataStorage } from '../../utils/AsyncStorageApiUtils';
import styles from './style';

const FeedScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const {setFeeds} = useContext(GlobalDataContext);
  const [data, setData] = useState([]);
  const [state, setState] = useState(data);

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
  // const [isModalVisible, setModalVisible] = useState(false);
  // useEffect(() => {
  //   const timer = setTimeout(() => setModalVisible(true), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

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
          <View style={styles.contentsBlockContainer}>
            <FlatList
              data={state}
              ListEmptyComponent={
                <View style={styles.warning}>
                  <Text style={styles.warningText}>
                    Nothing was found in your search results.
                  </Text>
                </View>
              }
              key={item => item.id}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return loading ? (
                  <View style={styles.skeleton}>
                    <SkeletonPosts />
                  </View>
                ) : (
                  <FeedItem
                    item={item}
                    itemIndex={index}
                    navigation={navigation}
                  />
                );
              }}
            />
          </View>
        </View>
      </View>
    )
  );
};

FeedScreen.propTypes = {
  navigation: PropTypes.object,
};

export default FeedScreen;