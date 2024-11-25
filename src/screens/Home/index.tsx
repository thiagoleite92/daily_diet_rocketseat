import { Header } from '@components/Header';
import {
  ButtonTitle,
  HeaderContainer,
  HomeContainer,
  NewMealContainer,
} from './styles';
import { Summary } from '@components/Summary';
import { Button } from '@components/Button';
import { MealType } from 'src/types/MealType';
import { useCallback, useEffect, useState } from 'react';
import { SectionList, Text, View } from 'react-native';
import { DietItem } from '@components/DietItem';
import { DietSection } from '@components/DietSection';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getMeals } from '@storage/meal/get-meals';

export function Home() {
  const { navigate } = useNavigation();

  const [meals, setMeals] = useState<MealType[]>([]);

  const handleNewMealPage = () => {
    navigate('new-meal');
  };

  const fetchMeals = async () => {
    const response = await getMeals();
    setMeals(response);
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <HomeContainer>
      <HeaderContainer>
        <Header showBackButton={false} />
        <Summary meta={80} />
      </HeaderContainer>
      <NewMealContainer>
        <ButtonTitle>Refeições</ButtonTitle>
        <Button
          showIcon
          text="Nova refeição"
          onPress={handleNewMealPage}
          variant="PRIMARY"
        />
      </NewMealContainer>

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { time, diet, meal } }) => (
          <DietItem time={time} diet={diet} meal={meal} />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <DietSection title={date} />
        )}
        renderSectionFooter={() => <View style={{ marginBottom: 35 }} />}
      />
    </HomeContainer>
  );
}
