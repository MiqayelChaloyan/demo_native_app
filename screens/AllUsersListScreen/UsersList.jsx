import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import UserCard from './UserCard';
import SkeletonAllUsersList from '../../components/Skeleton/SkeletonAllUsersList';
import styles from './style';

const UsersList = ({data, navigation, loading}) => {
  const renderItem = ({ item }) => (
    <View style={styles.col}>
      {loading ? <SkeletonAllUsersList /> : <UserCard item={item} navigation={navigation} />}
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.column}
      />
    </View>
  )
};

UsersList.propTypes = {
  data: PropTypes.array,
  navigation: PropTypes.object,
  loading: PropTypes.bool,
};

export default UsersList;