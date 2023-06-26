import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Warning from '../../components/Warning/Warning';
import Chapter from './Chapter';
import Search from '../../components/Search/Search';
import styles from './style';


const MarketContent = ({ navigation, initialData }) => {
    const [data, setData] = useState(initialData);
    const [emptyDataMessage, setEmptyDataMessage] = useState('');

    const searchResult = useCallback((result) => {
        return setData(result);
    }, []);

    const specifiedResultText = useCallback((text) => {
        return setEmptyDataMessage(text);
    }, []);

    return (
        <>
            <View style={styles.searchView}>
                <Search
                    list={initialData}
                    setState={searchResult}
                    keyword="title"
                    setEmptyDataMessage={specifiedResultText}
                />
            </View>
            {data.length > 0 ? (
                <View style={styles.contentContainer}>
                    <Chapter data={data} navigation={navigation} header="Hot Deals" />
                    <Chapter data={data} navigation={navigation} header="Trending" />
                    <Chapter data={data} navigation={navigation} header="Deals" />
                </View>
            ) : (
                <Warning emptyDataMessage={emptyDataMessage} />
            )}
        </>
    )
}

MarketContent.propTypes = {
    navigation: PropTypes.object.isRequired,
    initialData: PropTypes.array,
};

export default React.memo(MarketContent);