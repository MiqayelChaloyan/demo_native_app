import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

const DeleteButton = ({ onPress, small }) => {
    const buttonStyle = small ? styles.checkedRemove : styles.closeButton;
    const textStyle = small ? styles.removeCard : styles.closeButtonText;
  
    return (
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>✖️</Text>
      </TouchableOpacity>
    );
  };

export default React.memo(DeleteButton);
