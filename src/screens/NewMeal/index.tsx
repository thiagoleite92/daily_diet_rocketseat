import { useCallback, useState } from 'react';
import { Alert, Text } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';

export function NewMeal() {
  const { navigate } = useNavigation();
  const { COLORS } = useTheme();
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
    if (
      !meal ||
      meal?.trim()?.length < 3 ||
      !date ||
      date.trim()?.length < 9 ||
      !time ||
      time.trim()?.length < 5 ||
      !mealDescription ||
      mealDescription.trim()?.length < 4 ||
      mealType === null
    ) {
      console.log('erro');
      return Alert.alert('Verifique os campos e opção de refeição');
    }

    const mealData: MealDto = {
      meal,
      time,
      date,
      diet: mealType,
      description: mealDescription,
      id: uid.rnd(),
    };

    await saveMeal(mealData);

    setMeal('');
    setMealDescription('');
    setTime('');
    setDate('');
    setMealType(null);

    navigate('celebrate', { diet: mealType });
  }, [mealType, meal, date, time, mealDescription]);

  return (
    <NewMealContainer>
      <Header showBackButton headerTitle="Nova Refeição" />
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
          text="Cadastrar Refeição"
          showIcon={false}
          onPress={handleNewMeal}
        />
      </Form>
      <StatusBar style="auto" backgroundColor={COLORS.GRAY_500} />
    </NewMealContainer>
  );
}
