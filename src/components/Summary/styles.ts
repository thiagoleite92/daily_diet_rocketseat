import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

type SummaryContainerProps = {
  meta: number;
  routeName: string;
};

export const SummaryContainer = styled.View<SummaryContainerProps>`
  background-color: ${({ theme, meta }) =>
    meta >= 80 ? theme.COLORS.GREE_LIGHT : theme.COLORS.RED_LIGHT};
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
`;

export const SubIndex = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const UpRightArrow = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_DARK,
}))``;

export const LeftArrow = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_DARK,
}))``;
