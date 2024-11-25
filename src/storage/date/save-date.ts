import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDates } from './get-dates';
import { DATE_COLLECTION } from '@storage/storageConfig';

export const saveDate = async (date: string) => {
  const dates = await getDates();

  if (dates.includes(date)) {
    console.log('data ja existe');
    return;
  }

  await AsyncStorage.setItem(DATE_COLLECTION, JSON.stringify([date, ...dates]));
};
