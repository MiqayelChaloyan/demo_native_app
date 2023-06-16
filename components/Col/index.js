import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './style';

const Col = ({numRows, children}) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};
//
Col.propTypes = {
  numRows: PropTypes.number,
  children: PropTypes.object,
};

export default Col;
