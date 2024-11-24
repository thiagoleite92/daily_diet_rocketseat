import { ArrowLeft } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

type HeaderContainerProps = {
  routeName: string;
};

export const HeaderContainer = styled.View<HeaderContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ routeName }) => (routeName === 'new-meal' ? '100px' : '150px')};
  background-color: ${({ routeName, theme }) =>
    routeName === 'new-meal' ? theme.COLORS.GRAY_500 : '#fff'};
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
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export const Avatar = styled.Image<ImagesProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
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
