import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import MarketItem from './MarketItem';
import MarketSkeletonItem from '../../components/Skeleton/MarketSkeletonItem';
import styles from './style';

const MarketItemList = ({data, navigation}) => {
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
        horizontal={true}
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
  data: PropTypes.object,
};

export default MarketItemList;
