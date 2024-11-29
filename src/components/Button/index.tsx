import { IconTypes, RenderICon } from '@components/RenderIcon';
import { ButtonContainer, TextContainer, VariantProps } from './styles';

type ButtonProps = {
  text?: string;
  icon: IconTypes;
  onPress?: () => void;
} & VariantProps;

export function Button({
  text,
  onPress = () => {},
  icon,
  variant = 'PRIMARY',
}: ButtonProps) {
  return (
    <ButtonContainer onPress={() => onPress()} variant={variant}>
      {icon && (
        <TextContainer variant={variant}>
          <RenderICon icon={icon.icon} variant={variant} />
        </TextContainer>
      )}
      <TextContainer variant={variant}>{text}</TextContainer>
    </ButtonContainer>
  );
}
