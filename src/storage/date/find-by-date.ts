import AsyncStorage from '@react-native-async-storage/async-storage';
import { DATE_COLLECTION } from '@storage/storageConfig';

export const findByDate = async (date: string): Promise<string> => {
  const storage = await AsyncStorage.getItem(DATE_COLLECTION);

  const dates = storage ? JSON.parse(storage) : [];

  return dates.find((d: string) => d === date);
};
