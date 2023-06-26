import PropTypes from 'prop-types';
import {View} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {moderateScale, verticalScale} from '../../../assets/metrics/Metrics';
import FeedList from '../../../components/FeedList/FeedList';
import {theme} from '../../../assets/theme/theme';
import styles from './style';

const ToggleSwitch = ({
  loading,
  showPostsOrPhotos,
  setShowPostsOrPhotos,
  navigation,
}) => {
  return (
    <View style={styles.section}>
      <View style={styles.switchContainer}>
        <SwitchSelector
          initial={0}
          onPress={value => setShowPostsOrPhotos(value)}
          textColor={theme.colors.cool_gray}
          selectedColor={theme.colors.primary_green}
          backgroundColor={theme.colors.light_gray}
          buttonColor={theme.colors.primary_white}
          borderColor={theme.colors.gray}
          borderWidth={moderateScale(1.5)}
          height={verticalScale(50)}
          borderRadius={moderateScale(100)}
          fontSize={moderateScale(16)}
          valuePadding={verticalScale(2)}
          hasPadding
          options={[
            {label: 'Posts', value: true},
            {label: 'Photos', value: false},
          ]}
        />
      </View>
      <FeedList
        navigation={navigation}
        loading={loading}
        showPostsOrPhotos={showPostsOrPhotos}
      />
    </View>
  );
};

ToggleSwitch.propTypes = {
  feeds: PropTypes.array,
  loading: PropTypes.bool,
  showPostsOrPhotos: PropTypes.bool,
  setShowPostsOrPhotos: PropTypes.func,
  navigation: PropTypes.object,
};

export default ToggleSwitch;
