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
  time: number;
  diet: boolean;
};
export function DietItem({ diet, meal, time }: DietItemProps) {
  const hoursAndMinutesFormated = FormatDate.formatHoursAndMinutes(
    new Date(time)
  );

  return (
    <Item>
      <TimeContainer>
        <TimeText>{hoursAndMinutesFormated}</TimeText>
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
