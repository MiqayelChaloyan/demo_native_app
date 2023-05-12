import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ContentScreen = ({navigation, route}) => {
  const {item, diffMonths} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.headerContainer}>
          <View style={styles.headerButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
              <Text style={styles.headerButtonText}>Back</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headerTextContainer}>
            <Text style={[styles.headerText, {fontSize: 30}]}>Content</Text>
          </View>

          <View style={styles.headerButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Market')}>
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

        <View style={styles.contentsBlockContainer}>
          <Image
            source={{uri: item.imageUri}}
            style={{
              width: windowWidth * 0.9,
              height: windowHeight * 0.31,
              borderRadius: 8,
            }}
          />
        </View>

        <View style={styles.contentInfo}>
          <Text style={styles.headerText}>{item.title}</Text>
          <View style={styles.feedTextContainer}>
            <Text style={styles.feedText}>{item.message}</Text>
          </View>

          <Text style={styles.aboutContentDate}>{diffMonths}m ago</Text>
        </View>
      </View>
    </View>
  );
};

export default ContentScreen;
