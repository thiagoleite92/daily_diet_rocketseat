import styled, { css } from 'styled-components/native';

export const NumbersContainer = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const Container = styled.View`
  display: flex;
  align-items: center;
  margin-top: -10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex-direction: column;
  padding-top: 33px;
  padding-left: 24px;
  padding-right: 24px;
  flex: 1;
`;

export const Title = styled.Text`
  padding-left: 24px;
  padding-right: 24px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 24px;
`;

export const InfoContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const NumberTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const NumberInfo = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
