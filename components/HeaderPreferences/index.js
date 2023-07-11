import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const HeaderPreferences = ({navigation, screen, option}) => {

    const handleNavigation = useCallback(() => {
        navigation.navigate(screen);
    }, [navigation, screen]);

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={handleNavigation}>
                <Text style={styles.headerTextCancel}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>{option}</Text>
        </View>
    );
};

HeaderPreferences.propTypes = {
    navigation: PropTypes.object.isRequired,
    screen: PropTypes.string,
    option: PropTypes.string,
};

export default React.memo(HeaderPreferences);