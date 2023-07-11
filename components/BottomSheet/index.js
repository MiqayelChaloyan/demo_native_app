import PropTypes from 'prop-types';
import {memo, useState, useCallback} from 'react';
import {View, Dimensions} from 'react-native';
import DeleteButton from '../DeleteButton';
import styles from './style';

const BottomSheet = ({children, onClose}) => {
  const [sheetHeight, setSheetHeight] = useState(
    Dimensions.get('window').height * 2,
  );

  const handleClose = useCallback(() => {
    setSheetHeight(0);
    onClose();
  }, [onClose]);

  return (
    <View activeOpacity={1} style={[styles.container, {height: sheetHeight}]}>
      <View style={styles.sheet}>
        <DeleteButton onPress={handleClose} small={false} />
        <View>{children}</View>
      </View>
    </View>
  );
};

BottomSheet.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default memo(BottomSheet);
