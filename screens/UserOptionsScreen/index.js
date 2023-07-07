import {memo, useState, useCallback} from 'react';
import styles from './style';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../assets/theme/theme';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';

const OptionsList = () => {
  const [activated, setActivated] = useState(false);

  const {data} = useDataFromAPI('options');

  const getBorderColor = activated
    ? theme.colors.primary_green
    : theme.colors.cool_gray;

  const handleOptionPress = useCallback(item => {
    setActivated(prevActivated => !prevActivated);
    item.selected = !item.selected;
  }, []);

  const renderOption = useCallback(
    ({item}) => {
      const borderColor = getBorderColor(item.selected);
      const selectedView = item.selected ? (
        <View style={styles.selected} />
      ) : null;

      return (
        <>
          <View style={styles.options}>
            <Text style={styles.optionsText}>{item.label}</Text>
            <TouchableOpacity onPress={() => handleOptionPress(item)}>
              <View style={[{borderColor}, styles.radioBoxContainer]}>
                {selectedView}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
        </>
      );
    },
    [getBorderColor, handleOptionPress],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.starsContainer}
        renderItem={renderOption}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default memo(OptionsList);
