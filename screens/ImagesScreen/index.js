import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header/Header';
import ImageList from './ImageList';
import styles from './style';

const ImagesScreen = ({ navigation }) => {
  return (
    <View style={styles.images}>
      <View style={styles.container}>
        <Header
          screen="Images"
          navigation={navigation}
          back="Profile"
          continueTo="Profile"
          left="Back"
          right="Next"
        />
        <ImageList navigation={navigation}/>
      </View>
    </View>
  );
};

ImagesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(ImagesScreen);
