import React, {useCallback, useContext, useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useFormik} from 'formik';
import {GlobalDataContext} from '../../contexts/context';
import CustomTextInput from '../../components/CustomInput/CustomTextInput';
import {profileUpdateValidationSchema} from './validation/UpdateValidationForm';
import DataActiveView from '../../components/DataActiveView';
import styles from './style';

const ProfileModificationForm = () => {
    const { userData, setUserData } = useContext(GlobalDataContext);

    const handleSubmit = useCallback(async (data) => {
        const updatedUserData = { ...userData };
      
        if (data.name) {
          updatedUserData.name = data.name;
        }
        if (data.email) {
          updatedUserData.email = data.email;
        }
        if (data.address) {
          updatedUserData.address = data.address;
        }
      
        setUserData(updatedUserData);
      
      }, [userData, setUserData]);
      

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: '',
        },
        validationSchema: profileUpdateValidationSchema,
        onSubmit: handleSubmit,
    });

    const { handleChange, errors, setFieldTouched, touched, isValid } = formik;

    const renderInputField = (name, placeholder, keyboardType, autoCapitalize, autoCorrect) => {
        return (
            <View>
                <Text style={styles.label}>{placeholder}</Text>
                <CustomTextInput
                    name={name}
                    placeholder={placeholder}
                    onChangeText={handleChange(name)}
                    onBlur={() => setFieldTouched(name)}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    secureTextEntry={false}
                    errors={errors[name]}
                    touched={touched[name]}
                />
            </View>
        );
    }

    const saveButtonDisabled = useMemo(() => !isValid, [isValid]);

    return (
        <View>
            {renderInputField('name', 'Name', 'default', 'none', false)}
            {renderInputField('email', 'Email', 'email-address', 'none', false)}
            <DataActiveView item={userData.email} isCreditCard={false}/>
            {renderInputField('address', 'Address', 'default', 'none', false)}
            <DataActiveView item={userData.address} isCreditCard={false}/>
            <TouchableOpacity
                style={styles.saveSetting}
                disabled={saveButtonDisabled}
                onPress={formik.handleSubmit}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(ProfileModificationForm);