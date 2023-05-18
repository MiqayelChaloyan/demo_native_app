import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import BuyIcon from "../../assets/icons/Buy.svg";
import { useNavigation } from "@react-navigation/native";

const ContentItemList = ({ item, index }) => {
  const navigation = useNavigation();
  let backgroundColorStyle = index % 2 === 1 ? "#C6C5C5" : "#9B9A9A";
  return (
    <View style={styles.contentItemOfList}>
      <View style={styles.leftSide}>
        <View style={[styles.circle, { backgroundColor: backgroundColorStyle }]} />

        <View style={styles.titleContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>

      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate({
            name: "Feed",
            params: { index },
            merge: true,
          });
        }}>
        <View>
          <BuyIcon width={45} height={45} fill="#5DB075" />
        </View>
      </TouchableOpacity>

    </View>

  );
};

ContentItemList.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default ContentItemList;
