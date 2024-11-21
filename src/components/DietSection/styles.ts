import styled, { css } from 'styled-components/native';

export const SectionContainer = styled.View`
  margin-bottom: 8px;
`;

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
