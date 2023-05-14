import { View, Text, } from 'react-native';
import styles from './style';


const Message = ({ isLeft, message }) => {

    const isOnLeft = (type) => {
        if (isLeft && type === "messageContainer") {
            return {
                alignSelf: "flex-start",
                backgroundColor: "#E8E8E8",
                borderBottomLeftRadius: 0,
                left: 20
            };
        } else if (isLeft && type === "message") {
            return {
                color: "#000",
            };
        } else {
            return {
                borderBottomRightRadius: 0,
            };
        }
    };

    return (
        <View style={styles.container}>
            <View style={[styles.messageContainer, isOnLeft('messageContainer')]}>
                <View style={styles.messageView}>
                    <Text style={[styles.message, isOnLeft('message')]}>{message}</Text>
                </View>
            </View>
        </View>
    )
}

export default Message;