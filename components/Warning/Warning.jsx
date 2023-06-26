import {Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const Warning = ({emptyDataMessage, screen}) => {
  return (
    <View style={styles.warning}>
      {screen === 'Content' ?
        <Text style={styles.warningTextContent}>
            Your search  not results.
        </Text>
        :
        <>
          <Image
            style={styles.image}
            source={require('../../assets/images/NotFound.jpg')}
          />
          <Text style={styles.warningText}>
            Your search "{emptyDataMessage}" did not match any results.
          </Text>
        </>
      }
    </View>
  );
};

Warning.propTypes = {
  emptyDataMessage: PropTypes.string,
  screen: PropTypes.string,
};

export default Warning;
