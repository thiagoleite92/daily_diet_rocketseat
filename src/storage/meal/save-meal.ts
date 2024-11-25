import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealDto } from './meal-dto';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealType } from 'src/types/MealType';
import { findByDate } from '@storage/date/find-by-date';
import { saveDate } from '@storage/date/save-date';

export const saveMeal = async ({
  date,
  description,
  diet,
  id,
  meal,
  time,
}: MealDto) => {
  const findDate = await findByDate(date);

  if (!findDate) {
    await saveDate(date);
  }

  const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

  const meals: MealDto[] = storage ? JSON.parse(storage) : [];
  meals.push({ date, description, diet, id, meal, time });

  await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
};
