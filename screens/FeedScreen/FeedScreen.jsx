import {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text, View} from 'react-native';
import FeedItem from './FeedItem';
import {GlobalDataContext} from '../../Data/context';
import SkeletonPosts from '../../components/Skeleton/SkeletonPosts';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import CustomModal from '../../components/Modal/Modal';
import styles from './style';

const FeedScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const {feedData} = useContext(GlobalDataContext);
  const [state, setState] = useState(feedData);

  // TODO: This part is for a test and will be changed lately.
  const [isModalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setModalVisible(true), 250);
    return () => clearTimeout(timer);
  }, []);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View style={styles.feedScreen}>
        <View style={styles.feedScreenContainer}>
          <Header
            screen={'Feed'}
            navigation={navigation}
            back={'Auth'}
            continueTo={'Market'}
            left={'Back'}
            right={'Filter'}
          />
          <Search list={feedData} setState={setState} keyword={'title'} />
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
      {/* TODO: This part is for a test and will be changed lately.*/}
      <CustomModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    </>
  );
};

FeedScreen.propTypes = {
  navigation: PropTypes.object,
};

export default FeedScreen;
