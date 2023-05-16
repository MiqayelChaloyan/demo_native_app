import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const Header = ({screen, navigation, back, continueTo}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(back)}>
          <Text style={styles.headerButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.headerText}>{screen}</Text>
      </View>
      <View style={styles.headerButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(continueTo)}>
          <Text style={styles.headerButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
