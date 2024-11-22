import { Text, TouchableOpacity, View } from 'react-native';
import { ButtonContainer, TextContainer, PlusSign } from './styles';

type ButtonProps = {
  text?: string;
  onPress: () => void;
};

export function Button({ text, onPress }: ButtonProps) {
  return (
    <ButtonContainer onPress={() => onPress()}>
      <TextContainer>
        <PlusSign />
      </TextContainer>
      <TextContainer>{text}</TextContainer>
    </ButtonContainer>
  );
}
