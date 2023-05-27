import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header/Header';
import styles from './style';
import Share from 'react-native-share';

const SupportMessageScreen = ({navigation}) => {
  const [text, setText] = useState('');

  const share = async () => {
    const options = {
      message: text,
      title: 'Testing the new app',
      email: 'cs-reply@amazon.com',
      subject: 'This is an example share.',
      recipient: '+37496403050',
    };

    try {
      const result = await Share.open(options);
      if (result.action === Share.sharedAction) {
        console.log('Share was successful');
      } else if (result.action === Share.dismissedAction) {
        console.log('Share was dismissed');
      } else if (result.action === Share.failedAction) {
        console.log('Share failed');
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <View style={styles.supportScreenContainer}>
      <View style={styles.supportScreen}>
        <Header
          // TODO: This part is will increase later.
          screen={'Compose'}
          navigation={navigation}
          back={'Market'}
          continueTo={'Market'}
          left={'Back'}
          right={'New'}
        />

        <View style={styles.inputContainer}>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Compose your message here..."
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={share}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

SupportMessageScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SupportMessageScreen;
