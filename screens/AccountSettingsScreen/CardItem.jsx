import PropTypes from 'prop-types';
import React, {useContext, useCallback, useMemo} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {GlobalDataContext} from '../../contexts/context';
import {determineCardType} from '../../utils/CreditCardTypeUtils';
import DataActiveView from '../../components/DataActiveView';
import {horizontalScale} from '../../assets/metrics/Metrics';
import styles from './style';

const CardItem = ({card}) => {
    const {creditCardData, setCreditCardData} = useContext(GlobalDataContext);
    const lastFourDigits = useMemo(() => card.number.slice(-4), [card.number]);
    const cardTypeImage = useMemo(() => determineCardType(card.number), [card.number]);

    const activateCard = useCallback(() => {
        const updatedCardData = creditCardData.map(item => {
            if (item.id === card.id) {
                return {
                    ...item,
                    isActive: true
                };
            }
            return {
                ...item,
                isActive: false
            };
        });
        setCreditCardData(updatedCardData);
    }, [creditCardData, setCreditCardData, card.id]);

    return (
        <TouchableOpacity
            style={[styles.card, { borderWidth: card.isActive ? horizontalScale(1) : 0 }]}
            onPress={activateCard}
        >
            {cardTypeImage && <Image style={styles.cardType} source={cardTypeImage} />}
            <DataActiveView item={lastFourDigits} isCreditCard id={card.id} />
        </TouchableOpacity>
    );
};

CardItem.propTypes = {
    card: PropTypes.object.isRequired,
};

export default React.memo(CardItem);