import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataType } from './api';

export const storeUser = async (userToBeStored: DataType) => {
  try {
    const storedData = JSON.stringify(userToBeStored);
    await AsyncStorage.setItem('@users', storedData);
    console.log(await AsyncStorage.getItem('@users'));
  } catch (e) {
    console.log(e);
  }
};

export const retrieveUsers = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@users');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
  }
};

export const cleanStore = async () => {
  try {
    await AsyncStorage.setItem('@users', '');
  } catch (e) {
    console.error(e);
  }
};
