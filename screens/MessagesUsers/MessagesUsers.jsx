import React, {useEffect, useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text, View} from 'react-native';
import {GlobalDataContext} from '../../Data/context';
import SkeletonMessagesList from '../../components/Skeleton/SkeletonMessagesList';
import User from './User';
import styles from './style';
import Search from '../../components/Search/Search';

const MessagesUsers = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const {usersList} = useContext(GlobalDataContext);
  const [state, setState] = useState(usersList);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View style={styles.root}>
        <Search list={usersList} setState={setState} keyword="fullName" />
      </View>
      {state.length ? (
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
      ) : (
        <View style={styles.warning}>
          <Text style={styles.warningText}>
            Nothing was found in your search results.
          </Text>
        </View>
      )}
    </>
  );
};

MessagesUsers.propTypes = {
  navigation: PropTypes.object,
};

export default MessagesUsers;
