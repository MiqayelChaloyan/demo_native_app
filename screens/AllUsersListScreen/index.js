import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {useCallback, useContext, useState} from 'react';
import ChatIcon from '../../assets/icons/Chat.svg';
import RenderImagePairs from './RenderImagePairs';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';
import {theme} from '../../assets/theme/theme';
import {GlobalDataContext} from '../../contexts/context';
import Warning from '../../components/Warning/Warning';
import styles from './style';
import Search from '../../components/Search/Search';
import useDataForUpdate from '../../customHooks/useDataForUpdate';
import PropTypes from 'prop-types';

const AllUsersListScreen = ({navigation}) => {
  const {imageUrl} = useContext(GlobalDataContext);
  const [usersData, setUsersData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const {data, error} = useDataFromAPI('users');

  useDataForUpdate(data, setUsersData, error);
  const navigateTo = useCallback(() => navigation.navigate('Messages'), []);
  const userImageUrl = imageUrl
    ? {uri: imageUrl}
    : require('../../assets/images/Profile.png');
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View>
          <Image style={styles.userImage} source={userImageUrl} />
        </View>

        <Search list={data} setState={setFilteredData} keyword="fullName" />

        <TouchableOpacity onPress={navigateTo} style={styles.messages}>
          <ChatIcon width={25} height={25} fill={theme.colors.primary_green} />
        </TouchableOpacity>
      </View>
      {data.length < 1 && <Warning />}
      <ScrollView>
        {usersData.length > 0 && RenderImagePairs(filteredData, navigation)}
      </ScrollView>
    </View>
  );
};

AllUsersListScreen.propTypes = {
  navigation: PropTypes.object,
};

export default AllUsersListScreen;
