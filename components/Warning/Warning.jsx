import {memo} from 'react';
import {Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const Warning = ({emptyDataMessage, screen}) => {
  return (
    <View style={styles.warning}>
      {screen !== 'Content' ? (
        <>
          <Image
            style={styles.image}
            source={require('../../assets/images/NotFound.jpg')}
          />
          <Text style={styles.warningText}>
            Your search "{emptyDataMessage}" did not match any results.
          </Text>
        </>
      ) : (
        <Text style={styles.warningTextContent}>
          Your search returned no results.
        </Text>
      )}
    </View>
  );
};

Warning.propTypes = {
  emptyDataMessage: PropTypes.string,
  screen: PropTypes.string,
};

Warning.defaultProps = {
  screen: '',
};

export default memo(Warning);
