import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { InputContainer, InputField, Label } from './styles';

type InputProps = TextInputProps & {
  label: string;
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, label, ...rest }: InputProps) {
  const { COLORS } = useTheme();

  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputField
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_300}
        {...rest}
      />
    </InputContainer>
  );
}
