import PropTypes from 'prop-types';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {horizontalScale, verticalScale} from '../../../assets/metrics/Metrics';
import Header from '../../../components/Header/Header';
import {theme} from '../../../assets/theme/theme';
import AddIcon from '../../../assets/icons/Add.svg';
import styles from './style';
import {useCallback} from 'react';

const HeaderBar = ({
  navigation,
  imageUrl,
  userData,
  arrayImages,
  setModalVisible,
  accessCamera,
}) => {
  const handlePressImageOrAccessCamera = useCallback(() => {
    if (arrayImages.length !== 0) {
      setModalVisible(true);
    } else {
      accessCamera();
    }
  }, [arrayImages]);
  return (
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
        <TouchableOpacity onPress={handlePressImageOrAccessCamera}>
          <View style={styles.addProfileImage}>
            <AddIcon
              width={horizontalScale(40)}
              height={verticalScale(40)}
              fill={theme.colors.primary_green}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userFullName}>{userData.name}</Text>
        <Text style={styles.aboutUser}>A mantra goes here</Text>
      </View>
    </View>
  );
};

HeaderBar.propTypes = {
  navigation: PropTypes.object,
  imageUrl: PropTypes.string,
  userData: PropTypes.object,
  arrayImages: PropTypes.array,
  setModalVisible: PropTypes.func,
  accessCamera: PropTypes.func,
};

export default HeaderBar;
