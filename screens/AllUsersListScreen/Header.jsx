import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import ChatIcon from '../../assets/icons/Chat.svg';
import {theme} from '../../assets/theme/theme';
import {GlobalDataContext} from '../../contexts/context';
import Search from '../../components/Search/Search';
import styles from './style';

const Header = ({
  data,
  setFilteredUsersData,
  setEmptyDataMessage,
  navigation,
}) => {
  const {imageUrl} = useContext(GlobalDataContext);

  const userImageUrl = imageUrl
    ? {uri: imageUrl}
    : require('../../assets/images/Profile.png');

  return (
    <View style={styles.header}>
      <View>
        <Image style={styles.userImage} source={userImageUrl} />
      </View>
      <Search
        list={data}
        setState={setFilteredUsersData}
        keyword="fullName"
        setEmptyDataMessage={setEmptyDataMessage}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Messages')}
        style={styles.messages}>
        <ChatIcon width={25} height={25} fill={theme.colors.primary_green} />
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {
  data: PropTypes.array.isRequired,
  setFilteredUsersData: PropTypes.func,
  setEmptyDataMessage: PropTypes.func,
  navigation: PropTypes.object.isRequired,
};

export default React.memo(Header);
