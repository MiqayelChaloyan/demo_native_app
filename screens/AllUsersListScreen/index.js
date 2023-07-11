import {memo, useState} from 'react';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import UsersList from './UsersList';
import Header from './Header';
import useDataForUpdate from '../../customHooks/useDataForUpdate';
import styles from './style';

const AllUsersListScreen = ({navigation}) => {
  const [filteredUsersData, setFilteredUsersData] = useState([]);
  const [emptyDataMessage, setEmptyDataMessage] = useState('');

  const {data, error} = useDataFromAPI('users');

  useDataForUpdate(data, setFilteredUsersData, error);

  return (
    <View style={styles.root}>
      <Header
        data={data}
        setFilteredUsersData={setFilteredUsersData}
        setEmptyDataMessage={setEmptyDataMessage}
        navigation={navigation}
      />
      <View style={styles.pairsContainer}>
        <UsersList
          data={filteredUsersData}
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

export default memo(AllUsersListScreen);
