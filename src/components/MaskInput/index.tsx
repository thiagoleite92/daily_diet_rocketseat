import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { MaskInputContainer, Label, MaskInputField } from './styles';
import { useState } from 'react';
import { dateMask, timeMask } from 'src/util/DateInputMasks';

type InputProps = TextInputProps & {
  label: string;
  inputRef?: React.RefObject<TextInput>;
  setFunction: (value: any) => void;
};

export function MaskInput({
  inputRef,
  label,
  setFunction,
  ...rest
}: InputProps) {
  const { COLORS } = useTheme();

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
        onChangeText={(masked) => {
          setFunction(masked);
        }}
        mask={label === 'Hora' ? timeMask : dateMask}
        placeholderTextColor={COLORS.GRAY_300}
        {...rest}
      />
    </MaskInputContainer>
  );
}
