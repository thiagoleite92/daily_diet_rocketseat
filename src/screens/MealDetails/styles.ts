import { Circle } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export const MealDetailsContainer = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const MainContainer = styled.View`
  padding: 40px 24px;
  display: flex;
  flex: 1;
  gap: 24px;
`;

export const MealInfoContainer = styled.View`
  gap: 8px;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const MealDateContainer = styled.View`
  gap: 8px;
`;

export const MealDateAndTime = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const DietTag = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 12px;
  padding: 8px;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TagText = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const ButtonsContainer = styled.View`
  gap: 24px;
`;
