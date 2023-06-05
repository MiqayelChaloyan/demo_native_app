import { Image, Text, TouchableOpacity, View } from 'react-native';
import InfinityIcon from '../../assets/icons/Infinity.svg';
import styles from './style';

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const Col = ({ numRows, children }) => {
    return <View style={styles[`${numRows}col`]}>{children}</View>;
};


const RenderImagePairs = (data, navigation) => {
    const pairs = [];
    for (let i = 0; i < data.length; i += 2) {
        const pair = (
            <Row key={i}>
                <Col numRows={1}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', borderWidth: 1, borderColor: '#5DB075', width: 160, height: 270, borderRadius: 20 }}>
                            <View style={{ position: 'absolute' }} >
                                <Image
                                    style={{ width: 157, height: 60, resizeMode: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                                    source={require('../../assets/images/DefaultBackground.webp')}
                                />
                            </View>
                            <View style={{ borderRadius: 50, marginVertical: 20 }}>
                                <Image
                                    style={{ width: 80, height: 80, borderRadius: 50 }}
                                    source={
                                        data[i].imageUrl
                                            ? { uri: data[i].imageUrl }
                                            :
                                            require('../../assets/images/Profile.png')
                                    }
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 17, fontWeight: 500 }}>{data[i].fullName}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <InfinityIcon
                                    width={20}
                                    height={20}
                                    fill={'gray'}
                                />
                                <Text style={{ marginLeft: 10, fontSize: 11 }}>8 common contacts</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={{ borderWidth: 1, borderColor: '#5DB075', padding: 10, borderRadius: 20, width: 140, textAlign: 'center', marginVertical: 15, color: '#5DB075' }}
                                    onPress={() => {
                                        const userItem = data[i];
                                        navigation.navigate({
                                            name: 'Chat',
                                            params: { userItem },
                                        });
                                    }}>Messages</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Col>
                {data[i + 1] && (
                    <Col numRows={1}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', borderWidth: 1, borderColor: '#5DB075', width: 160, height: 270, borderRadius: 20 }}>
                                <View style={{ position: 'absolute' }} >
                                    <Image
                                        style={{ width: 157, height: 60, resizeMode: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                                        source={require('../../assets/images/DefaultBackground.webp')}
                                    />
                                </View>
                                <View style={{ borderRadius: 50, marginVertical: 20 }}>
                                    <Image
                                        style={{ width: 80, height: 80, borderRadius: 50 }}
                                        source={
                                            data[i + 1].imageUrl
                                                ? { uri: data[i + 1].imageUrl }
                                                :
                                                require('../../assets/images/Profile.png')
                                        }
                                    />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 17, fontWeight: 500 }}>{data[i + 1].fullName}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <InfinityIcon
                                        width={20}
                                        height={20}
                                        fill={'gray'}
                                    />
                                    <Text style={{ marginLeft: 10, fontSize: 11 }}>8 common contacts</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={{ borderWidth: 1, borderColor: '#5DB075', padding: 10, borderRadius: 20, width: 140, textAlign: 'center', marginVertical: 15, color: '#5DB075' }}
                                        onPress={() => {
                                            const userItem = data[i + 1];
                                            navigation.navigate({
                                                name: 'Chat',
                                                params: { userItem },
                                            });
                                        }}
                                    >Messages</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Col>
                )}
            </Row>
        );
        pairs.push(pair);
    }
    return pairs;
}

export default RenderImagePairs;