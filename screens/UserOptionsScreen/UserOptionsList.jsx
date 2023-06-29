import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const UserOptionsList = ({data}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                contentContainerStyle={styles.starsContainer}
                renderItem={({ item }) => (
                    <>
                        <View style={styles.options}>
                            <Text style={styles.optionsText}>{item.label}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setIsActive(!isActive);
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
    )
}

UserOptionsList.propTypes = {
    data: PropTypes.array.isRequired,
  };

export default React.memo(UserOptionsList);