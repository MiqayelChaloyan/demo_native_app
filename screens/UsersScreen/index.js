import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {useContext, useState} from 'react';
import ChatIcon from '../../assets/icons/Chat.svg';
import RenderImagePairs from './RenderImagePairs';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';
import {theme} from '../../assets/theme/theme';
import {GlobalDataContext} from '../../contexts/context';
import styles from './style';
import Search from '../../components/Search/Search';
import useDataForUpdate from '../../customHooks/useDataForUpdate';
import PropTypes from 'prop-types';

const UsersScreen = ({navigation}) => {
  const {imageUrl} = useContext(GlobalDataContext);
  const [usersData, setUsersData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const {data, error} = useDataFromAPI('users');

  useDataForUpdate(data, setUsersData, error);

  console.log('All Users List was rendered');
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

        <Search list={data} setState={setFilteredData} keyword="fullName" />

        <TouchableOpacity
          onPress={() => navigation.navigate('Messages')}
          style={styles.messages}>
          <ChatIcon width={25} height={25} fill={theme.colors.primary_green} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {usersData.length > 0 && RenderImagePairs(filteredData, navigation)}
      </ScrollView>
    </View>
  );
};
UsersScreen.propTypes = {
  navigation: PropTypes.object,
};

export default UsersScreen;
