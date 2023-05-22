import React, {useEffect, useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, TextInput, View} from 'react-native';
import {DNAdataContext} from '../../Data/data';
import SkeletonMessagesList from '../../components/Skeleton/SkeletonMessagesList';
import User from './User';
import { theme } from '../../assets/theme/theme';
import styles from './style';

const MessagesUsers = ({navigation}) => {
  const [searchItemValue, setSearchItemValue] = useState('');
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const {usersList} = useContext(DNAdataContext);

  useEffect(() => {
    const result = usersList.filter(user => {
      fullName = user.fullName.toLowerCase();
      return fullName.indexOf(searchItemValue) > -1;
    });
    setState(result);
  }, [searchItemValue]);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View style={styles.root}>
        <TextInput
          name="search"
          placeholder="Search..."
          placeholderTextColor={theme.colors.lightGray}
          style={styles.input}
          variant="standard"
          onChangeText={value => setSearchItemValue(value)}
          value={searchItemValue}
          keyboardType="web-search"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={false}
        />
      </View>
      <View style={styles.listUsers}>
        <FlatList
          data={state}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return loading ? (
              <View style={styles.skeleton}>
                <SkeletonMessagesList />
              </View>
            ) : (
              <User item={item} navigation={navigation} />
            );
          }}
        />
      </View>
    </>
  );
};

MessagesUsers.propTypes = {
  navigation: PropTypes.object,
};

export default MessagesUsers;
