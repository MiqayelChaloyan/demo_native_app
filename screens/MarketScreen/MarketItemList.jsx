import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import MarketItem from './MarketItem';
import MarketSkeletonItem from '../../components/Skeleton/MarketSkeletonItem';

const MarketItemList = ({data, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        key={item => item.id}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return isLoading ? (
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
};

export default MarketItemList;
