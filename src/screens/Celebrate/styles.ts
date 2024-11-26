import styled from 'styled-components/native';
import { css } from 'styled-components/native';

export const CelebrateContainer = styled.SafeAreaView`
  flex: 1;
  padding-right: 24px;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  gap: 60px;
`;

type TitleProps = {
  diet: boolean;
};

export const Title = styled.Text<TitleProps>`
  ${({ theme, diet }) => css`
    font-size: ${theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${diet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    text-align: center;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
    text-align: center;
  `}
`;

export const HighLight = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    text-align: center;
  `}
`;

export const Image = styled.Image`
  margin-top: 20px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
`;
