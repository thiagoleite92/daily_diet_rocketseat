import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealDto } from './meal-dto';
import { deleteDate } from '@storage/date/delete-date';

export const deleteMeal = async (id: string, date: string) => {
  const storageMeals = await AsyncStorage.getItem(MEAL_COLLECTION);

  const storedMeals: MealDto[] = storageMeals ? JSON.parse(storageMeals) : [];

  const mealIndex = storedMeals.findIndex((meal) => meal?.id === id);

  if (mealIndex > -1) {
    storedMeals.splice(mealIndex, 1);

    const mealByDates = storedMeals.filter(
      (meal) => meal?.date === date
    )?.length;

    if (!mealByDates) {
      await deleteDate(date);
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedMeals));
  }
};
