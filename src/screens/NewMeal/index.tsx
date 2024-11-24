import { useCallback, useState } from 'react';
import { Alert, GestureResponderEvent, Text } from 'react-native';
import { useTheme } from 'styled-components/native';
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
import { FormatDate } from 'src/util/FormatDate';
import { Button } from '@components/Button';
import { StatusBar } from 'expo-status-bar';

export function NewMeal() {
  const { COLORS } = useTheme();
  const currentDate = FormatDate.getCurrentDate();

  const [meal, setMeal] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [mealType, setMealType] = useState<boolean | null>(null);

  const handleMealType = (isDiet: boolean) => {
    setMealType(isDiet);
  };

  const handleNewMeal = useCallback(() => {
    if (!meal || !date || !time || !mealDescription || mealType === null) {
      return Alert.alert('Verifique os campos e opção de refeição');
    }

    console.log(1);
  }, [mealType, meal, date, time, mealDescription]);

  return (
    <NewMealContainer>
      <Header showBackButton headerTitle="Nova Refeição" />
      <Form>
        <Input
          label="Nome"
          maxLength={50}
          placeholder="Ex: Salada de Frutas"
          onChangeText={setMeal}
        />
        <Input
          label="Descrição"
          multiline
          numberOfLines={8}
          maxLength={130}
          placeholder="Mix de salada de frutas sem leite condensado"
          onChangeText={setMealDescription}
        />
        <DateContainer>
          <MaskInput
            label="Data"
            maxLength={50}
            placeholder={currentDate}
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
