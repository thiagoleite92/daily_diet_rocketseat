import { Text, View } from 'react-native';
import { NewMealContainer } from './styles';
import { Header } from '@components/Header';

export function NewMeal() {
  return (
    <NewMealContainer>
      <Header showBackButton />
      <Text>oi</Text>
    </NewMealContainer>
  );
}
