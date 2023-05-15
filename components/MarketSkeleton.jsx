import React from "react";
import { Dimensions, FlatList } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const windowWidth = Dimensions.get("window").width;

const MarketSkeleton = () => {
  const data = Array.from({ length: 3 });

  const renderItem = ({ item }) => (
    <SkeletonPlaceholder flexDirection="row" speed={1500} backgroundColor={'#b2cdcf'} highlightColor={'#F2F8FC'}>
      <SkeletonPlaceholder.Item flexDirection="row">

        <SkeletonPlaceholder.Item flexDirection="column" marginRight={8}>
          <SkeletonPlaceholder.Item width={windowWidth * 0.29} height={windowWidth * 0.29} borderRadius={8} />
          <SkeletonPlaceholder.Item width={windowWidth * 0.29} height={20} marginVertical={8} borderRadius={4} />
          <SkeletonPlaceholder.Item width={windowWidth * 0.29} height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>

      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      horizontal
    />
  );
};

export default MarketSkeleton;



