import PropTypes from 'prop-types';
import {memo, useContext, useMemo, useCallback} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';
import CardAddIcon from '../../assets/icons/CardAdd.svg';
import {GlobalDataContext} from '../../contexts/context';
import PaymentCards from './PaymentCards';
import styles from './style';

const CardPaymentSystem = ({navigation}) => {
  const {creditCardData} = useContext(GlobalDataContext);

  const renderPaymentCards = useMemo(() => {
    if (creditCardData.length > 0) {
      return <PaymentCards />;
    }
    return null;
  }, [creditCardData]);

  const handleAddCard = useCallback(() => {
    if (creditCardData.length < 3) {
      navigation.navigate('Payment');
    }
  }, [creditCardData, navigation]);

  return (
    <View>
      <StatusBar
        backgroundColor={theme.colors.light_grey}
        barStyle="light-content"
      />
      <Text style={styles.paymentText}>My Payment Methods</Text>
      {renderPaymentCards}
      {creditCardData.length < 3 ? (
        <TouchableOpacity style={styles.contain} onPress={handleAddCard}>
          <CardAddIcon
            width={horizontalScale(30)}
            height={verticalScale(25)}
            fill={theme.colors.black}
          />
          <Text style={styles.buttonAdd}>Add a Card</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.maximumCards}>
          You can attach a maximum of three cards.
        </Text>
      )}
    </View>
  );
};

CardPaymentSystem.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(CardPaymentSystem);
