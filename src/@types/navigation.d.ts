import { MealDto } from '@storage/meal/meal-dto';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      numbers: undefined;
      home: undefined;
      'new-meal': undefined;
      celebrate: { diet: boolean };
      'meal-details': { meal: MealDto };
    }
  }
}
