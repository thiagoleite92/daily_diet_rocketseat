import { ButtonProps } from 'react-native';
import { IconTypes, RenderICon } from '@components/RenderIcon';
import { ButtonContainer, TextContainer, VariantProps } from './styles';
import { StyleProp } from 'react-native';
import { ViewStyle } from 'react-native';

type Props = ButtonProps & {
  text?: string;
  icon: IconTypes;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>; // Permite receber estilos personalizados
} & VariantProps;

export function Button({
  text,
  onPress = () => {},
  icon,
  variant = 'PRIMARY',
  ...rest
}: Props) {
  return (
    <ButtonContainer onPress={() => onPress()} variant={variant} {...rest}>
      {icon?.icon !== '' && (
        <TextContainer variant={variant}>
          <RenderICon icon={icon?.icon} variant={variant} />
        </TextContainer>
      )}
      <TextContainer variant={variant}>{text}</TextContainer>
    </ButtonContainer>
  );
}
