import {useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import MarketItem from './MarketItem';
import MarketSkeletonItem from '../../components/Skeleton/MarketSkeletonItem';
import {memo} from 'react';
import useDelayedAction from '../../customHooks/useDelayedAction';

const MarketItemList = ({data, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  useDelayedAction(() => setIsLoading(false), 2500);

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
  navigation: PropTypes.object,
};

export default memo(MarketItemList);
