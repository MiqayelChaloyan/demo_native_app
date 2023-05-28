import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { theme } from '../../assets/theme/theme';

const SkeletonPhotos = () => {
  return (
    <SkeletonPlaceholder borderRadius={4} speed={1500} backgroundColor={theme.colors.light_gray}>
      <SkeletonPlaceholder.Item alignItems="flex-start" marginBottom={15}>
        <SkeletonPlaceholder.Item width={335} height={340} borderRadius={8} />
        <SkeletonPlaceholder.Item
          width={100}
          height={18}
          borderRadius={1}
          marginTop={8}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonPhotos;
