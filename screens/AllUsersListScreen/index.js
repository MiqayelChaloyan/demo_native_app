import PropTypes from 'prop-types';
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback, useContext, useEffect, useState} from 'react';
import ChatIcon from '../../assets/icons/Chat.svg';
import UsersList from './UsersList';
import {getDataUsersFromFile} from '../../utils/ApiUtils';
import {theme} from '../../assets/theme/theme';
import {GlobalDataContext} from '../../contexts/context';
import Warning from '../../components/Warning/Warning';
import Search from '../../components/Search/Search';
import styles from './style';

const AllUsersListScreen = ({ navigation }) => {
  const {imageUrl} = useContext(GlobalDataContext);
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState(initialData);
  const [nothingData, setNothingData] = useState('');

  useEffect(() => {
    const fetchData = () => {
      const result = getDataUsersFromFile();
      setInitialData(result);
    };
    fetchData();
  }, []);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const getFeedListData = useCallback(state => {
    return setData(state);
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.userImage}
            source={
              imageUrl
                ? { uri: imageUrl }
                : require('../../assets/images/Profile.png')
            }
          />
        </View>
        <Search
          list={initialData}
          setState={getFeedListData}
          keyword="fullName"
          setNothingData={setNothingData}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Messages')}
          style={styles.messages}>
          <ChatIcon width={25} height={25} fill={theme.colors.primary_green} />
        </TouchableOpacity>
      </View>
      {data.length < 1 && <Warning nothingData={nothingData} />}
      <View style={styles.pairsContainer}>
        <UsersList data={data} navigation={navigation} loading={loading} />
      </View>
    </View>
  )
};

AllUsersListScreen.propTypes = {
  navigation: PropTypes.object,
};

export default AllUsersListScreen;
