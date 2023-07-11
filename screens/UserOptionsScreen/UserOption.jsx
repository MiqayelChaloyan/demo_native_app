import {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const UserOption = props => {
  const {item} = props;
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = item => {
    const updatedSelection = [...selectedItems];
    const index = updatedSelection.findIndex(
      selectedItem => selectedItem.id === item.id,
    );

    if (index !== -1) {
      updatedSelection.splice(index, 1);
    } else {
      updatedSelection.push(item);
    }

    setSelectedItems(updatedSelection);
  };

  const isSelected = selectedItems.some(
    selectedItem => selectedItem.id === item.id,
  );

  return (
    <>
      <View style={styles.options}>
        <Text style={styles.optionsText}>{item.label}</Text>
        <TouchableOpacity onPress={() => toggleSelection(item)}>
          <View
            style={[
              styles.radioBoxContainer,
              {
                borderColor: isSelected
                  ? theme.colors.primary_green
                  : theme.colors.cool_gray,
              },
            ]}>
            {isSelected && <View style={styles.selected} />}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
    </>
  );
};

UserOption.propTypes = {
  item: PropTypes.object,
};

export default memo(UserOption);
