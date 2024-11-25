import { FormatDate } from 'src/util/FormatDate';
import {
  DietIcon,
  Item,
  MealContainer,
  TimeContainer,
  TimeText,
} from './styles';
import { Text } from 'react-native';

type DietItemProps = {
  meal: string;
  time: string;
  diet: boolean;
};
export function DietItem({ diet, meal, time }: DietItemProps) {
  return (
    <Item>
      <TimeContainer>
        <TimeText>{time}</TimeText>
      </TimeContainer>
      <MealContainer>
        <TimeText>{meal}</TimeText>
        <Text style={{ textAlign: 'center' }}>
          <DietIcon diet={diet} />
        </Text>
      </MealContainer>
    </Item>
  );
}
