import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealDto } from './meal-dto';

export type SummaryInfo = {
  registeredMeals: number;
  mealsTypeTotal: { diet: number; notDiet: number };
  currentBestScore: number;
};

export const getMealsInfo = async (): Promise<SummaryInfo> => {
  try {
    let currentBestScore = 0;
    let bestScore = 0;

    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const storedMeals: MealDto[] = storage ? JSON.parse(storage) : [];

    const mealsTypeTotal = storedMeals.reduce(
      (acc, curr) => {
        if (curr['diet']) {
          return { ...acc, diet: acc.diet + 1 };
        } else {
          return { ...acc, notDiet: acc.notDiet + 1 };
        }
      },
      { diet: 0, notDiet: 0 }
    );

    storedMeals.forEach((meal) => {
      if (meal.diet) {
        bestScore += 1;
      } else {
        currentBestScore = Math.max(currentBestScore, bestScore);
        bestScore = 0;
      }
    });

    currentBestScore = Math.max(currentBestScore, bestScore);

    return {
      registeredMeals: storedMeals?.length,
      mealsTypeTotal,
      currentBestScore,
    };
  } catch (error) {
    console.error('Error fetching meals:', error);
    return {
      mealsTypeTotal: { diet: 0, notDiet: 0 },
      registeredMeals: 0,
      currentBestScore: 0,
    };
  }
};
