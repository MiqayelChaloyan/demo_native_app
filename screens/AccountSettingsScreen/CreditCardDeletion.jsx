import PropTypes from 'prop-types';
import React, {useContext, useCallback} from 'react';
import {GlobalDataContext} from '../../contexts/context';
import PermissionModal from '../../components/Permission/Modal';
import PaymentModal from '../../components/Permission/children/payment';


const CreditCardDeletion = ({isModalVisible, setModalVisible, id}) => {
  const {creditCardData, setCreditCardData} = useContext(GlobalDataContext);

  const handleRemove = useCallback(() => {
    const result = creditCardData.filter(item => item.id !== id);
    setCreditCardData(result);
    }, [creditCardData, id]);

  return (
    <PermissionModal
      isModalVisible={isModalVisible}
      setModalVisible={setModalVisible}>
      <PaymentModal setModalVisible={setModalVisible} handleRemove={handleRemove} id={id}/>
    </PermissionModal>
  );
};

CreditCardDeletion.propTypes = {
  isModalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
};

export default React.memo(CreditCardDeletion);
