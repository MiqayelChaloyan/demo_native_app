import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {useState} from 'react';
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
  const handleLogout = () => setModalVisible(true);

  return (
    <>
      <View style={styles.headerContainer}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate(back)}>
            <Text
              style={[
                styles.headerButtonText,
                { color: headerTextColor || theme.colors.primary_green },
              ]}>
              {left}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={[
              styles.headerText,
              { color: headerTextColor || theme.colors.black },
            ]}>
            {screen}
          </Text>
        </View>
        <View>
          {right && (
            <TouchableOpacity
              onPress={() => {
                if (right === 'Logout') {
                  handleLogout();
                } else {
                  navigation.navigate(!root ? continueTo : root, {
                    screen: continueTo,
                  });
                }
              }}>
              <Text
                style={[
                  styles.headerButtonText,
                  {
                    color: headerTextColor || theme.colors.primary_green,
                  },
                ]}>
                {right}
              </Text>
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

export default Header;
