import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import MarketItem from './MarketItem';
import MarketSkeletonItem from '../../components/Skeleton/MarketSkeletonItem';

const MarketItemList = ({ data, navigation }) => {
  const [isLoaded, setIsLoaded] = useState(true);

  const loadedData = () => {
    const timer = setTimeout(() => setIsLoaded(false), 2500);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    loadedData()
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        key={item => item.id}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return isLoaded ? (
            <MarketSkeletonItem />
          ) : (
            <MarketItem item={item} navigation={navigation} />
          );
        }}
      />
    </View>
  );
};

MarketItemList.propTypes = {
  data: PropTypes.array,
  navigation: PropTypes.object.isRequired,
};

export default MarketItemList;
