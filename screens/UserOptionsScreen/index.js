import {memo} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../../components/Header/Header';
import UserOptionsList from './UserOptionsList';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';
import styles from './style';

const UserOptionsScreen = ({navigation}) => {
  const {data} = useDataFromAPI('options');

  const handleNavigation = () => navigation.navigate('Feed');

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

export default memo(UserOptionsScreen);
