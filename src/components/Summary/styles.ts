import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

type SummaryContainerProps = {
  ratio: number;
  routeName: string;
};

export const SummaryContainer = styled.View<SummaryContainerProps>`
  background-color: ${({ theme, ratio }) =>
    ratio >= 80 ? theme.COLORS.GREEN : theme.COLORS.RED};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 26px 13px 20px;
  gap: 2px;
  height: ${({ theme, routeName }) =>
    routeName === 'numbers' ? '200px' : 'fit-content'};
  border-radius: 8px;
`;

export const Index = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`;

export const SubIndex = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`;

export const UpRightArrow = styled(ArrowUpRight).attrs<{ ratio: number }>(
  ({ theme, ratio }) => ({
    size: 32,
    color: ratio >= 80 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;

export const LeftArrow = styled(ArrowLeft).attrs<{ ratio: number }>(
  ({ theme, ratio }) => ({
    size: 32,
    color: ratio >= 80 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;
