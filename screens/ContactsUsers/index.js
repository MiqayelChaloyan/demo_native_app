/* eslint-disable react/no-unstable-nested-components */
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import SkeletonMessagesList from '../../components/Skeleton/SkeletonMessagesList';
import Warning from '../../components/Warning/Warning';
import User from './User';
import Search from '../../components/Search/Search';
import DeleteIcon from '../../assets/icons/Delete.svg';
import {getDataUsersFromFile} from '../../utils/ApiUtils';
import SwipeableFlatList from 'react-native-swipeable-list';
import {theme} from '../../assets/theme/theme';
import PermissionModal from '../../components/Permission/Modal';
import UsersMessagesModal from '../../components/Permission/children/remove';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import styles from './style';

const ContactsUsers = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState(initialData);
  const [isModalVisible, setModalVisible] = useState(false);
  const [deleteFriendsList, setDeleteFriendsList] = useState('');
  const [removeId, setRemoveId] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const result = getDataUsersFromFile();
      const friends = result.filter(item => item.friend);
      setInitialData(friends);
    };
    fetchData();
  }, []);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const QuickActions = qaItem => {
    return (
      <TouchableOpacity
        onPress={() => deleteItem(qaItem.id)}
        style={styles.buttonReset}>
        <View style={styles.qaContainer}>
          <View style={styles.button}>
            <View style={styles.buttonText}>
              <DeleteIcon
                width={horizontalScale(35)}
                height={verticalScale(35)}
                fill={theme.colors.danger}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    setModalVisible(false);
    if (deleteFriendsList === 'YES') {
      const friends = initialData.filter(item => item.id !== removeId);
      setInitialData(friends);
    }
    setModalVisible(false);
    return () => setDeleteFriendsList('');
  }, [deleteFriendsList, initialData]);

  const deleteItem = qaItem => {
    setModalVisible(true);
    setRemoveId(qaItem);
  };

  return (
    <View style={styles.listUsersRoot}>
      <TouchableOpacity onPress={() => navigation.navigate('Users')}>
        <Text style={styles.navigate}>Back</Text>
      </TouchableOpacity>
      <View style={styles.root}>
        <Search list={initialData} setState={setData} keyword="fullName" />
      </View>
      <View style={styles.listUsers}>
        <SwipeableFlatList
          keyExtractor={item => item.id}
          ListEmptyComponent={<Warning />}
          data={data}
          renderItem={({item}) => {
            return loading ? (
              <View style={styles.skeleton}>
                <SkeletonMessagesList />
              </View>
            ) : (
              <User userItem={item} navigation={navigation} />
            );
          }}
          maxSwipeDistance={70}
          leftOpenValue={20}
          renderQuickActions={({_, item}) => QuickActions(item)}
          contentContainerStyle={styles.contentContainerStyle}
          shouldBounceOnMount={true}
        />
      </View>
      <PermissionModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}>
        <UsersMessagesModal setDeleteFriendsList={setDeleteFriendsList} />
      </PermissionModal>
    </View>
  );
};

ContactsUsers.propTypes = {
  navigation: PropTypes.object,
};

export default ContactsUsers;
