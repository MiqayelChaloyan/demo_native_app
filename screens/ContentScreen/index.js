import {useState, memo, useContext} from 'react';
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

const ContentScreen = ({navigation, route}) => {
  const {itemIndex} = route.params;
  const [filteredData, setFilteredData] = useState([]);
  const [feedData, setFeedData] = useState([]);

  const {data, error} = useDataFromAPI('feeds');
  useDataForUpdate(data, setFeedData, error);
  const {feeds} = useContext(GlobalDataContext);

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
        <Search list={feedData} setState={setFilteredData} keyword="title" />
      </View>
      <SwiperList itemIndex={itemIndex} data={feeds} />
      <OutletList data={filteredData} />
    </View>
  );
};

ContentScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default memo(ContentScreen);
