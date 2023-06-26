import styles from './style';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../assets/theme/theme';
import {memo, useState} from 'react';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';

const OptionsList = () => {
  const [activated, setActivated] = useState(false);

  const {data} = useDataFromAPI('options');

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.starsContainer}
        renderItem={({item}) => (
          <>
            <View style={styles.options}>
              <Text style={styles.optionsText}>{item.label}</Text>
              <TouchableOpacity
                onPress={() => {
                  setActivated(!activated);
                  item.selected = !item.selected;
                }}>
                <View
                  style={[
                    {
                      borderColor: item.selected
                        ? theme.colors.primary_green
                        : theme.colors.cool_gray,
                    },
                    styles.radioBoxContainer,
                  ]}>
                  {item.selected ? <View style={styles.selected} /> : null}
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
          </>
        )}
        keyExtractor={(_, index) => index}
      />
    </View>
  );
};

export default memo(OptionsList);
