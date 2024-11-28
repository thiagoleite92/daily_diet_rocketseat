import { Header } from '@components/Header';
import { MealDetailsContainer } from './styles';
import { useRoute } from '@react-navigation/native';
import { MealDto } from '@storage/meal/meal-dto';

type RouteParams = {
  meal: MealDto;
};

export function MealDetails() {
  const route = useRoute();
  const { meal } = route.params as RouteParams;

  return (
    <MealDetailsContainer>
      <Header showBackButton headerTitle="Refeição" diet={meal.diet} />
    </MealDetailsContainer>
  );
}
