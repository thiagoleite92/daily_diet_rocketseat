import { Header } from '@components/Header';
import {
  ButtonsContainer,
  DietTag,
  MainContainer,
  MealDateAndTime,
  MealDateContainer,
  MealDescription,
  MealDetailsContainer,
  MealInfoContainer,
  MealName,
  TagText,
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MealDto } from '@storage/meal/meal-dto';
import { DietIcon } from '@screens/MealForm/styles';
import { useTheme } from 'styled-components/native';
import { Button } from '@components/Button';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { getMealDetails } from '@storage/meal/get-meal-details';

type RouteParams = {
  id: string;
};

export function MealDetails() {
  const route = useRoute();
  const { navigate } = useNavigation();
  const { id } = route.params as RouteParams;
  const { COLORS } = useTheme();

  const [mealDetails, setMealDetails] = useState<MealDto | null>();

  const handleEditMealNavigate = () => {
    navigate('edit-meal', { id });
  };

  const fetchMealDetails = useCallback(async () => {
    const mealDetails = await getMealDetails(id);
    setMealDetails(mealDetails);
  }, [id]);

  useEffect(() => {
    fetchMealDetails();
  }, [fetchMealDetails]);

  return (
    <MealDetailsContainer>
      <StatusBar
        backgroundColor={
          mealDetails?.diet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT
        }
      />
      <Header
        showBackButton
        headerTitle="Refeição"
        diet={mealDetails?.diet}
        id={id}
      />
      <MainContainer
        style={{ borderTopRightRadius: 16, borderTopLeftRadius: 16 }}
      >
        <View
          style={{
            flex: 1,
            gap: 24,
          }}
        >
          <MealInfoContainer>
            <MealName>{mealDetails?.meal}</MealName>
            <MealDescription>{mealDetails?.description}</MealDescription>
          </MealInfoContainer>
          <MealDateContainer>
            <MealDateAndTime>Data e Hora</MealDateAndTime>
            <MealDescription>
              {mealDetails?.date} às {mealDetails?.time}
            </MealDescription>
          </MealDateContainer>
          {mealDetails?.diet && (
            <DietTag>
              <DietIcon color={COLORS.GREEN_DARK} />
              <TagText>dentro da dieta</TagText>
            </DietTag>
          )}

          {!mealDetails?.diet && (
            <DietTag>
              <DietIcon color={COLORS.RED_DARK} />
              <TagText>fora da dieta</TagText>
            </DietTag>
          )}
        </View>
        <ButtonsContainer>
          <Button
            text="Editar refeição"
            icon={{ icon: 'edit-pencil' }}
            variant="PRIMARY"
            onPress={() => handleEditMealNavigate()}
          />
          <Button
            text="Excluir"
            icon={{ icon: 'trash-can' }}
            variant="OUTLINE"
          />
        </ButtonsContainer>
      </MainContainer>
    </MealDetailsContainer>
  );
}
