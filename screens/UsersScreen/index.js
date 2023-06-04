import { Image, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import ChatIcon from '../../assets/icons/Chat.svg';
import RenderImagePairs from './RenderImagePairs';
import { getDataUsersFromFile } from '../../utils/ApiUtils';
import { theme } from '../../assets/theme/theme';
import { GlobalDataContext } from '../../contexts/context';
import styles from './style';


const UsersScreen = ({ navigation }) => {
    const { imageUrl } = useContext(GlobalDataContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDataUsersFromFile();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <View style={styles.root}>
            <View style={styles.header}>
                <View>
                    <Image style={styles.userImage} source={
                        imageUrl
                            ? { uri: imageUrl }
                            : require('../../assets/images/Profile.png')
                    } />
                </View>
                <TextInput
                    name="search"
                    placeholder="Search"
                    placeholderTextColor={theme.colors.dark_gray}
                    style={styles.input}
                    variant="outlined"
                    // onChangeText={value => setSearchItemValue(value)}
                    // value={searchItemValue}
                    keyboardType="web-search"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Messages')} style={styles.messages}>
                    <ChatIcon
                        width={25}
                        height={25}
                        fill={theme.colors.dark_gray}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView>
                {data.length > 0 && RenderImagePairs(data, navigation)}
            </ScrollView>
        </View>
    );
};

export default UsersScreen;
