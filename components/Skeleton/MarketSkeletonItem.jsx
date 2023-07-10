import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {
  horizontalScale,
  marketIconSize,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';
import {memo} from 'react';

const MarketSkeletonItem = () => {
  return (
    <SkeletonPlaceholder
      flexDirection="row"
      speed={1500}
      backgroundColor={theme.colors.light_gray}>
      <SkeletonPlaceholder.Item flexDirection="row">
        <SkeletonPlaceholder.Item
          flexDirection="column"
          marginRight={horizontalScale(8)}>
          <SkeletonPlaceholder.Item
            width={marketIconSize}
            height={marketIconSize}
            borderRadius={moderateScale(8)}
          />
          <SkeletonPlaceholder.Item
            width={marketIconSize}
            height={verticalScale(20)}
            marginVertical={verticalScale(8)}
            borderRadius={moderateScale(4)}
          />
          <SkeletonPlaceholder.Item
            width={marketIconSize}
            height={verticalScale(20)}
            borderRadius={moderateScale(4)}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default memo(MarketSkeletonItem);
