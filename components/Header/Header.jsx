import {View, Text, TouchableOpacity, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {theme} from '../../assets/theme/theme';
import {removeItem} from '../../utils/AsyncStorageApiUtils';
import {useContext} from 'react';
import {GlobalDataContext} from '../../contexts/context';
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
  const {setLoggedIn} = useContext(GlobalDataContext);

  const handleLogout = async key => {
    await removeItem(key);
    setLoggedIn(false);
    Alert.alert('Logout successful');
  };

  return (
    <View style={styles.headerContainer}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate(back)}>
          <Text
            style={[
              styles.headerButtonText,
              {color: headerTextColor || theme.colors.primary_green},
            ]}>
            {left}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={[
            styles.headerText,
            {color: headerTextColor || theme.colors.black},
          ]}>
          {screen}
        </Text>
      </View>
      <View>
        {right && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(!root ? continueTo : root, {
                screen: continueTo,
              });

              if (right === 'Logout') {
                handleLogout('loggedIn');
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
