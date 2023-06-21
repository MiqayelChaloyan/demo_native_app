import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './style';

const Row = ({children}) => <View style={styles.row}>{children}</View>;

Row.propTypes = {
  children: PropTypes.element,
};

export default Row;