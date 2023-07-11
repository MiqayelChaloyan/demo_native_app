import PropTypes from 'prop-types';
import {memo, useState, useCallback} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import ProfileModificationForm from './ProfileModificationForm';
import BottomSheet from '../../components/BottomSheet';
import CardPaymentSystem from './CardPaymentSystem';
import HeaderPreferences from '../../components/HeaderPreferences';
import styles from './style';

const AccountSettings = ({navigation}) => {
  const [isVisible, setVisible] = useState(false);

  const handleClose = useCallback(() => {
    setVisible(!isVisible);
  }, [isVisible]);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.block}>
          <HeaderPreferences
            navigation={navigation}
            screen={'SettingsNav'}
            option={'Account Settings'}
          />
          <ProfileModificationForm navigation={navigation} />
          <TouchableOpacity style={styles.openModal} onPress={handleClose}>
            <Text style={styles.textOpenModal}>My cards</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {isVisible && (
        <BottomSheet
          children={<CardPaymentSystem navigation={navigation} />}
          onClose={handleClose}
        />
      )}
    </>
  );
};

AccountSettings.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(AccountSettings);
