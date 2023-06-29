import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import InfinityIcon from '../../assets/icons/Infinity.svg';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const UserCard = ({item, navigation}) => {
  const {imageUrl, fullName} = item;

  return (
    <View style={styles.container}>
      <View style={styles.userOptions}>
        <View style={styles.imageContain}>
          <Image
            style={styles.contactBackground}
            source={require('../../assets/images/DefaultBackground.webp')}
          />
        </View>
        <View style={styles.userImageContainer}>
          <Image
            style={styles.userImageProfile}
            source={imageUrl ? { uri: imageUrl } : require('../../assets/images/Profile.png')}
          />
        </View>
        <Text style={styles.userFullName}>{fullName}</Text>
        <View style={styles.contacts}>
          <InfinityIcon
            width={horizontalScale(15)}
            height={verticalScale(15)}
            fill={theme.colors.black}
          />
          <Text style={styles.contactsInformationText}>8 common contacts</Text>
        </View>
        <TouchableOpacity
          style={styles.messagesButton}
          onPress={() => navigation.navigate({ name: 'Chat', params: { userItem: item } })}
        >
          <Text style={styles.buttonText}>Messages</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

UserCard.propTypes = {
  item: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

UserCard.defaultProps = {
  item: {},
};

export default React.memo(UserCard);
