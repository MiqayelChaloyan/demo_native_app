import {useContext} from 'react';
import {Image, View} from 'react-native';
import Header from '../../components/Header/Header';
import {GlobalDataContext} from '../../Data/context';
import styles from './style';

const Row = ({children}) => <View style={styles.row}>{children}</View>;

const Col = ({numRows, children}) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const ImagesScreen = ({navigation}) => {
  const {feedData} = useContext(GlobalDataContext);

  return (
    <View style={styles.images}>
      <View style={styles.container}>
        <Header
          screen={'Images'}
          navigation={navigation}
          back={'Market'}
          continueTo={'Expenses'}
          left={'Back'}
          right={'Next'}
        />
        <View style={styles.app}>
          <Row>
            <Col numRows={1}>
              <Image
                source={{uri: feedData[0].imageUri}}
                style={styles.image}
              />
            </Col>
            <Col numRows={2}>
              <Image
                source={{uri: feedData[0].imageUri}}
                style={styles.image}
              />
            </Col>
          </Row>
        </View>
      </View>
    </View>
  );
};

export default ImagesScreen;
