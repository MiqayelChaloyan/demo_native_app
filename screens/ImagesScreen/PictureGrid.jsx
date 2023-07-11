import PropTypes from 'prop-types';
import React, {useContext, useMemo} from 'react';
import {GlobalDataContext} from '../../contexts/context';
import PictureGridItem from './PictureGridItem';
import {FlatList} from 'react-native';
import styles from './style';

const PictureGrid = ({isModalVisible, setModalVisible, setPhotoId}) => {
  const {arrayImages, setArrayImage} = useContext(GlobalDataContext);

  const changeProfileImage = id => {
    setPhotoId(id);
    const updatedArrayImages = arrayImages.map(item => ({
      ...item,
      isChecked: item.id === id,
    }));
    setModalVisible(true);
    setArrayImage(updatedArrayImages);
  };

  const renderItem = ({ item }) => (
    <PictureGridItem image={item} changeProfileImage={changeProfileImage} isModalVisible={isModalVisible} />
  );

  const keyExtractor = (_, index) => String(index);

  const memoizedRenderItem = useMemo(() => renderItem, [isModalVisible]);

  return (
    <FlatList
      data={arrayImages}
      renderItem={memoizedRenderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
      contentContainerStyle={styles.imageContainer}
    />
  );
};

PictureGrid.propTypes = {
  isModalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
  setPhotoId: PropTypes.func,
};

export default React.memo(PictureGrid);

