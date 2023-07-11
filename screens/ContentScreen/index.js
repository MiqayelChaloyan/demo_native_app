import {useState, memo, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import OutletList from './OutletList';
import SwiperList from './SwiperList';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';
import useDataForUpdate from '../../customHooks/useDataForUpdate';
import {GlobalDataContext} from '../../contexts/context';
import styles from './style';

// TODO: In the future, it is planned to transform the SwiperList
// data, and show only 3 elements - previous , current and next .

const getFilteredData = (data, index) => {
  if (!data || data.length === 0) {
    return null;
  }

  const length = data.length;
  const previousIndex = (index - 1 + length) % length;
  const nextIndex = (index + 1) % length;
  return [data[previousIndex], data[index], data[nextIndex]];
};

const ContentScreen = ({navigation, route}) => {
  const {itemIndex} = route.params;
  const [filteredData, setFilteredData] = useState([]);
  const [feedData, setFeedData] = useState([]);
  const [emptyDataMessage, setEmptyDataMessage] = useState('');

  const {data, error} = useDataFromAPI('feeds');
  useDataForUpdate(data, setFeedData, error);
  const {feeds} = useContext(GlobalDataContext);
  const result = getFilteredData(feeds, itemIndex);

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
          list={feedData}
          setState={setFilteredData}
          keyword="title"
          setEmptyDataMessage={setEmptyDataMessage}
        />
      </View>
      <SwiperList itemIndex={itemIndex} data={result} />
      <OutletList data={filteredData} emptyDataMessage={emptyDataMessage} />
    </View>
  );
};

ContentScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default memo(ContentScreen);
