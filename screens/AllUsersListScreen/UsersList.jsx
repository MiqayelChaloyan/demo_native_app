import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import UserCard from './UserCard';
import SkeletonAllUsersList from '../../components/Skeleton/SkeletonAllUsersList';
import Warning from '../../components/Warning/Warning';
import styles from './style';

const UsersList = ({data, navigation, emptyDataMessage}) => {
  const [isLoaded, setIsLoaded] = useState(true);

  const loadedData = () => {
    const timer = setTimeout(() => setIsLoaded(false), 2500);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    loadedData();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.col}>
      {isLoaded ? (
        <SkeletonAllUsersList />
      ) : (
        <UserCard item={item} navigation={navigation} />
      )}
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        ListEmptyComponent={<Warning emptyDataMessage={emptyDataMessage} />}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.column}
      />
    </View>
  );
};

UsersList.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  emptyDataMessage: PropTypes.string,
};

export default React.memo(UsersList);
