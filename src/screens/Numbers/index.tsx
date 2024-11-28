import {
  Container,
  InfoContainer,
  NumberInfo,
  NumbersContainer,
  NumberTitle,
  Title,
} from './styles';
import { useRoute } from '@react-navigation/native';
import { Summary } from '@components/Summary';
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { getMealsInfo, SummaryInfo } from '@storage/meal/get-meals-info';
import { useTheme } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';

export function Numbers() {
  const { COLORS } = useTheme();

  const [summaryInfo, setSummaryInfo] = useState<SummaryInfo>({
    mealsTypeTotal: { diet: 0, notDiet: 0 },
    registeredMeals: 0,
    currentBestScore: 0,
  });

  const fetchData = async () => {
    const response = await getMealsInfo();

    setSummaryInfo(response);
  };

  const ratio =
    (summaryInfo?.mealsTypeTotal?.diet / summaryInfo?.registeredMeals) * 100;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NumbersContainer>
      <Summary />
      <Container style={{ borderTopRightRadius: 16, borderTopLeftRadius: 16 }}>
        <Title>Estatísticas Gerais</Title>
        <View style={{ gap: 8 }}>
          <InfoContainer>
            <NumberTitle>{summaryInfo?.currentBestScore}</NumberTitle>
            <NumberInfo>Melhor sequência de pratos dentro da dieta</NumberInfo>
          </InfoContainer>
          <InfoContainer>
            <NumberTitle>{summaryInfo?.registeredMeals}</NumberTitle>
            <NumberInfo>Refeições registradas</NumberInfo>
          </InfoContainer>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <InfoContainer style={{ backgroundColor: COLORS.GREEN_LIGHT }}>
              <NumberTitle>{summaryInfo?.mealsTypeTotal?.diet}</NumberTitle>
              <NumberInfo>Refeições dentro da dieta</NumberInfo>
            </InfoContainer>
            <InfoContainer style={{ backgroundColor: COLORS.RED_LIGHT }}>
              <NumberTitle>{summaryInfo?.mealsTypeTotal?.notDiet}</NumberTitle>
              <NumberInfo>Refeições fora da dieta</NumberInfo>
            </InfoContainer>
          </View>
        </View>
      </Container>
      <StatusBar backgroundColor={ratio >= 80 ? COLORS.GREEN : COLORS.RED} />
    </NumbersContainer>
  );
}
