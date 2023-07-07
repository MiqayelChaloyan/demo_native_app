import {useCallback, useState, memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {theme} from '../../assets/theme/theme';
import PermissionModal from '../Permission/Modal';
import LogoutModal from '../Permission/children/logout';
import styles from './style';

const Header = ({
  screen,
  navigation,
  back,
  continueTo,
  root,
  left,
  right,
  headerTextColor,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleLogout = useCallback(() => {
    setModalVisible(true);
  }, []);
  const handleGoBack = useCallback(() => {
    navigation.navigate(back);
  }, []);
  const handleNavigationOrLogout = useCallback(() => {
    if (right === 'Logout') {
      handleLogout();
    } else {
      navigation.navigate(!root ? continueTo : root, {
        screen: continueTo,
      });
    }
  }, []);
  const getHeaderButtonStyle = useCallback(() => {
    const defaultColor = theme.colors.primary_green;

    return [styles.headerButtonText, {color: headerTextColor || defaultColor}];
  }, [headerTextColor]);

  const getHeaderTextStyle = useCallback(() => {
    const defaultColor = theme.colors.black;

    return [styles.headerText, {color: headerTextColor || defaultColor}];
  }, [headerTextColor]);
  const buttonStyle = getHeaderButtonStyle();
  const textStyle = getHeaderTextStyle();
  return (
    <>
      <View style={styles.headerContainer}>
        <View>
          <TouchableOpacity onPress={handleGoBack}>
            <Text style={buttonStyle}>{left}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={textStyle}>{screen}</Text>
        </View>
        <View>
          {right && (
            <TouchableOpacity onPress={handleNavigationOrLogout}>
              <Text style={buttonStyle}>{right}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <PermissionModal isModalVisible={isModalVisible}>
        <LogoutModal
          navigation={navigation}
          setModalVisible={setModalVisible}
        />
      </PermissionModal>
    </>
  );
};

Header.propTypes = {
  screen: PropTypes.string,
  navigation: PropTypes.object,
  back: PropTypes.string,
  continueTo: PropTypes.string,
  root: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  headerTextColor: PropTypes.string,
};

export default memo(Header);
