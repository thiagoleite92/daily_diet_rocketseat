import { Text, TouchableOpacity, View } from 'react-native';
import { ButtonContainer, TextContainer, PlusSign } from './styles';

type ButtonProps = {
  text?: string;
};

export function Button({ text }: ButtonProps) {
  return (
    <ButtonContainer>
      <TextContainer>
        <PlusSign />
      </TextContainer>
      <TextContainer>{text}</TextContainer>
    </ButtonContainer>
  );
}
