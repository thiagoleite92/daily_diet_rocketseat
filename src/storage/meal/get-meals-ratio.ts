import { getMealsInfo } from './get-meals-info';

export const getMealsRatio = async (): Promise<{ ratio: number }> => {
  const { mealsTypeTotal, registeredMeals } = await getMealsInfo();

  const ratio = (mealsTypeTotal.diet / registeredMeals) * 100;

  return {
    ratio,
  };
};
