import { FormatDate } from 'src/util/FormatDate';
import {
  DietIcon,
  Item,
  MealContainer,
  TimeContainer,
  TimeText,
} from './styles';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MealDto } from '@storage/meal/meal-dto';

type DietItemProps = MealDto;

export function DietItem(props: DietItemProps) {
  const { navigate } = useNavigation();

  const handleMealDetailsNavigate = () => {
    navigate('meal-details', { meal: { ...props } });
  };

  return (
    <Item
      onPress={() => {
        handleMealDetailsNavigate();
      }}
    >
      <TimeContainer>
        <TimeText>{props?.time}</TimeText>
      </TimeContainer>
      <MealContainer>
        <TimeText>{props?.meal}</TimeText>
        <Text style={{ textAlign: 'center' }}>
          <DietIcon diet={props?.diet} />
        </Text>
      </MealContainer>
    </Item>
  );
}
