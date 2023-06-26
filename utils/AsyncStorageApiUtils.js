import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataStorage = async (key, value) => {
  try {
    const result = JSON.stringify(value);
    await AsyncStorage.setItem(key, result);
    console.log('Data stored successfully!');
  } catch (error) {
    console.log('Error storing data:', error);
  }
};

export const getDataStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const parsedValue = JSON.parse(value);
      return parsedValue;
    }
  } catch (error) {
    console.log('Error retrieving data:', error);
  }
};