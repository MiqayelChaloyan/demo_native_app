import {Text, View} from 'react-native';
import styles from '../../screens/MarketScreen/style';
import {memo} from 'react';

const Warning = () => {
  return (
    <View style={styles.warning}>
      <Text style={styles.warningText}>
        Nothing was found in your search results.
      </Text>
    </View>
  );
};
export default memo(Warning);
