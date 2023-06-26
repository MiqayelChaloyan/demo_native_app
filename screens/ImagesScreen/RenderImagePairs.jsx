import PropTypes from 'prop-types';
import {useContext, useMemo, useEffect} from 'react';
import {GlobalDataContext} from '../../contexts/context';
import {useState} from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';
import ImageItem from './ImageItem';


const RenderImagePairs = (changeProfileImage, isModalVisible) => {
  const {arrayImages} = useContext(GlobalDataContext);
  const maximum = 4;
  const minimum = 1;
  const [minimumImageSize, setMinimumImageSize] = useState(1);
  const [maximumImageSize, setMaximumImageSize] = useState(4);

  useEffect(() => {
    const calculateLengths = () => {
      const randomLength1 =
        Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      const randomLength2 = 5 - randomLength1;
      setMinimumImageSize(randomLength1);
      setMaximumImageSize(randomLength2);
    };

    calculateLengths();
  }, [minimumImageSize, maximumImageSize]);

  const imagePairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < arrayImages.length; i += 2) {
      const pair = (
        <Row key={i}>
          <Col numRows={i % 2 === 0 ? minimumImageSize : maximumImageSize}>
            <ImageItem
              elem={arrayImages[i]}
              changeProfileImage={changeProfileImage}
              isModalVisible={isModalVisible}
            />
          </Col>
          {arrayImages[i + 1] && (
            <Col numRows={i % 2 === 0 ? maximumImageSize : minimumImageSize}>
              <ImageItem
                elem={arrayImages[i + 1]}
                changeProfileImage={changeProfileImage}
                isModalVisible={isModalVisible}
              />
            </Col>
          )}
        </Row>
      );
      pairs.push(pair);
    }
    return pairs;
  }, [arrayImages]);

  return imagePairs;
};

RenderImagePairs.propTypes = {
  changeProfileImage: PropTypes.func,
};

export default RenderImagePairs;
