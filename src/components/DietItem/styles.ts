import { Circle } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Item = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  border: ${({ theme }) => `1px solid ${theme.COLORS.GRAY_200}`};
  border-radius: 8px;
  align-items: center;
  padding: 14px 0;
  margin-bottom: 8px;
`;

export const TimeContainer = styled.View`
  padding: 0 12px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-right-width: 1px;
`;

export const TimeText = styled.Text``;

export const MealContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 12px;
`;

export const MealText = styled.Text`
  text-align: center;
`;

type DietIconProps = {
  diet: boolean;
};

export const DietIcon = styled(Circle).attrs<DietIconProps>(
  ({ theme, diet }) => ({
    size: 18,
    color: diet ? theme.COLORS.GREEN : theme.COLORS.RED,
    weight: 'fill',
  })
)``;
