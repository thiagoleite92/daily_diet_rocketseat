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
import { useState } from 'react';
import { SectionList, Text, View } from 'react-native';
import { DietItem } from '@components/DietItem';
import { DietSection } from '@components/DietSection';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const { navigate } = useNavigation();

  // const [meals, setMeals] = useState<MealType[]>();

  const DATA = [
    {
      date: new Date().toISOString(),
      data: [
        { meal: 'ovos', time: new Date().getTime(), diet: true },
        { meal: 'ovos', time: new Date().getTime(), diet: false },
      ],
    },
    {
      date: new Date().toISOString(),
      data: [{ meal: 'ovos', time: new Date().getTime(), diet: true }],
    },
  ];

  const handleNewMealPage = () => {
    navigate('new-meal');
  };

  return (
    <HomeContainer>
      <HeaderContainer>
        <Header showBackButton={false} />
        <Summary meta={80} />
      </HeaderContainer>
      <NewMealContainer>
        <ButtonTitle>Refeições</ButtonTitle>
        <Button text="Nova refeição" onPress={handleNewMealPage} />
      </NewMealContainer>

      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.meal + item.time}
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
