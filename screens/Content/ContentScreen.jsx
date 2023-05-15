import { useContext } from "react";
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { DNAdataContext } from "../../Data/data";

const windowWidth = Dimensions.get("window").width;

const windowHeight = Dimensions.get("window").height;
const ContentScreen = ({ navigation, route }) => {
  const { feedData } = useContext(DNAdataContext);
  const { itemIndex } = route.params;

  const diffMonths = (item) => {
    const todaysDate = new Date();
    const createdDate = new Date(item.createdData);
    return (todaysDate.getFullYear() - createdDate.getFullYear()) * 12 +
      (todaysDate.getMonth() - createdDate.getMonth());
  };


  const renderItem = ({ item }) => {
  const monthsAgo = diffMonths(item);
  return (
    <View style={{ width: windowWidth, height: windowHeight * 0.42 }}>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={{ uri: item.imageUri }}
      />
      <Text style={styles.titleStyle}>{item.title}</Text>
      <View style={{ width: windowWidth * 0.9, height: 34 }}>

        <Text style={styles.postMessage} numberOfLines={2} ellipsizeMode="tail">{item.message}</Text>

        <Text style={styles.dateStyle}>{monthsAgo}m ago</Text>

      </View>

    </View>
  )

  };


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

        <View style={{ width: windowWidth * 0.9, marginTop: 16 }}>

          <SwiperFlatList
            autoplay={true}
            autoplayDelay={3}
            autoplayLoop
            index={itemIndex}
            showPagination
            paginationStyle={{ paddingLeft: windowWidth * 0.78, marginBottom: -16 }}
            paginationStyleItem={styles.dotStyle}
            paginationStyleItemActive={styles.activeDotStyle}
            data={feedData}
            renderItem={renderItem}
          />


        </View>

      </View>
    </View>
  );
};

export default ContentScreen;
