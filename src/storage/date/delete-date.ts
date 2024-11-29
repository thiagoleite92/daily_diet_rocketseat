import AsyncStorage from '@react-native-async-storage/async-storage';
import { DATE_COLLECTION } from '@storage/storageConfig';

export const deleteDate = async (date: string) => {
  const storage = await AsyncStorage.getItem(DATE_COLLECTION);

  const dates = storage ? JSON.parse(storage) : [];

  const dateIndex = dates.indexOf(date);

  if (dateIndex > -1) {
    dates.splice(dateIndex, 1);

    await AsyncStorage.setItem(DATE_COLLECTION, JSON.stringify(dates));
  }
};
