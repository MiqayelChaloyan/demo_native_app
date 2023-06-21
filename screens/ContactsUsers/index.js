import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import SkeletonMessagesList from '../../components/Skeleton/SkeletonMessagesList';
import Warning from '../../components/Warning/Warning';
import User from './User';
import Search from '../../components/Search/Search';
import {getDataUsersFromFile} from '../../utils/ApiUtils';
import styles from './style';

const ContactsUsers = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState(initialData);
  const [nothingData, setNothingData] = useState('');

  useEffect(() => {
    const fetchData = () => {
      const result = getDataUsersFromFile();
      const friends = result.filter(item => item.friend);
      setInitialData(friends);
    };
    fetchData();
  }, []);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.listUsersRoot}>
      <TouchableOpacity onPress={() => navigation.navigate('Users')} style={styles.back}>
        <Text style={styles.navigate}>Back</Text>
      </TouchableOpacity>
      <View style={styles.root}>
        <Search list={initialData} setState={setData} keyword="fullName" setNothingData={setNothingData}/>
      </View>
      <View style={styles.listUsers}>
        <FlatList
          data={data}
          ListEmptyComponent={<Warning nothingData={nothingData}/>}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return loading ? (
              <View style={styles.skeleton}>
                <SkeletonMessagesList />
              </View>
            ) : (
              <User userItem={item} navigation={navigation} />
            );
          }}
        />
      </View>
    </View>
  );
};

ContactsUsers.propTypes = {
  navigation: PropTypes.object,
};

export default ContactsUsers;