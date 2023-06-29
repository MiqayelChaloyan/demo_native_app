import PropTypes from 'prop-types';
import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {horizontalScale, verticalScale} from '../../../assets/metrics/Metrics';
import Header from '../../../components/Header/Header';
import {theme} from '../../../assets/theme/theme';
import AddIcon from '../../../assets/icons/Add.svg';
import styles from './style';

const HeaderBar = ({
  navigation,
  imageUrl,
  userData,
  arrayImages,
  setModalVisible,
  accessCamera,
}) => {
  return (
    <>
      <View style={styles.header}>
        <Header
          screen="Profile"
          navigation={navigation}
          back="SettingsNav"
          continueTo="LogIn"
          root="Auth"
          left="Settings"
          right="Logout"
          headerTextColor={theme.colors.primary_white}
        />
        <View style={styles.profileImage}>
          {imageUrl ? (
            <Image style={styles.userImage} source={{uri: imageUrl}} />
          ) : (
            <Image
              style={styles.defaultProfileImage}
              source={require('../../../assets/images/Profile.png')}
            />
          )}
          <TouchableOpacity
            onPress={() => {
              if (arrayImages.length >= 1) {
                setModalVisible(true);
              } else {
                accessCamera();
              }
            }}>
            <View style={styles.addProfileImage}>
              <AddIcon
                width={horizontalScale(40)}
                height={verticalScale(40)}
                fill={theme.colors.primary_green}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userFullName}>{userData.name}</Text>
        <Text style={styles.aboutUser}>A mantra goes here</Text>
      </View>
    </>
  );
};

HeaderBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  imageUrl: PropTypes.string,
  userData: PropTypes.object.isRequired,
  arrayImages: PropTypes.array.isRequired,
  setModalVisible: PropTypes.func,
  accessCamera: PropTypes.func,
};

export default React.memo(HeaderBar);
