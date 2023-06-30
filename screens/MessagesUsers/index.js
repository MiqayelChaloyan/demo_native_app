import {useEffect, useState, memo} from 'react';
import PropTypes from 'prop-types';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import SkeletonMessagesList from '../../components/Skeleton/SkeletonMessagesList';
import Warning from '../../components/Warning/Warning';
import User from './User';
import Search from '../../components/Search/Search';
import DeleteIcon from '../../assets/icons/Delete.svg';
import useDataFromAPI from '../../customHooks/UseDataFromAPI';
import SwipeableFlatList from 'react-native-swipeable-list';
import {theme} from '../../assets/theme/theme';
import PermissionModal from '../../components/Permission/Modal';
import UsersMessagesModal from '../../components/Permission/children/remove';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import styles from './style';
import useDataForUpdate from '../../customHooks/useDataForUpdate';
import useDelayedAction from '../../customHooks/useDelayedAction';

const MessagesUsers = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [deleteFriendsList, setDeleteFriendsList] = useState('');
  const [removeId, setRemoveId] = useState(null);

  const [usersData, setUsersData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const {data, error} = useDataFromAPI('users');

  useDataForUpdate(data, setUsersData, error);

  useDelayedAction(() => setLoading(false), 2500);

  const QuickActions = qaItem => {
    return (
      <View style={styles.qaContainer}>
        <View style={styles.button}>
          <Pressable
            onPress={() => deleteItem(qaItem.id)}
            style={styles.removedContain}>
            <View style={styles.buttonText}>
              <DeleteIcon
                width={horizontalScale(35)}
                height={verticalScale(35)}
                fill={theme.colors.danger}
              />
            </View>
          </Pressable>
        </View>
      </View>
    );
  };

  useEffect(() => {
    setModalVisible(false);
    if (deleteFriendsList === 'YES') {
      const friends = data.filter(item => item.id !== removeId);
      setFilteredData(friends);
    }
    setModalVisible(false);
    return () => setDeleteFriendsList('');
  }, [deleteFriendsList, data]);
  const handleDeleteFriendsList = () => {
    setModalVisible(false);
    if (deleteFriendsList === 'YES') {
      const friends = data.filter(item => item.id !== removeId);
      setFilteredData(friends);
    }
    setModalVisible(false);
  };

  useEffect(() => {
    handleDeleteFriendsList();
    return () => setDeleteFriendsList('');
  }, [deleteFriendsList, data]);
  const deleteItem = qaItem => {
    setModalVisible(true);
    setRemoveId(qaItem);
  };
  return (
    <View style={styles.listUsersRoot}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Users')}>
          <Text style={styles.navigate}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.root}>
        <Search list={data} setState={setFilteredData} keyword="fullName" />
      </View>

      <View style={styles.listUsers}>
        {usersData.length > 0 && (
          <SwipeableFlatList
            keyExtractor={item => item.id}
            ListEmptyComponent={<Warning />}
            data={filteredData}
            renderItem={({item}) => {
              return loading ? (
                <View style={styles.skeleton}>
                  <SkeletonMessagesList />
                </View>
              ) : (
                <User userItem={item} navigation={navigation} />
              );
            }}
            maxSwipeDistance={64}
            leftOpenValue={20}
            renderQuickActions={({_, item}) => QuickActions(item)}
            contentContainerStyle={styles.contentContainerStyle}
            shouldBounceOnMount={true}
          />
        )}
      </View>
      <PermissionModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}>
        <UsersMessagesModal setDeleteFriendsList={setDeleteFriendsList} />
      </PermissionModal>
    </View>
  );
};

MessagesUsers.propTypes = {
  navigation: PropTypes.object,
};

export default memo(MessagesUsers);
