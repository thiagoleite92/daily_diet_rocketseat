import { useCallback, useEffect, useState } from 'react';
import { Alert, Platform, Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import ShortUniqueId from 'short-unique-id';
import { Input } from '@components/Input';
import {
  DateContainer,
  DietIcon,
  Form,
  MealType,
  MealTypeContainer,
  NewMealContainer,
} from './styles';
import { Header } from '@components/Header';
import { MaskInput } from '@components/MaskInput';
import { Button } from '@components/Button';
import { StatusBar } from 'expo-status-bar';
import { MealDto } from '@storage/meal/meal-dto';
import { saveMeal } from '@storage/meal/save-meal';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getMealDetails } from '@storage/meal/get-meal-details';
import { editMeal } from '@storage/meal/edit-meal';

export function MealForm() {
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();
  const { navigate } = useNavigation();
  const route = useRoute() as { name: string; params?: { id: string } };
  const uid = new ShortUniqueId({ length: 8 });

  const [meal, setMeal] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [mealType, setMealType] = useState<boolean | null>(null);

  const handleMealType = (isDiet: boolean) => {
    setMealType(isDiet);
  };

  const handleNewMeal = useCallback(async () => {
    const mealData: MealDto = {
      meal,
      time,
      date,
      diet: mealType === null ? !mealType : mealType,
      description: mealDescription,
      id: route?.params?.id ?? uid.rnd(),
    };

    if (!route?.params?.id) {
      await saveMeal(mealData);
      navigate('celebrate', { diet: mealType === null ? !mealType : mealType });
      return;
    }

    await editMeal(mealData);

    setMeal('');
    setMealDescription('');
    setTime('');
    setDate('');
    setMealType(null);

    navigate('home');
  }, [mealType, meal, date, time, mealDescription]);

  const fetchMealDetails = useCallback(async () => {
    if (!route?.params?.id) {
      return;
    }

    const response = await getMealDetails(route?.params?.id);

    if (response) {
      setMeal(response.meal);
      setMealDescription(response.description);
      setTime(response.time);
      setDate(response.date);
      setMealType(response.diet);
      return;
    }

    return;
  }, [route?.params?.id]);

  useEffect(() => {
    fetchMealDetails();
  }, [fetchMealDetails]);

  return (
    <NewMealContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar style="auto" backgroundColor={COLORS.GRAY_500} />
      <Header showBackButton id={route?.params?.id} />
      <Form>
        <Input
          label="Refeição"
          maxLength={50}
          placeholder="Ex: Salada de Frutas"
          onChangeText={setMeal}
          value={meal}
        />
        <Input
          label="Descrição"
          multiline
          numberOfLines={8}
          maxLength={130}
          placeholder="Mix de salada de frutas sem leite condensado"
          onChangeText={setMealDescription}
          value={mealDescription}
          style={{ height: 150 }}
        />
        <DateContainer>
          <MaskInput
            label="Data"
            maxLength={50}
            placeholder={'01/01/2022'}
            setFunction={setDate}
            value={date}
          />
          <MaskInput
            label="Hora"
            maxLength={50}
            placeholder="12:00"
            setFunction={setTime}
            value={time}
          />
        </DateContainer>
        <Text
          style={{
            marginBottom: -20,
            marginTop: 40,
            color: COLORS.GRAY_200,
            fontFamily: FONT_FAMILY.BOLD,
            fontSize: FONT_SIZE.MD,
          }}
        >
          Está dentro da dieta?
        </Text>
        <MealTypeContainer>
          <MealType
            diet={mealType ? mealType : null}
            onPress={() => handleMealType(true)}
          >
            <Text>
              <DietIcon color={COLORS.GREEN_DARK} />
            </Text>
            <Text>Sim</Text>
          </MealType>
          <MealType
            diet={!mealType ? mealType : null}
            onPress={() => handleMealType(false)}
          >
            <Text>
              <DietIcon color={COLORS.RED_DARK} />
            </Text>
            <Text>Não</Text>
          </MealType>
        </MealTypeContainer>
        <Button
          variant="PRIMARY"
          text={
            route?.name === 'new-meal'
              ? 'Cadastrar Refeição'
              : 'Salvar Alterações'
          }
          onPress={handleNewMeal}
          icon={{ icon: '' }}
        />
      </Form>
    </NewMealContainer>
  );
}
