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
import { useTheme } from 'styled-components/native';

export function NewMeal() {
  const { COLORS } = useTheme();

  const currentDate = FormatDate.getCurrentDate();

  const handleNewMeal = () => {
    console.log('new meal');
  };

  return (
    <NewMealContainer>
      <Header showBackButton />
      <Form>
        <Input label="Nome" maxLength={50} placeholder="Ex: Salada de Frutas" />
        <Input
          label="Descrição"
          multiline
          numberOfLines={4}
          maxLength={130}
          placeholder="Mix de salada de frutas sem leite condensado"
        />
        <DateContainer>
          <MaskInput label="Data" maxLength={50} placeholder={currentDate} />
          <MaskInput label="Hora" maxLength={50} placeholder="12:00" />
        </DateContainer>
        <MealTypeContainer>
          <MealType diet={null} onPress={() => console.log('oi')}>
            <DietIcon color={COLORS.GREEN_DARK} style={{ marginRight: 8 }} />
            Sim
          </MealType>
          <MealType diet={null} onPress={() => console.log('oi')}>
            <DietIcon color={COLORS.RED_DARK} style={{ marginRight: 8 }} />
            Não
          </MealType>
        </MealTypeContainer>
        <Button
          variant="PRIMARY"
          text="Cadastrar Refeição"
          showIcon={false}
          onPress={handleNewMeal}
        />
      </Form>
    </NewMealContainer>
  );
}
