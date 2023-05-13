import React from "react";
import { Dimensions, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";

const windowWidth = Dimensions.get("window").width;

const FeedItem = ({ item, navigation }) => {
  const todaysDate = new Date();

  const createdDate = item.createdData;

  const diffMonths =
    (todaysDate.getFullYear() - createdDate.getFullYear()) * 12 +
    (todaysDate.getMonth() - createdDate.getMonth());

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate({
            name: "Content",
            params: { item, diffMonths },
            merge: true,
          })
        }>
        <View style={styles.contentContainer}>
          <View style={styles.contentBlock}>
            <Image
              source={{ uri: item.imageUri }}
              style={{
                width: windowWidth * 0.133,
                height: windowWidth * 0.133,
                borderRadius: 8,
              }}
            />
          </View>

          <View style={styles.contentInfo}>
            <View style={styles.headerContent}>
              <Text style={styles.headerFeedText}>{item.title}</Text>
              <Text style={styles.aboutContentDate}>{diffMonths}m ago</Text>
            </View>
            <View style={styles.feedTextContainer}>
              <Text style={styles.feedText} numberOfLines={2} ellipsizeMode="tail">
                {item.message}
              </Text>
            </View>
            <View style={styles.bottomBorder} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FeedItem;
