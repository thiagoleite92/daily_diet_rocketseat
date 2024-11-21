import { Text } from 'react-native';
import {
  Index,
  LeftArrow,
  SubIndex,
  SummaryContainer,
  UpRightArrow,
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';

type SummaryProps = {
  meta: number;
};
export function Summary({ meta }: SummaryProps) {
  const { navigate } = useNavigation();

  const { name } = useRoute();

  const handlewViewNumbers = () => {
    navigate('numbers');
  };

  const handleGoHome = () => {
    navigate('home');
  };

  return (
    <SummaryContainer meta={meta} routeName={name}>
      {name === 'numbers' && (
        <TouchableOpacity
          style={{ alignSelf: 'flex-start' }}
          onPress={() => handleGoHome()}
        >
          <LeftArrow />
        </TouchableOpacity>
      )}

      {name === 'home' && (
        <TouchableOpacity
          style={{ alignSelf: 'flex-end' }}
          onPress={() => handlewViewNumbers()}
        >
          <UpRightArrow />
        </TouchableOpacity>
      )}
      <Index>90,86%</Index>
      <SubIndex>das refeições dentro da dieta</SubIndex>
    </SummaryContainer>
  );
}
