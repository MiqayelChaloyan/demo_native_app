import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { theme } from '../../assets/theme/theme';

const SkeletonMessagesList = () => {
  return (
    <SkeletonPlaceholder borderRadius={4} speed={1500} backgroundColor={theme.colors.darkGray}>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="flex-start"
        marginBottom={15}>
        <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
        <SkeletonPlaceholder.Item marginLeft={20} flexDirection="column">
          <SkeletonPlaceholder.Item width={130} height={20} borderRadius={8} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={220}
            height={50}
            borderRadius={8}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonMessagesList;
