import { View, Text, } from 'react-native';
import styles from './style';


const Message = ({ isLeft, message }) => {
    return (
        <View style={styles.container}>
            <View style={[isLeft ? styles.messageContainerisRight : styles.messageContainerisLeft]}>
                <View style={styles.messageView}>
                    <Text style={[isLeft ? styles.messageisRight : styles.messageIsLeft]}>{message}</Text>
                </View>
            </View>
        </View>
    )
}

export default Message;