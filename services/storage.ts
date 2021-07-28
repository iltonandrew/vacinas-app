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
    const userArray = await AsyncStorage.getItem('@users');
    return userArray != null ? JSON.parse(userArray) : null;
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

export const storeUsersArray = async (userToBeStored: DataType) => {
  let array: Array<DataType> = [];
  try {
    const userArray = await AsyncStorage.getItem('@users');
    !userArray ? (array = []) : (array = JSON.parse(userArray));
    array.push(userToBeStored);
    await AsyncStorage.setItem('@users', JSON.stringify(array)).then(() => {
      console.log('User stored, now array is:', array);
    });

    return array;
  } catch (e) {
    console.error(e);
  }
};
