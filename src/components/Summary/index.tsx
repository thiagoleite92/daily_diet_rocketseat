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
import { getMealsRatio } from '@storage/meal/get-meals-ratio';
import { useEffect, useState } from 'react';

export function Summary() {
  const { navigate } = useNavigation();
  const { name } = useRoute();

  const [ratio, setRatio] = useState(0);

  const handlewViewNumbers = () => {
    navigate('numbers');
  };

  const handleGoHome = () => {
    navigate('home');
  };

  const fetchSummary = async () => {
    const { ratio } = await getMealsRatio();

    setRatio(ratio);
  };

  useEffect(() => {
    fetchSummary();
  });

  return (
    <SummaryContainer ratio={ratio} routeName={name}>
      {name === 'numbers' && (
        <TouchableOpacity
          style={{ alignSelf: 'flex-start' }}
          onPress={() => handleGoHome()}
        >
          <LeftArrow ratio={ratio} />
        </TouchableOpacity>
      )}

      {name === 'home' && (
        <TouchableOpacity
          style={{ alignSelf: 'flex-end' }}
          onPress={() => handlewViewNumbers()}
        >
          <UpRightArrow ratio={ratio} />
        </TouchableOpacity>
      )}
      <Index>{ratio?.toFixed(2)}%</Index>
      <SubIndex>das refeições dentro da dieta</SubIndex>
    </SummaryContainer>
  );
}
