import PropTypes from 'prop-types';
import {memo, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {determineCardType} from '../../../../utils/CreditCardTypeUtils';
import {GlobalDataContext} from '../../../../contexts/context';
import styles from './style';

const PaymentModal = ({setModalVisible, handleRemove, id}) => {
  const {creditCardData} = useContext(GlobalDataContext);
  const result = creditCardData.filter(item => item.id === id);
  const number = result[0].number.slice(-4);
  const url = determineCardType(result[0].number);

  return (
    <View style={styles.root}>
      <View style={styles.modal}>
        <Text style={styles.question}>Do you want to delete the card ?</Text>
        <View style={styles.contain}>
          {url && <Image style={styles.cardType} source={url} />}
          <Text style={styles.cardNumber}>{`••••${number}`}</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button_1}
            onPress={() => handleRemove()}>
            <Text style={styles.text_1}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_2}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.text_2}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

PaymentModal.propTypes = {
  setModalVisible: PropTypes.func,
  handleRemove: PropTypes.func,
};

export default memo(PaymentModal);
