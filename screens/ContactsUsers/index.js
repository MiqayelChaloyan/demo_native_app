import {useState, memo} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import Search from '../../components/Search/Search';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';
import ContactsList from './ContactsList';
import useDataForUpdate from '../../customHooks/useDataForUpdate';
import styles from './style';

const ContactsUsers = ({navigation}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [emptyDataMessage, setEmptyDataMessage] = useState('');

  const {data, error} = useDataFromAPI('users');

  useDataForUpdate(data, setFilteredData, error);

  return (
    <View style={styles.listUsersRoot}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Users')}
        style={styles.back}>
        <Text style={styles.navigate}>Back</Text>
      </TouchableOpacity>
      <View style={styles.root}>
        <Search
          list={data}
          setState={setFilteredData}
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

export default memo(ContactsUsers);
