import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { MaskInputContainer, Label, MaskInputField } from './styles';
import { useState } from 'react';
import { dateMask, timeMask } from 'src/util/DateInputMasks';

type InputProps = TextInputProps & {
  label: string;
  inputRef?: React.RefObject<TextInput>;
};

export function MaskInput({ inputRef, label, ...rest }: InputProps) {
  const { COLORS } = useTheme();

  const [phone, setPhone] = useState('');

  return (
    <MaskInputContainer
      style={[
        label === 'Hora' && { width: 153 },
        label === 'Data' && { width: 153 },
      ]}
    >
      <Label>{label}</Label>
      <MaskInputField
        ref={inputRef}
        value={phone}
        onChangeText={(masked, unmasked) => {
          setPhone(masked); // you can use the unmasked value as well
        }}
        mask={label === 'Hora' ? timeMask : dateMask}
        placeholderTextColor={COLORS.GRAY_300}
        {...rest}
      />
    </MaskInputContainer>
  );
}
