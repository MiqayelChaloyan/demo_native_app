import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
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
  return (
    <View style={styles.headerContainer}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate(back)}>
          <Text
            style={[
              styles.headerButtonText,
              {color: headerTextColor || '#5DB075'},
            ]}>
            {left}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[styles.headerText, {color: headerTextColor || 'black'}]}>
          {screen}
        </Text>
      </View>
      <View>
        {right && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(!root ? continueTo : root, {
                screen: continueTo,
              })
            }>
            <Text
              style={[
                styles.headerButtonText,
                {color: headerTextColor || '#5DB075'},
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
