import React from 'react';
import PropTypes from 'prop-types';
import {View, FlatList} from 'react-native';
import styles from './style';
import UserOption from './UserOption';

const UserOptionsList = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.starsContainer}
        renderItem={(props) => <UserOption {...props}/>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

UserOptionsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default React.memo(UserOptionsList);
