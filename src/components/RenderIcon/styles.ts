import { VariantProps } from '@components/Button/styles';
import { Pencil, Plus, Trash } from 'phosphor-react-native';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

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

export const PlusSign = styled(Plus).attrs<VariantProps>(
  ({ theme, variant }) => ({
    size: 18,
    color: getColor(theme, variant, 'text'),
  })
)``;

export const EditPencil = styled(Pencil).attrs<VariantProps>(
  ({ theme, variant }) => ({
    size: 18,
    color: getColor(theme, variant, 'text'),
  })
)``;

export const TrashCan = styled(Trash).attrs<VariantProps>(
  ({ theme, variant }) => ({
    size: 18,
    color: getColor(theme, variant, 'text'),
  })
)``;
