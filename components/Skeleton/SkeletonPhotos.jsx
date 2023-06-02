import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const SkeletonPhotos = () => {
  return (
    <SkeletonPlaceholder
      borderRadius={moderateScale(4)}
      speed={1500}
      backgroundColor={theme.colors.light_gray}>
      <SkeletonPlaceholder.Item
        alignItems="flex-start"
        marginBottom={verticalScale(15)}>
        <SkeletonPlaceholder.Item
          width={horizontalScale(335)}
          height={verticalScale(240)}
          borderRadius={moderateScale(8)}
        />
        <SkeletonPlaceholder.Item
          width={horizontalScale(100)}
          height={verticalScale(18)}
          borderRadius={moderateScale(1)}
          marginTop={verticalScale(8)}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonPhotos;
