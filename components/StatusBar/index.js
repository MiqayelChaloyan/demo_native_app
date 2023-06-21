import PropTypes from 'prop-types';
import {StatusBar} from 'react-native';
import {theme} from '../../assets/theme/theme';
import {GlobalDataContext} from '../../contexts/context';
import {useContext} from 'react';



const MyStatusBar = ({ children }) => {
    const {isChangeStatusBar} = useContext(GlobalDataContext);

    return (
        <>
            <StatusBar
                barStyle={isChangeStatusBar ? "light-content" : "dark-content"}
                hidden={false}
                backgroundColor={
                    isChangeStatusBar ? theme.colors.primary_green : theme.colors.primary_white
                }
                translucent={false}
            />
            {children}
        </>
    )
}

MyStatusBar.propTypes = {
    nothingData: PropTypes.element,
  };


export default MyStatusBar;