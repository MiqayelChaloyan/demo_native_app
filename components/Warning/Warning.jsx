import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const Warning = ({nothingData}) => {
  return (
    <View style={styles.warning}>
      <Image
        style={styles.image}
        source={require('../../assets/images/NotFound.jpg')}
      />
      <Text style={styles.warningText}>
        Your search "{nothingData}" did not match any results.
      </Text>
    </View>
  );
};

Warning.propTypes = {
  nothingData: PropTypes.string,
};

export default Warning;
