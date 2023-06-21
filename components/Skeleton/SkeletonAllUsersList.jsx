import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const SkeletonAllUsersList = () => {
  return (
    <SkeletonPlaceholder
      borderRadius={moderateScale(4)}
      speed={1500}
      backgroundColor={theme.colors.light_gray}>
       <SkeletonPlaceholder.Item
          width={horizontalScale(150)}
          height={verticalScale(230)}
          borderRadius={moderateScale(20)}
        />
    </SkeletonPlaceholder>
  );
};

export default SkeletonAllUsersList;
