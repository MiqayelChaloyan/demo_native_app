import {useCallback} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import CancelIcon from '../../../../assets/icons/Cancel.svg';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/metrics/Metrics';
import {theme} from '../../../../assets/theme/theme';
import styles from './style';

const UsersMessagesModal = ({setDeleteFriendsList}) => {
  const handleRemoveFriend = useCallback(action => {
    return () => {
      setDeleteFriendsList(action);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <TouchableOpacity
          onPress={handleRemoveFriend('Cancel')}
          style={styles.cancel}>
          <CancelIcon
            width={horizontalScale(25)}
            height={verticalScale(25)}
            fill={theme.colors.black}
          />
        </TouchableOpacity>
        <Text style={styles.question}>Are you sure you want to delete?</Text>
        <View style={styles.contain}>
          <TouchableOpacity onPress={handleRemoveFriend('YES')}>
            <Text style={styles.answer}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRemoveFriend('Cancel')}>
            <Text style={styles.answer}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

UsersMessagesModal.propTypes = {
  setAnswer: PropTypes.func,
};

export default UsersMessagesModal;
