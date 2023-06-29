import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {moderateScale, verticalScale} from '../../../assets/metrics/Metrics';
import FeedList from '../../../components/FeedList/FeedList';
import {theme} from '../../../assets/theme/theme';
import styles from './style';

const ToggleSwitch = ({showHide, setShowHide, navigation}) => {
  return (
    <View style={styles.listContainer}>
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
          valuePadding={verticalScale(2)}
          hasPadding
          options={[
            { label: 'Posts', value: true },
            { label: 'Photos', value: false },
          ]}
        />
      </View>
      <View style={styles.containerProfileList}>
        <FeedList
          navigation={navigation}
          showHide={showHide}
        />
      </View>
    </View>
  );
};

ToggleSwitch.propTypes = {
  showHide: PropTypes.bool,
  setShowHide: PropTypes.func,
  navigation: PropTypes.object.isRequired,
};

export default React.memo(ToggleSwitch);
