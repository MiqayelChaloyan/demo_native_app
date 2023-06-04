import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import SkeletonMessagesList from '../../components/Skeleton/SkeletonMessagesList';
import User from './User';
import Search from '../../components/Search/Search';
import { getDataUsersFromFile } from '../../utils/ApiUtils';
import styles from './style';

const MessagesUsers = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [state, setState] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataUsersFromFile();
      const friends = result.filter(item => item.friend);
      setData(friends);
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
      <TouchableOpacity onPress={() => navigation.navigate('Users')}>
        <Text style={styles.navigate}>Back</Text>
      </TouchableOpacity>
      <View style={styles.root}>
        <Search list={data} setState={setState} keyword="fullName" />
      </View>
      <View style={styles.listUsers}>
        <FlatList
          data={state}
          ListEmptyComponent={
            <View style={styles.warning}>
              <Text style={styles.warningText}>
                Nothing was found in your search results.
              </Text>
            </View>
          }
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

MessagesUsers.propTypes = {
  navigation: PropTypes.object,
};

export default MessagesUsers;
