import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import InfinityIcon from '../../assets/icons/Infinity.svg';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const UserCard = ({item, navigation}) => {
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
            source={
              item.imageUrl
                ? {uri: item.imageUrl}
                : require('../../assets/images/Profile.png')
            }
          />
        </View>
        <View>
          <Text style={styles.userFullName}>{item.fullName}</Text>
        </View>
        <View style={styles.contacts}>
          <InfinityIcon
            width={horizontalScale(15)}
            height={verticalScale(15)}
            fill={theme.colors.black}
          />
          <Text style={styles.contactsInormationText}>8 common contacts</Text>
        </View>
        <TouchableOpacity>
          <Text
            style={styles.messagesButton}
            onPress={() => {
              const userItem = item;
              navigation.navigate({
                name: 'Chat',
                params: {userItem},
              });
            }}>
            Messages
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

UserCard.propTypes = {
  item: PropTypes.object,
  navigation: PropTypes.object,
};

export default UserCard;
