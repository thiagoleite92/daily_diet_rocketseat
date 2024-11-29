import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealDto } from './meal-dto';
import { MEAL_COLLECTION } from '@storage/storageConfig';

export const getMealDetails = async (id: string): Promise<MealDto | null> => {
  const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

  const storedMeals: MealDto[] = storage ? JSON.parse(storage) : [];

  return storedMeals.find((meal) => meal?.id === id) ?? null;
};
