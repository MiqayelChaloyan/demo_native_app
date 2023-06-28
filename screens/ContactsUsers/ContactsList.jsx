import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import SkeletonMessagesList from '../../components/Skeleton/SkeletonMessagesList';
import Warning from '../../components/Warning/Warning';
import User from './User';
import styles from './style';

const ContactsList = ({ filteredData, emptyDataMessage, navigation }) => {
  const [isLoaded, setIsLoaded] = useState(true);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const rednerUserItem = (item) =>
    isLoaded ? (
      <View style={styles.skeleton}>
        <SkeletonMessagesList />
      </View>
    ) : (
      <User userItem={item} navigation={navigation} />
    );

  return (
    <View style={styles.listUsers}>
      <FlatList
        data={filteredData}
        ListEmptyComponent={<Warning emptyDataMessage={emptyDataMessage} />}
        key={item => item.id}
        keyExtractor={item => item.id}
        renderItem={({ item }) => rednerUserItem(item)}
      />
    </View>
  )
}

ContactsList.propTypes = {
  filteredData: PropTypes.array,
  emptyDataMessage: PropTypes.string,
  navigation: PropTypes.object.isRequired,
};

export default React.memo(ContactsList);