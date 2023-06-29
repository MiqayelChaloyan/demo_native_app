import React, {useEffect, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import Search from '../../components/Search/Search';
import {getDataFromFile} from '../../utils/ApiUtils';
import ContactsList from './ContactsList';
import styles from './style';

const ContactsUsers = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [emptyDataMessage, setEmptyDataMessage] = useState('');

  const fetchData = () => {
      const result =  getDataFromFile('users');
      const friends = result.filter(item => item.friend);
      setData(friends);
      setFilteredData(friends);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = useCallback((searchData) => {
    setFilteredData(searchData);
  }, []);

  return (
    <View style={styles.listUsersRoot}>
      <TouchableOpacity onPress={() => navigation.navigate('Users')} style={styles.back}>
        <Text style={styles.navigate}>Back</Text>
      </TouchableOpacity>
      <View style={styles.root}>
        <Search
          list={data}
          researchResult={handleSearch}
          keyword="fullName"
          setEmptyDataMessage={setEmptyDataMessage}
        />
      </View>
      <ContactsList
        filteredData={filteredData}
        emptyDataMessage={emptyDataMessage}
        navigation={navigation}
      />
    </View>
  );
};

ContactsUsers.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(ContactsUsers);