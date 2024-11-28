import { ArrowLeft } from 'phosphor-react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

type HeaderContainerProps = {
  routeName: 'new-meal' | 'meal-details';
  diet?: boolean;
};

const getColor = (
  theme: DefaultTheme,
  routeName: 'new-meal' | 'meal-details',
  diet?: boolean
) => {
  if (routeName === 'new-meal') {
    return theme.COLORS.GRAY_500;
  }

  return diet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT;
};

export const HeaderContainer = styled.View<HeaderContainerProps>`
  flex-direction: column;
  justify-content: space-between;
  height: ${({ routeName }) => (routeName === 'new-meal' ? '100px' : '150px')};
  background-color: ${({ routeName, theme, diet }) =>
    getColor(theme, routeName, diet)};
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

interface ImagesProps {
  height: number;
  width: number;
}

export const Logo = styled.Image<ImagesProps>`
  width: ${({ width = 50 }) => width}px;
  height: ${({ height = 50 }) => height}px;
`;

export const Avatar = styled.Image<ImagesProps>`
  width: ${({ width = 50 }) => width}px;
  height: ${({ height = 50 }) => height}px;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  gap: 94px;
`;

export const TitleText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`;

export const LeftArrow = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;
