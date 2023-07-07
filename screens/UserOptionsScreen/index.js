import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../../components/Header/Header';
import {getDataFromFile} from '../../utils/ApiUtils';
import UserOptionsList from './UserOptionsList';
import styles from './style';

const UserOptionsScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await getDataFromFile('options');
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNavigation = () => navigation.navigate('Feed')

  return (
    <View style={styles.optionsContainer}>
      <Header
        screen="User Options"
        navigation={navigation}
        back="Feed"
        continueTo="Expenses"
        left="Back"
        right="Next"
      />
      <UserOptionsList data={data} />
      <TouchableOpacity onPress={handleNavigation}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>I love it!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

UserOptionsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(UserOptionsScreen);
