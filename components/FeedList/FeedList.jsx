import {memo, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import styles from './style';
import Search from '../Search/Search';
import Warning from '../Warning/Warning';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';
import useDataForUpdate from '../../customHooks/useDataForUpdate';
import renderSwitchValue from './renderSwitchValue';

const FeedList = ({navigation, loading, showPostsOrPhotos}) => {
  const route = useRoute();
  const [feedData, setFeedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const {data, error} = useDataFromAPI('feeds');

  useDataForUpdate(data, setFeedData, error);

  const dataOfList = route.name === 'Feed' ? filteredData : feedData;
  return (
    <>
      {route.name === 'Feed' && (
        <Search list={feedData} setState={setFilteredData} keyword="title" />
      )}
      <View style={styles.contentsBlockContainer}>
        <FlatList
          data={dataOfList}
          ListEmptyComponent={<Warning />}
          keyExtractor={item => item.id}
          renderItem={({item, index}) =>
            renderSwitchValue(
              item,
              index,
              navigation,
              loading,
              showPostsOrPhotos,
              route,
            )
          }
        />
      </View>
    </>
  );
};

FeedList.propTypes = {
  navigation: PropTypes.object,
  loading: PropTypes.bool,
  showPostsOrPhotos: PropTypes.bool,
};

export default memo(FeedList);
