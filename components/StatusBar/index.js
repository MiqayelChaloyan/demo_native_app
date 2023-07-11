import {memo, useContext} from 'react';
import PropTypes from 'prop-types';
import {StatusBar} from 'react-native';
import {theme} from '../../assets/theme/theme';
import {GlobalDataContext} from '../../contexts/context';

const MyStatusBar = ({children}) => {
  const {isChangeStatusBar} = useContext(GlobalDataContext);

  return (
    <>
      <StatusBar
        barStyle={isChangeStatusBar ? 'light-content' : 'dark-content'}
        hidden={false}
        backgroundColor={
          isChangeStatusBar
            ? theme.colors.primary_green
            : theme.colors.primary_white
        }
        translucent={false}
      />
      {children}
    </>
  );
};

MyStatusBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(MyStatusBar);
