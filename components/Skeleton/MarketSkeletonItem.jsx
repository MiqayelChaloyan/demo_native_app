import React from 'react';
import { Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { theme } from '../../assets/theme/theme';

const size = Dimensions.get('window').width * 0.29;

const MarketSkeletonItem = () => {
  return (
    <SkeletonPlaceholder flexDirection="row" speed={1500} backgroundColor={theme.colors.darkGray}>
      <SkeletonPlaceholder.Item flexDirection="row">
        <SkeletonPlaceholder.Item flexDirection="column" marginRight={8}>
          <SkeletonPlaceholder.Item
            width={size}
            height={size}
            borderRadius={8}
          />
          <SkeletonPlaceholder.Item
            width={size}
            height={20}
            marginVertical={8}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item width={size} height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default MarketSkeletonItem;
