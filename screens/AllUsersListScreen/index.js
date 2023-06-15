import PropTypes from 'prop-types';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {useCallback, useContext, useEffect, useState} from 'react';
import ChatIcon from '../../assets/icons/Chat.svg';
import RenderImagePairs from './RenderImagePairs';
import {getDataUsersFromFile} from '../../utils/ApiUtils';
import {theme} from '../../assets/theme/theme';
import {GlobalDataContext} from '../../contexts/context';
import Warning from '../../components/Warning/Warning';
import Search from '../../components/Search/Search';
import styles from './style';

const AllUsersListScreen = ({navigation}) => {
  const {imageUrl} = useContext(GlobalDataContext);
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState(initialData);

  const fetchData = useCallback(() => {
    const result = getDataUsersFromFile();
    return setInitialData(result);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log('render');

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
                ? {uri: imageUrl}
                : require('../../assets/images/Profile.png')
            }
          />
        </View>
        <Search
          list={initialData}
          setState={getFeedListData}
          keyword="fullName"
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
