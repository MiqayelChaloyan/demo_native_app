import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import ChatIcon from '../../assets/icons/Chat.svg';
import {theme} from '../../assets/theme/theme';
import {GlobalDataContext} from '../../contexts/context';
import Search from '../../components/Search/Search';
import styles from './style';


const HeaderList = ({data, handleSearch, setEmptyDataMessage, navigation}) => {
    const { imageUrl } = useContext(GlobalDataContext);

    // console.log('Header List component rendered >>>>>>');

    return (
        <View style={styles.header}>
        <View>
          <Image
            style={styles.userImage}
            source={
              imageUrl ? { uri: imageUrl } : require('../../assets/images/Profile.png')
            }
          />
        </View>
        <Search
          list={data}
          setState={handleSearch}
          keyword="fullName"
          setEmptyDataMessage={setEmptyDataMessage}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Messages')}
          style={styles.messages}>
          <ChatIcon width={25} height={25} fill={theme.colors.primary_green} />
        </TouchableOpacity>
      </View>
    )
}

HeaderList.propTypes = {
    data: PropTypes.array,
    handleSearch: PropTypes.func,
    setEmptyDataMessage: PropTypes.func,
    navigation: PropTypes.object.isRequired,
  };

export default React.memo(HeaderList);