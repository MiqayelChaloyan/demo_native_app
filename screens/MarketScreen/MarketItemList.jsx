import {useState, memo} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import MarketItem from './MarketItem';
import MarketSkeletonItem from '../../components/Skeleton/MarketSkeletonItem';
import useDelayedAction from '../../customHooks/useDelayedAction';

const MarketItemList = ({data, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  useDelayedAction(() => setIsLoading(false), 2500);

  const renderMarketItem = ({item}) => {
    return isLoading ? (
      <MarketSkeletonItem />
    ) : (
      <MarketItem item={item} navigation={navigation} />
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderMarketItem}
      />
    </View>
  );
};

MarketItemList.propTypes = {
  data: PropTypes.array,
  navigation: PropTypes.object,
};

export default memo(MarketItemList);
