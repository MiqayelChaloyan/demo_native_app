import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header/Header';
import styles from './style';
const SupportMessageScreen = ({navigation}) => {
  const [text, setText] = useState('');
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
          <TouchableOpacity>
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
