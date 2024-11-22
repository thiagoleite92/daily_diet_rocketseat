import { Input } from '@components/Input';
import { DateContainer, Form, NewMealContainer } from './styles';
import { Header } from '@components/Header';
import { MaskInput } from '@components/MaskInput';

export function NewMeal() {
  const dateMask = [
    /\d/,
    /\d/, // Dia: Dois dígitos
    '/', // Separador
    /\d/,
    /\d/, // Mês: Dois dígitos
    '/', // Separador
    /\d/,
    /\d/,
    /\d/,
    /\d/, // Ano: Quatro dígitos
  ];

  const timeMask = [
    /[0-2]/, // Primeira posição da hora: 0 a 2
    /\d/, // Segunda posição da hora: 0 a 9
    ':', // Separador
    /[0-5]/, // Primeira posição dos minutos: 0 a 5
    /\d/, // Segunda posição dos minutos: 0 a 9
  ];

  return (
    <NewMealContainer>
      <Header showBackButton />
      <Form>
        <Input label="Nome" maxLength={50} placeholder="Ex: Salada de Frutas" />
        <Input
          label="Descrição"
          multiline
          numberOfLines={4}
          maxLength={100}
          placeholder="Mix de salada de frutas sem leite condensado"
        />
        <DateContainer>
          <MaskInput
            label="Data"
            maxLength={50}
            placeholder="12/12/12"
            mask={dateMask}
          />
          <MaskInput label="Hora" maxLength={50} mask={timeMask} />
        </DateContainer>
      </Form>
    </NewMealContainer>
  );
}
