import { Circle } from 'phosphor-react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const NewMealContainer = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const Form = styled.View`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DateContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
`;

export const MealTypeContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

type MealTypeProps = {
  diet: boolean | null;
};

const getColor = (
  theme: DefaultTheme,
  diet: boolean | null,
  type: 'background' | 'border'
) => {
  const colorsByDiet = {
    null: {
      background: theme.COLORS.GRAY_600,
      border: 'none',
    },
    true: {
      background: theme.COLORS.GREEN,
      border: `1px solid ${theme.COLORS.GREEN_DARK}`,
    },
    false: {
      background: theme.COLORS.RED,
      border: `1px solid ${theme.COLORS.RED_DARK}`,
    },
  };

  return colorsByDiet[String(diet) as 'null' | 'true' | 'false'][type];
};

export const MealType = styled.Text<MealTypeProps>`
  flex: 1;
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: center;
  border-radius: 8px;

  ${({ theme, diet }) => css`
    background-color: ${getColor(theme, diet, 'background')};
    border: ${getColor(theme, diet, 'border')};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const DietIcon = styled(Circle).attrs(({ theme, color }) => ({
  size: 8,
  weight: 'fill',
}))``;
