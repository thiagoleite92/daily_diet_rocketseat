import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDates } from '@storage/date/get-dates';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealType } from 'src/types/MealType';
import { MealDto } from './meal-dto';

export const getMappedMeals = async (): Promise<MealType[]> => {
  try {
    const dates = await getDates();

    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const storedMeals: MealDto[] = storage ? JSON.parse(storage) : [];

    const mappedMeals = dates.map((date: string) => {
      const meals = storedMeals.filter((m: MealDto) => m.date === date);
      return { date, data: meals };
    });

    return mappedMeals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
};
