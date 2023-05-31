import {useContext} from 'react';
import {View} from 'react-native';
import Header from '../../components/Header/Header';
import {GlobalDataContext} from '../../Data/context';
import RenderImagePairs from './RenderImageParis';
import styles from './style';

const ImagesScreen = ({navigation}) => {
  const {arrayImages} = useContext(GlobalDataContext);

  return (
    <View style={styles.images}>
      <View style={styles.container}>
        <Header
          screen={'Images'}
          navigation={navigation}
          back={'Profile'}
          continueTo={'Profile'}
          left={'Back'}
          right={'Next'}
        />
        {arrayImages && (
          <View style={styles.app}>
            {RenderImagePairs(navigation)}
          </View>
        )}
      </View>
    </View>
  );
};

export default ImagesScreen;
