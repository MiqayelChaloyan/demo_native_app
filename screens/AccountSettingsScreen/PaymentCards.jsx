import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {GlobalDataContext} from '../../contexts/context';
import CardItem from './CardItem';

const PaymentCards = () => {
    const {creditCardData} = useContext(GlobalDataContext);

    return (
        <FlatList
            data={creditCardData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CardItem card={item} />}
        />
    )
}

export default React.memo(PaymentCards);
