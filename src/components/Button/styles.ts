import { Plus } from 'phosphor-react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export type VariantProps = {
  variant: 'PRIMARY' | 'OUTLINE';
};

// Função auxiliar para centralizar as cores
const getColor = (
  theme: DefaultTheme,
  variant: 'PRIMARY' | 'OUTLINE',
  type: 'text' | 'background' | 'border'
) => {
  const colors = {
    PRIMARY: {
      background: theme.COLORS.GRAY_200,
      text: theme.COLORS.WHITE,
      border: undefined,
    },
    OUTLINE: {
      background: theme.COLORS.WHITE,
      text: theme.COLORS.GRAY_200,
      border: theme.COLORS.GRAY_200,
    },
  };

  return colors[variant][type];
};

export const ButtonContainer = styled.TouchableOpacity<VariantProps>`
  display: flex;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 19px;
  gap: 14px;

  ${({ theme, variant }) => css`
    background-color: ${getColor(theme, variant, 'background')};
    ${variant === 'OUTLINE' &&
    css`
      border: 1px solid ${getColor(theme, variant, 'border')};
    `}
  `}
`;

export const TextContainer = styled.Text<VariantProps>`
  ${({ theme, variant }) => css`
    color: ${getColor(theme, variant, 'text')};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const PlusSign = styled(Plus).attrs<VariantProps>(
  ({ theme, variant }) => ({
    size: 18,
    color: getColor(theme, variant, 'text'),
  })
)``;
