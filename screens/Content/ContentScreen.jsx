import React, { useContext } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import Swiper from "react-native-swiper";
import { DNAdataContext } from "../../Data/data";

const ContentScreen = ({ navigation, item, diffMonths }) => {

  const { feedData } = useContext(DNAdataContext);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.headerContainer}>
          <View style={styles.headerButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
              <Text style={styles.headerButtonText}>Back</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.headerText}>Content</Text>
          </View>

          <View style={styles.headerButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Market")}>
              <Text style={styles.headerButtonText}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            multiline={false}
          />
        </View>

        <View >
          <Swiper
              onMomentumScrollEnd={(e, state, context) =>
              console.log("index:", state.index)
            }
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            paginationStyle={styles.paginationStyle}
            loop
          >
            <View
              title={
                <>
                  <Text style={styles.titleStyle}>
                    {feedData[0].title}
                  </Text>
                  <Text style={styles.postMessage}>
                    {feedData[0].message}
                  </Text>
                  <Text style={styles.dateStyle}>
                    1m ago
                  </Text>
                </>
              }>
              <Image
                resizeMode="stretch"
                style={styles.image}
                source={require("./1.jpg")}
              />
            </View>

            <View
              title={
                <>
                  <Text style={styles.titleStyle}>
                    {feedData[1].title}
                  </Text>
                  <Text style={styles.postMessage}>
                    {feedData[1].message}
                  </Text>
                  <Text style={styles.dateStyle}>
                    1m ago
                  </Text>
                </>
              }>
              <Image
                resizeMode="stretch"
                style={styles.image}
                source={require("./2.jpg")}
              />
            </View>

            <View
              title={
                <>
                  <Text style={styles.titleStyle}>
                    {feedData[2].title}
                  </Text>
                  <Text style={styles.postMessage}>
                    {feedData[2].message}
                  </Text>
                  <Text style={styles.dateStyle}>
                    1m ago
                  </Text>
                </>
              }>
              <Image
                resizeMode="stretch"
                style={styles.image}
                source={require("./3.jpg")}
              />
            </View>

            <View
              title={
                <>
                  <Text style={styles.titleStyle}>
                    {feedData[3].title}
                  </Text>
                  <Text style={styles.postMessage}>
                    {feedData[3].message}
                  </Text>
                  <Text style={styles.dateStyle}>
                    1m ago
                  </Text>
                </>
              }>
              <Image
                resizeMode="stretch"
                style={styles.image}
                source={require("./4.jpg")}
              />
            </View>

          </Swiper>
        </View>

      </View>
    </View>
  );
};

export default ContentScreen;
