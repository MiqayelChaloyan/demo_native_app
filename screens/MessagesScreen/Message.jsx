import {memo} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from './style';

const Message = ({isLeft, message}) => {
  const selectAppropriateStyle = (right, left) => [
    isLeft ? styles[left] : styles[right],
  ];

  return (
    <View style={styles.container}>
      <View
        style={selectAppropriateStyle(
          'messageContainerIsLeft',
          'messageContainerIsRight',
        )}>
        <View style={styles.messageView}>
          <Text
            style={[
              styles.message,
              selectAppropriateStyle('messageIsLeft', 'messageIsRight'),
            ]}>
            {message}
          </Text>
        </View>
      </View>
      <View>
        <View style={selectAppropriateStyle('leftArrow', 'rightArrow')} />
      </View>
    </View>
  );
};

Message.propTypes = {
  isLeft: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

export default memo(Message);
