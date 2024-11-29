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

export const DeleteModal = styled.Modal`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 48px;
  padding: 24px;
`;

export const DeleteModalContet = styled.View`
  background-color: white;
  padding-right: 24px;
  padding-left: 24px;
  border-radius: 8px;
  padding-top: 40px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const DeleteModalTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`;

export const ButtonsContainerModal = styled.View`
  gap: 24px;
  flex-direction: row;
`;
