import PropTypes from 'prop-types';
import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CheckIcon from '../../assets/icons/Check.svg';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import CreditCardDeletion from '../../screens/AccountSettingsScreen/CreditCardDeletion';
import styles from './style';

const DataActiveView = ({ item, isCreditCard, id }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const value = useMemo(() => (isCreditCard ? `••••${item}` : item), [isCreditCard, item]);

    const handleDeleteCard = useCallback(() => {
        setModalVisible(true);
    }, []);

    const selectAppropriateStyle = (className) => ([
        styles[className],
        { left: isCreditCard ? horizontalScale(40) : 0 },
    ]);

    if (!item) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={selectAppropriateStyle('value', isCreditCard)}>
                {value}
            </Text>
            <View style={styles.checked}>
                {isCreditCard ? (
                    <TouchableOpacity style={styles.checkedRemove} onPress={handleDeleteCard}>
                        <Text style={styles.removeCard}>✖️</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.checkedBox}>
                        <CheckIcon width={horizontalScale(17)} height={verticalScale(17)} />
                    </View>
                )}
            </View>
            <CreditCardDeletion isModalVisible={isModalVisible} setModalVisible={setModalVisible} id={id} />
        </View>
    );
};

DataActiveView.propTypes = {
    item: PropTypes.string,
    isCreditCard: PropTypes.bool,
    id: PropTypes.number,
};

export default React.memo(DataActiveView);