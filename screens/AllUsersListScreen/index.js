import PropTypes from 'prop-types';
import {
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useContext, useEffect, useState} from 'react';
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
  const [searchItemValue, setSearchItemValue] = useState('');

  useEffect(() => {
    const fetchData = () => {
      const result = getDataUsersFromFile();
      setInitialData(result);
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const result = initialData.filter(item => {
      let param = item.fullName.toLowerCase();
      return param.indexOf(searchItemValue) > -1;
    });
    setData(result);
  };

  useEffect(() => {
    return handleSearch();
  }, [initialData, searchItemValue]);

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
          onChangeText={value => setSearchItemValue(value)}
          value={searchItemValue}
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
