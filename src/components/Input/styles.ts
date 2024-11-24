import { TextInput } from 'react-native';

import styled, { css } from 'styled-components/native';

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.COLORS.GRAY_200};
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
`;

export const InputField = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 200px;
  border-radius: 6px;
  padding: 16px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GRAY_200};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    border: 1px solid ${theme.COLORS.GRAY_500};
  `}
`;
