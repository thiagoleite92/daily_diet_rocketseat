import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealDto } from './meal-dto';

export const editMeal = async ({
  date,
  description,
  diet,
  id,
  meal,
  time,
}: MealDto) => {
  const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

  const storedMeals: MealDto[] = storage ? JSON.parse(storage) : [];

  const mealIndex = storedMeals.findIndex((meal) => meal.id === id);

  if (mealIndex > -1) {
    storedMeals[mealIndex] = { date, description, diet, id, meal, time };

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedMeals));
  }
};
