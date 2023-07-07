import PropTypes from 'prop-types';
import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from './style';

const BottomSheet = ({children, onClose}) => {
  const [sheetHeight, setSheetHeight] = useState(Dimensions.get('window').height * 2);

  const handleClose = useCallback(() => {
    setSheetHeight(0);
    onClose();
    }, [onClose]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.container, { height: sheetHeight }]}
    >
      <View style={styles.sheet}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Text style={styles.closeButtonText}>✖️</Text>
        </TouchableOpacity>
        <View>
          {children}
        </View>
      </View>
    </TouchableOpacity>
  );
};

BottomSheet.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(BottomSheet);
