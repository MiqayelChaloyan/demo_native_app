import { useContext } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { DNAdataContext } from "../../Data/data";
import { renderItem } from "./renderItem";

const ContentScreen = ({ navigation, route }) => {
  const { feedData } = useContext(DNAdataContext);
  const { itemIndex } = route.params;


  return (
    <View style={styles.contentContainer}>
      <View style={styles.contentBox}>
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

        <View style={styles.swiperItem}>

          <SwiperFlatList
            autoplay={true}
            autoplayDelay={3}
            autoplayLoop
            index={itemIndex}
            showPagination
            paginationStyle={styles.paginationStyle}
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
