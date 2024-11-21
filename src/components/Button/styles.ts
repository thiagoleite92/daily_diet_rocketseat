import { Plus } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 19px;
  gap: 14px;
`;

export const TextContainer = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const PlusSign = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``;
