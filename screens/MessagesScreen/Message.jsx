import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from './style';

const Message = ({isLeft, message}) => {
  return (
    <View style={styles.container}>
      <View
        style={
          !isLeft
            ? styles.messageContainerisRight
            : styles.messageContainerisLeft
        }>
        <View style={styles.messageView}>
          <Text
            style={[
              styles.message,
              !isLeft ? styles.messageisRight : styles.messageIsLeft,
            ]}>
            {message}
          </Text>
        </View>
      </View>
      <View>
        <View style={isLeft ? styles.leftArrow : styles.rightArrow} />
      </View>
    </View>
  );
};

Message.propTypes = {
  isLeft: PropTypes.bool,
  message: PropTypes.string,
};

export default Message;