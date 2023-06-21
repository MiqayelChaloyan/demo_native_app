import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {theme} from '../../assets/theme/theme';
import StarIcon from '../../assets/icons/Star.svg';
import styles from './style';

const EvaluationModal = ({ isModalVisible, navigation, handleClose, onAskMeLaterClicked }) => {
  const starsCount = [1, 2, 3, 4, 5];
  const [activeStarsColor, setActiveStarsColor] = useState(false);
  const [numberOfStarsPlaced, setStarsPlaced] = useState(0);

  const changeColorOfStars = count => {
    setActiveStarsColor(true);
    setStarsPlaced(count);
  };

  useEffect(() => {
    setStarsPlaced(0);
  }, [handleClose, onAskMeLaterClicked]);

  return (
    <Modal
      isVisible={isModalVisible}
      coverScreen
      transparent
      backdropColor={theme.colors.primary_green}
      backdropOpacity={2}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      swipeDirection={['down', 'up', 'right', 'left']}
      onSwipeComplete={handleClose}
      hideModal={handleClose}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.appreciative}>
            <FlatList
              data={starsCount}
              contentContainerStyle={styles.starsContainer}
              renderItem={({ item: starPlacedNumber }) => (
                <TouchableOpacity
                  onPress={() => changeColorOfStars(starPlacedNumber)}>
                  <StarIcon
                    fill={
                      activeStarsColor &&
                        starPlacedNumber <= numberOfStarsPlaced
                        ? theme.colors.orange
                        : theme.colors.cool_gray
                    }
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(_, index) => index}
            />
          </View>
          <Text style={styles.title}>Rate our app</Text>
          <Text style={styles.content}>
            Consequat velit qui adipisicing sunt do reprehenderit ad laborum
            tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate
            duis sit esse aliqua esse ex dolore esse. Consequat velit qui
            adipisicing sunt.
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Options');
              return handleClose();
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>I love it!</Text>
            </View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={handleClose}>
              <Text style={styles.text}>Don’t like the app? Let us know.</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={onAskMeLaterClicked}>
              <Text style={styles.text}>Ask me later.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

EvaluationModal.propTypes = {
  visible: PropTypes.bool,
  navigation: PropTypes.object,
  onClose: PropTypes.func,
  onAskMeLaterClicked: PropTypes.func,
};

export default EvaluationModal;
