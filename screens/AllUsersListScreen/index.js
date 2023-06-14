import PropTypes from 'prop-types';
import {
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback, useContext, useEffect, useState} from 'react';
import ChatIcon from '../../assets/icons/Chat.svg';
import RenderImagePairs from './RenderImagePairs';
import {getDataUsersFromFile} from '../../utils/ApiUtils';
import {theme} from '../../assets/theme/theme';
import {GlobalDataContext} from '../../contexts/context';
import Warning from '../../components/Warning/Warning';
import styles from './style';

const AllUsersListScreen = ({navigation}) => {
  const {imageUrl} = useContext(GlobalDataContext);
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = useCallback(() => {
    const result = getDataUsersFromFile();
    return setInitialData(result);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      const result = initialData.filter(item => {
        let value = item.fullName.toLowerCase();
        return value.includes(searchQuery.toLowerCase());
      });
      setData(result);
    } else {
      setData(initialData);
    }
  };

  useEffect(() => {
    return handleSearch();
  }, [initialData, searchQuery, setData]);

  console.log('render');

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.userImage}
            source={
              imageUrl
                ? {uri: imageUrl}
                : require('../../assets/images/Profile.png')
            }
          />
        </View>
        <TextInput
          name="search"
          placeholder="Search"
          style={styles.input}
          variant="outlined"
          onChangeText={value => setSearchQuery(value)}
          value={searchQuery}
          keyboardType="web-search"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Messages')}
          style={styles.messages}>
          <ChatIcon width={25} height={25} fill={theme.colors.primary_green} />
        </TouchableOpacity>
      </View>
      {data.length < 1 && <Warning />}
      <ScrollView>
        {data.length > 0 && RenderImagePairs(data, navigation)}
      </ScrollView>
    </View>
  );
};

AllUsersListScreen.propTypes = {
  navigation: PropTypes.object,
};

export default AllUsersListScreen;
