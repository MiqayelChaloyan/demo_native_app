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
import styles from './style';

const MessagesUsers = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [state, setState] = useState(data);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAnswer, setAnswer] = useState('');
  const [removeId, setRemoveId] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const result = getDataUsersFromFile();
      const friends = result.filter(item => item.friend);
      setData(friends);
    };
    fetchData();
  }, []);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // eslint-disable-next-line react/no-unstable-nested-components
  const QuickActions = qaItem => {
    return (
      <View style={styles.qaContainer}>
        <View style={styles.button}>
          <Pressable onPress={() => deleteItem(qaItem.id)}>
            <View style={styles.buttonText}>
              <DeleteIcon width={30} height={30} fill={theme.colors.danger} />
            </View>
          </Pressable>
        </View>
      </View>
    );
  };

  useEffect(() => {
    setModalVisible(false);
    if (isAnswer === 'YES') {
      console.log(removeId);
      const friends = data.filter(item => item.id !== removeId);
      setData(friends);
    }
    setModalVisible(false);
    return () => setAnswer('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnswer]);

  const deleteItem = qaItem => {
    setModalVisible(true);
    setRemoveId(qaItem);
  };

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <View style={styles.listUsersRoot}>
      <TouchableOpacity onPress={() => navigation.navigate('Users')}>
        <Text style={styles.navigate}>Back</Text>
      </TouchableOpacity>
      <View style={styles.root}>
        <Search list={data} setState={setState} keyword="fullName" />
      </View>
      <View style={styles.listUsers}>
        <SwipeableFlatList
          keyExtractor={item => item.id}
          ListEmptyComponent={<Warning />}
          data={state}
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
          ItemSeparatorComponent={renderItemSeparator}
        />
      </View>
      <PermissionModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}>
        <UsersMessagesModal setAnswer={setAnswer} />
      </PermissionModal>
    </View>
  );
};

MessagesUsers.propTypes = {
  navigation: PropTypes.object,
};

export default MessagesUsers;
