import {
  CelebrateContainer,
  HighLight,
  Image,
  SubTitle,
  Title,
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

import dietImage from '@assets/celebrate.png';
import notDietImage from '@assets/not-celebrate.png';
import { View } from 'react-native';
import { Button } from '@components/Button';

type RouteParams = {
  diet: boolean;
};

export function Celebrate() {
  const route = useRoute();
  const { navigate } = useNavigation();

  const { diet } = route.params as RouteParams;

  const handleGoToHomePage = () => {
    navigate('home');
  };

  return (
    <CelebrateContainer>
      <View>
        <Title diet={diet}>{diet ? 'Continue assim!' : 'Que pena!'}</Title>
        {diet && (
          <>
            <SubTitle>
              Você continua <HighLight>dentro da dieta.</HighLight> Muito bem!
            </SubTitle>
            <Image source={dietImage} height={40} width={40} />
          </>
        )}

        {!diet && (
          <>
            <SubTitle>
              Você <HighLight>saiu da dieta</HighLight> dessa vez, mas continue
              se esforçando e não desista!
              <Image source={notDietImage} height={40} width={40} />
            </SubTitle>
          </>
        )}
      </View>

      <Button
        showIcon={false}
        variant="PRIMARY"
        text="Ir para a página inicial"
        onPress={handleGoToHomePage}
      />
    </CelebrateContainer>
  );
}
