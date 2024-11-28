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
import { getMappedMeals } from '@storage/meal/get-mapped-meals';
import { StatusBar } from 'expo-status-bar';

export function Home() {
  const { navigate } = useNavigation();

  const [meals, setMeals] = useState<MealType[]>([]);

  const handleNewMealPage = () => {
    navigate('new-meal');
  };

  const fetchMappedMeals = async () => {
    const response = await getMappedMeals();
    setMeals(response);
  };

  useFocusEffect(
    useCallback(() => {
      fetchMappedMeals();
    }, [])
  );

  return (
    <HomeContainer>
      <StatusBar backgroundColor="white" />
      <HeaderContainer>
        <Header showBackButton={false} />
        <Summary />
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
        renderItem={({ item }) => <DietItem {...item} />}
        renderSectionHeader={({ section: { date } }) => (
          <DietSection title={date} />
        )}
        renderSectionFooter={() => <View style={{ marginBottom: 35 }} />}
      />
    </HomeContainer>
  );
}
