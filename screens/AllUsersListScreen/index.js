import PropTypes from 'prop-types';
import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import UsersList from './UsersList';
import Header from './Header';
import {getDataFromFile} from '../../utils/ApiUtils';
import styles from './style';

const AllUsersListScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [emptyDataMessage, setEmptyDataMessage] = useState('');

  const fetchData = () => {
    const result =  getDataFromFile('users');
    setData(result);
    setFilteredData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleSearch = useCallback((searchData) => {
    setFilteredData(searchData);
  }, [handleSearch]);

  return (
    <View style={styles.root}>
      <Header
        data={data}
        handleSearch={handleSearch}
        setEmptyDataMessage={setEmptyDataMessage}
        navigation={navigation}
      />
      <View style={styles.pairsContainer}>
        <UsersList
          data={filteredData}
          navigation={navigation}
          emptyDataMessage={emptyDataMessage}
        />
      </View>
    </View>
  );
};

AllUsersListScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AllUsersListScreen;
