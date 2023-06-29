import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View, Alert} from 'react-native';
import Header from '../../components/Header/Header';
import Share from 'react-native-share';
import SupportMessage from './SupportMessage';
import styles from './style';

const SupportMessageScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  const share = async () => {
    const options = {
      message: text,
      title: 'Testing the new app',
      email: 'cs-reply@amazon.com',
    };

    try {
      const result = await Share.open(options);
      if (result.action === Share.sharedAction) {
        Alert.alert('Share was successful');
      } else if (result.action === Share.dismissedAction) {
        Alert.alert('Share was dismissed');
      } else if (result.action === Share.failedAction) {
        Alert.alert('Share failed');
      }
    } catch (err) {
      if (err.message === 'User did not share') {
      } else {
        Alert.alert(err.message);
      }
    }
  };

  return (
    <View style={styles.supportScreenContainer}>
      <View style={styles.supportScreen}>
        <Header
          screen="Compose"
          navigation={navigation}
          back="Market"
          continueTo="Profile"
          left="Back"
          right="New"
        />
        <SupportMessage setText={setText} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={share}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};

SupportMessageScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(SupportMessageScreen);
