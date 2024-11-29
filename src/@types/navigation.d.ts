import { MealDto } from '@storage/meal/meal-dto';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      numbers: undefined;
      home: undefined;
      'new-meal': undefined;
      'edit-meal': { id: string };
      celebrate: { diet: boolean };
      'meal-details': { id: string };
    }
  }
}
