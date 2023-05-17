import React, {useContext, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import Item from './Item';
import {DNAdataContext} from '../../Data/data';
import MarketSkeletonItem from '../../components/Skeleton/MarketSkeletonItem';
import styles from './style';

const ItemList = () => {
  const {marketData} = useContext(DNAdataContext);
  const [isLoading, setIsLoading] = useState(true);

  //todo:This part of the code is temporary and should be removed
  // after displaying the real date from the backend
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.itemsContainer}>
      <FlatList
        numColumns={3}
        data={marketData}
        key={item => item.id}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return isLoading ? <MarketSkeletonItem /> : <Item item={item} />;
        }}
      />
    </View>
  );
};
export default ItemList;
