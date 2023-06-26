import PropTypes from 'prop-types';
import {FlatList, Text, View} from 'react-native';
import Warning from '../../components/Warning/Warning';
import ContentItemList from './ContentItemList';
import styles from './style';
import {memo} from 'react';

const OutletList = ({data}) => {
  return (
    <View style={styles.outletContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Outlet</Text>
      </View>
      <View style={styles.itemListContainer}>
        <FlatList
          data={data}
          ListEmptyComponent={<Warning />}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <ContentItemList item={item} index={index} />
          )}
        />
      </View>
    </View>
  );
};

OutletList.propTypes = {
  data: PropTypes.array,
};

export default memo(OutletList);
