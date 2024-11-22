import { css } from 'styled-components';
import styled from 'styled-components/native';

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const HeaderContainer = styled.View``;

export const NewMealContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;
