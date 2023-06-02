import React, {useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import AddIcon from '../../../assets/icons/AddProfileImage.svg';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';
import {GlobalDataContext} from '../../../Data/context';
import requestCameraPermission from '../../../utils/CameraPermissionUtils.android';
import {launchImageLibrary} from 'react-native-image-picker';
import SkeletonPosts from '../../../components/Skeleton/SkeletonPosts';
import SkeletonPhotos from '../../../components/Skeleton/SkeletonPhotos';
import Posts from '../page/Posts/Posts';
import Photos from '../page/Photos/Photos';
import Header from '../../../components/Header/Header';
import {theme} from '../../../assets/theme/theme';
import styles from './style';
import PermissionModal from '../../../components/Permission/Modal';

const Profile = ({navigation}) => {
  const [showHide, setShowHide] = useState(false);
  const {feedData, arrayImages, setArrayImage, imageUrl, setImageUrl} =
    useContext(GlobalDataContext);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAnswer, setAnswer] = useState(null);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const selectFile = () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options)
      .then(res => {
        const url = res.assets && res.assets[0].uri;
        setImageUrl(url);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const accessCamera = async () => await requestCameraPermission(selectFile);

  const renderSwitchValue = item => {
    if (showHide) {
      return loading ? <SkeletonPhotos /> : <Photos item={item} />;
    } else {
      return loading ? <SkeletonPosts /> : <Posts item={item} />;
    }
  };

  useEffect(() => {
    setModalVisible(false);
    if (isAnswer === 'PHONE') {
      accessCamera();
    } else if (isAnswer === 'STORAGE') {
      navigation.navigate('Images');
    }
    return () => setAnswer('');
  }, [isAnswer]);

  return (
    <View style={styles.container}>
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
          <View>
            {imageUrl ? (
              <View>
                <Image style={styles.userImage} source={{uri: imageUrl}} />
              </View>
            ) : (
              <View>
                <Image
                  style={styles.defaultProfileImage}
                  source={require('../../../assets/images/Profile.png')}
                />
              </View>
            )}
            <TouchableOpacity
              onPress={() => {
                if (arrayImages.length !== 0) {
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
      </View>
      <View style={styles.section}>
        <View>
          <Text style={styles.userFullName}>Victoria Robertson</Text>
          <Text style={styles.aboutUser}>A mantra goes here</Text>
        </View>
        <View style={styles.switchContainer}>
          <SwitchSelector
            initial={0}
            onPress={value => setShowHide(value)}
            textColor={theme.colors.cool_gray}
            selectedColor={theme.colors.primary_green}
            backgroundColor={theme.colors.light_gray}
            buttonColor={theme.colors.primary_white}
            borderColor={theme.colors.gray}
            borderWidth={moderateScale(1.5)}
            height={verticalScale(50)}
            borderRadius={moderateScale(100)}
            fontSize={moderateScale(16)}
            valuePadding={horizontalScale(2)}
            hasPadding
            options={[
              {label: 'Posts', value: false},
              {label: 'Photos', value: true},
            ]}
          />
        </View>
      </View>
      <FlatList
        data={feedData}
        keyExtractor={item => item.id}
        style={styles.contentsBlockContainer}
        renderItem={({item}) => renderSwitchValue(item)}
      />
      <PermissionModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        setAnswer={setAnswer}
      />
    </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
