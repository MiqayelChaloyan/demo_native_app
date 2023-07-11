import PropTypes from 'prop-types';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Warning from '../../components/Warning/Warning';
import ContentItemList from './ContentItemList';
import {memo} from 'react';
import styles from './style';

const OutletList = ({data, emptyDataMessage}) => {
  return (
    <View style={styles.outletContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Outlet</Text>
      </View>
      <View style={styles.itemListContainer}>
        <FlatList
          data={data}
          ListEmptyComponent={
            <Warning emptyDataMessage={emptyDataMessage} screen="Content" />
          }
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
  data: PropTypes.array.isRequired,
  emptyDataMessage: PropTypes.string,
};

export default memo(OutletList);
