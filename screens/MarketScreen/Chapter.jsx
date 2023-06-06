import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import VideoIcon from '../../assets/icons/Video.svg';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';
import MarketItemList from './MarketItemList';
import styles from './style';

const Chapter = ({data, navigation, header}) => {
  return (
    <View>
      <View style={styles.hotDealsContainer}>
        <Text style={styles.hotDealsText}>{header}</Text>
        <TouchableOpacity style={styles.playButton}>
          <VideoIcon
            width={horizontalScale(30)}
            height={verticalScale(30)}
            fill={theme.colors.black}
          />
        </TouchableOpacity>
      </View>
      <MarketItemList data={data} navigation={navigation} />
    </View>
  );
};

Chapter.propTypes = {
  navigation: PropTypes.object,
  data: PropTypes.array,
  header: PropTypes.string,
};

export default Chapter;
