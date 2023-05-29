import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { theme } from '../../assets/theme/theme';
import Header from '../../components/Header/Header';
import { GlobalDataContext } from '../../Data/context';
import styles from './style';

const UserOptionsScreen = ({ navigation }) => {
  const { radioButtonsData } = useContext(GlobalDataContext);
  const [activated, setActivated] = useState(false);

  return (
    <View style={styles.optionsContainer}>
      <Header
        screen={'User Options'}
        navigation={navigation}
        back={'Feed'}
        continueTo={'Expenses'}
        left={'Back'}
        right={'Next'}
      />
      <View style={styles.container}>
        <FlatList
          data={radioButtonsData}
          contentContainerStyle={styles.starsContainer}
          renderItem={({ item }) => (
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
      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>I love it!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

UserOptionsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default UserOptionsScreen;