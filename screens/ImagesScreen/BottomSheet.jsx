import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import DeleteIcon from '../../assets/icons/Delete.svg';
import ProfileIcon from '../../assets/icons/ProfileAdd.svg';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const MyBottomsheet = ({sheet}) => {
  return (
    <View style={styles.sheetContainer}>
      <View>
        <TouchableOpacity onPress={() => sheet('Add')} style={styles.command}>
          <View>
            <ProfileIcon width={20} height={20} fill={theme.colors.dark_gray} />
          </View>
          <Text style={[styles.modalText, {left: 7}]}>
            Use ad profile Image
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => sheet('Remove')}
          style={styles.command}>
          <View>
            <DeleteIcon width={30} height={30} fill={theme.colors.dark_gray} />
          </View>
          <Text style={styles.modalText}>Remove Image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

MyBottomsheet.propTypes = {
  sheet: PropTypes.any,
};

export default MyBottomsheet;
