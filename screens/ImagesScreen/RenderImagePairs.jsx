import PropTypes from 'prop-types';
import {useContext, useMemo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {GlobalDataContext} from '../../contexts/context';
import CheckIcon from '../../assets/icons/Check.svg';
import {theme} from '../../assets/theme/theme';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import styles from './style';

const Row = ({children}) => <View style={styles.row}>{children}</View>;

const Col = ({numRows, children}) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const RenderImagePairs = changeProfileImage => {
  const {arrayImages} = useContext(GlobalDataContext);
  const maximum = 4;
  const minimum = 1;

  const imagePairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < arrayImages.length; i += 2) {
      const length1 =
        Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      const length2 = 5 - length1;
      const pair = (
        <Row key={i}>
          <Col numRows={length1}>
            <TouchableOpacity
              onPress={() => changeProfileImage(arrayImages[i].id)}>
              <Image source={{uri: arrayImages[i].url}} style={styles.image} />
              {arrayImages[i].isChecked && (
                <View style={styles.checked}>
                  <View style={styles.checkedBox}>
                    <CheckIcon
                      width={horizontalScale(21)}
                      height={verticalScale(21)}
                    />
                  </View>
                </View>
              )}
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
                {arrayImages[i + 1].isChecked && (
                  <View style={styles.checked}>
                    <View style={styles.checkedBox}>
                      <CheckIcon
                        width={horizontalScale(21)}
                        height={verticalScale(21)}
                      />
                    </View>
                  </View>
                )}
              </TouchableOpacity>
            </Col>
          )}
        </Row>
      );
      pairs.push(pair);
    }
    return pairs;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayImages]);

  return imagePairs;
};

RenderImagePairs.propTypes = {
  changeProfileImage: PropTypes.func,
};

export default RenderImagePairs;
