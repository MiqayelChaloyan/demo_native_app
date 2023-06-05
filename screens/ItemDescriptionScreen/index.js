import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CartIcon from '../../assets/icons/Cart.svg';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const ItemDescriptionScreen = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.itemDataBox}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: item.imageUri}} />
        </View>
        <View style={styles.headDescContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {item.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => Alert.alert(`${item.title} was added to your cart`)}>
            <CartIcon
              width={horizontalScale(30)}
              height={verticalScale(30)}
              fill={theme.colors.dark_green}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Description</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt
            cillum elit ex ut. Dolore exercitation nulla tempor consequat
            aliquip occaecat. Nisi id ipsum irure aute. Deserunt sit aute irure
            quis nulla eu consequat fugiat Lorem sunt magna et consequat labore.
            Laboris incididunt id Lorem est duis deserunt nisi dolore eiusmod
            culpa exercitation consectetur. Fugiat do aliqua laboris cillum sint
            dolor officia adipisicing excepteur fugiat officia. Cupidatat ut
            elit consequat ea laborum occaecat laborum aute consectetur Lorem
            exercitation. Lorem anim minim officia aliquip commodo deserunt
            mollit. Duis deserunt quis cillum voluptate duis ipsum quis
            incididunt elit excepteur excepteur labore duis cillum. Voluptate
            sint nulla minim eiusmod in nulla. Ea id ad duis esse adipisicing
            culpa ex esse ea dolore consequat. Reprehenderit eu minim veniam
            aliquip do ipsum duis do qui adipisicing aliquip ad occaecat. Enim
            reprehenderit sunt do do. Ex fugiat nisi sit anim culpa nisi. Non
            labore fugiat culpa magna. Commodo esse Lorem ex duis do et do. Est
            laboris cupidatat ad est anim adipisicing sit labore do dolor
            officia. Fugiat consequat in excepteur reprehenderit id aliquip
            voluptate sint enim proident aliquip occaecat quis non. Ad nulla
            aliqua est amet aliqua sint est occaecat amet sunt. Ullamco laborum
            qui sint officia officia ad Lorem culpa minim voluptate occaecat id
            duis esse. Ullamco sunt magna consectetur excepteur. Id cupidatat
            proident ex ad elit laboris. Nulla aute sit occaecat laboris.
            Laboris minim aliquip exercitation elit commodo ipsum et fugiat sit
            anim laborum proident cillum laboris. Et cillum tempor esse sit anim
            et veniam. Tempor magna irure ex ea id fugiat. Ex eu sint tempor
            quis exercitation amet ut deserunt sit fugiat aliquip nostrud nulla.
            Eu sunt laborum elit consectetur tempor sunt dolore in sunt
            reprehenderit voluptate dolore adipisicing. Proident eiusmod
            reprehenderit quis sint exercitation voluptate non labore. Sunt non
            sint in Lorem occaecat dolore tempor ipsum et proident sit Lorem
            ipsum officia.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

ItemDescriptionScreen.propTypes = {
  route: PropTypes.object,
};

export default ItemDescriptionScreen;
