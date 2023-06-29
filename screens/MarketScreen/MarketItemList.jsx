import React, {useEffect, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import MarketItem from './MarketItem';
import MarketSkeletonItem from '../../components/Skeleton/MarketSkeletonItem';

const MarketItemList = ({data, navigation}) => {
  const [isLoaded, setIsLoaded] = useState(true);

  const loadedData = () => {
    const timer = setTimeout(() => setIsLoaded(false), 2500);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    loadedData()
  }, []);

  const rednerMarketItem = (item) =>
    isLoaded ? renderSkeletonMessagesList() : renderMarketItem(item);

  const renderMarketItem = useCallback((item) => {
    return <MarketItem item={item} navigation={navigation} />;
  }, []);

  const renderSkeletonMessagesList = useCallback(() => {
    return <MarketSkeletonItem />;
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        key={item => item.id}
        keyExtractor={item => item.id}
        renderItem={({ item }) => rednerMarketItem(item)}
      />
    </View>
  );
};

MarketItemList.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default React.memo(MarketItemList);
