import PropTypes from 'prop-types';
import {useContext} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import GoIcon from '../../assets/icons/Go.svg';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import Header from '../../components/Header/Header';
import {GlobalDataContext} from '../../contexts/context';
import styles from './style';

const SettingsScreen = ({navigation}) => {
  const {settings} = useContext(GlobalDataContext);
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.settingsItem}
      onPress={() => item.onPress(navigation)}>
      <View style={styles.leftSide}>
        <item.icon width={horizontalScale(30)} height={verticalScale(30)} />
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {item.title}
          </Text>
        </View>
      </View>
      <View>
        <GoIcon width={horizontalScale(30)} height={verticalScale(30)} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.settingsScreen}>
        <Header
          screen="Settings"
          navigation={navigation}
          back="Profile"
          continueTo="Feed"
          left="Back"
          right="Filter"
        />
        <View style={styles.settingsList}>
          <FlatList
            data={settings}
            renderItem={renderItem}
            keyExtractor={item => item.key}
          />
        </View>
      </View>
    </View>
  );
};

SettingsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SettingsScreen;
