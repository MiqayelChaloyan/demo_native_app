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
import {useCallback} from 'react';

const FeedList = ({navigation, isLoading, showPostsOrPhotos}) => {
  const route = useRoute();
  const [feedData, setFeedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [emptyDataMessage, setEmptyDataMessage] = useState('');
  const {data, error} = useDataFromAPI('feeds');

  useDataForUpdate(data, setFeedData, error);

  const dataOfList = route.name === 'Feed' ? filteredData : feedData;

  const renderItem = useCallback(
    ({item, index}) =>
      renderSwitchValue(
        item,
        index,
        navigation,
        isLoading,
        showPostsOrPhotos,
        route,
      ),
    [isLoading, navigation, route, showPostsOrPhotos],
  );

  return (
    <>
      {route.name === 'Feed' && (
        <Search
          list={feedData}
          setState={setFilteredData}
          keyword="title"
          setEmptyDataMessage={setEmptyDataMessage}
        />
      )}
      <View style={styles.contentsBlockContainer}>
        <FlatList
          data={dataOfList}
          ListEmptyComponent={<Warning emptyDataMessage={emptyDataMessage} />}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

FeedList.propTypes = {
  navigation: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  showPostsOrPhotos: PropTypes.bool,
};

export default memo(FeedList);
