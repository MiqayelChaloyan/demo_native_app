import {useContext} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {GlobalDataContext} from '../../Data/context';
import styles from './style';

const Row = ({children}) => <View style={styles.row}>{children}</View>;

const Col = ({numRows, children}) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const RenderImagePairs = navigation => {
  const {arrayImages, setImageUrl} = useContext(GlobalDataContext);
  const maximum = 4;
  const minimum = 1;
  const imagePairs = [];

  const changeProfileImage = id => {
    const result = arrayImages.filter(item => item.id === id);
    setImageUrl(result[0].url);
    return navigation.navigate('Profile');
  };

  for (let i = 0; i < arrayImages.length; i += 2) {
    const length1 =
      Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    const length2 = 5 - length1;
    const imagePair = (
      <Row key={i}>
        <Col numRows={length1}>
          <TouchableOpacity
            onPress={() => changeProfileImage(arrayImages[i].id)}>
            <Image source={{uri: arrayImages[i].url}} style={styles.image} />
          </TouchableOpacity>
        </Col>
        {arrayImages[i + 1] && (
          <Col numRows={length2}>
            <TouchableOpacity
              onPress={() => changeProfileImage(arrayImages[i + 1].id)}>
              <Image
                source={{uri: arrayImages[i + 1].url}}
                style={styles.image}
              />
            </TouchableOpacity>
          </Col>
        )}
      </Row>
    );
    imagePairs.push(imagePair);
  }

  return imagePairs;
};

export default RenderImagePairs;
