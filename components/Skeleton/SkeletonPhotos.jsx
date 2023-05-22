import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonPhotos = () => {
  return (
    <SkeletonPlaceholder borderRadius={4} speed={1500}>
      <SkeletonPlaceholder.Item alignItems="flex-start" marginBottom={15}>
        <SkeletonPlaceholder.Item width={355} height={220} borderRadius={8} />
        <SkeletonPlaceholder.Item width={100} height={18} borderRadius={1} marginTop={8}/>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonPhotos;
