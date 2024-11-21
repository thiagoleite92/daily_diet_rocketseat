import { Header } from '@components/Header';
import {
  ButtonTitle,
  Container,
  HeaderContainer,
  NewMealContainer,
} from './styles';
import { Summary } from '@components/Summary';
import { Button } from '@components/Button';
import { MealType } from 'src/types/MealType';
import { useState } from 'react';
import { SectionList, Text, View } from 'react-native';
import { DietItem } from '@components/DietItem';
import { DietSection } from '@components/DietSection';

export function Home() {
  // const [meals, setMeals] = useState<MealType[]>();

  const DATA = [
    {
      date: new Date().toISOString(),
      data: [{ meal: 'ovos', time: new Date().getTime(), diet: true }],
    },
  ];

  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton={false} />
        <Summary meta={80} />
      </HeaderContainer>
      <NewMealContainer>
        <ButtonTitle>Refeições</ButtonTitle>
        <Button text="Nova refeição" />
      </NewMealContainer>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.meal + item.time}
        renderItem={({ item: { diet, meal, time } }) => (
          <DietItem time={time} diet={diet} meal={meal} />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <DietSection title={date} />
        )}
      />
    </Container>
  );
}
