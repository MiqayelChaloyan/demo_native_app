import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header/Header';
import {DNAdataContext} from '../../Data/data';
// import styles from "./style";

const ExpensesScreen = () => {
  const {expensesData} = useContext(DNAdataContext);

  return (
    <View>
      <Header
        screen={'Expenses'}
        // TODO: This part is will increase later.
        // navigation={navigation}
        // back={'Auth'}
        // continueTo={'Market'}
      />
    </View>
  );
};

export default ExpensesScreen;
