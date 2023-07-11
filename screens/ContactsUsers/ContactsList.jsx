import {memo, useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import SkeletonMessagesList from '../../components/Skeleton/SkeletonMessagesList';
import Warning from '../../components/Warning/Warning';
import User from './User';
import styles from './style';
import useDelayedAction from '../../customHooks/useDelayedAction';

const ContactsList = ({filteredData, emptyDataMessage, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  useDelayedAction(() => setIsLoading(false), 2500);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const renderUserItem = item =>
    isLoading ? renderSkeletonMessagesList() : renderUser(item);

  const renderUser = useCallback(item => {
    return <User userItem={item} navigation={navigation} />;
  }, []);

  const renderSkeletonMessagesList = useCallback(() => {
    return (
      <View style={styles.skeleton}>
        <SkeletonMessagesList />
      </View>
    );
  }, []);

  return (
    <View style={styles.listUsers}>
      <FlatList
        data={filteredData}
        ListEmptyComponent={<Warning emptyDataMessage={emptyDataMessage} />}
        key={item => item.id}
        keyExtractor={item => item.id}
        renderItem={({item}) => renderUserItem(item)}
      />
    </View>
  );
};

ContactsList.propTypes = {
  filteredData: PropTypes.array.isRequired,
  emptyDataMessage: PropTypes.string,
  navigation: PropTypes.object.isRequired,
};

export default memo(ContactsList);
