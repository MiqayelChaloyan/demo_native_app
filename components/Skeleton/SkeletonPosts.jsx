import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const SkeletonPosts = () => {
  return (
    <SkeletonPlaceholder
      borderRadius={moderateScale(4)}
      speed={1500}
      backgroundColor={theme.colors.light_gray}>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="flex-start"
        marginBottom={verticalScale(15)}>
        <SkeletonPlaceholder.Item
          width={horizontalScale(60)}
          height={verticalScale(60)}
          borderRadius={moderateScale(8)}
        />
        <SkeletonPlaceholder.Item
          marginLeft={horizontalScale(20)}
          flexDirection="column">
          <SkeletonPlaceholder.Item
            width={horizontalScale(70)}
            height={verticalScale(20)}
            borderRadius={moderateScale(8)}
          />
          <SkeletonPlaceholder.Item
            marginTop={verticalScale(10)}
            width={horizontalScale(220)}
            height={verticalScale(40)}
            borderRadius={moderateScale(8)}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width={horizontalScale(40)}
          height={verticalScale(20)}
          borderRadius={moderateScale(8)}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonPosts;
