import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Avatar,
  Logo,
  HeaderContainer,
  Container,
  LeftArrow,
  TitleContainer,
  TitleText,
} from './styles';
import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png';
import { TouchableOpacity } from 'react-native';
import { MealDto } from '@storage/meal/meal-dto';

type HeaderProps = {
  showBackButton: boolean;
  headerTitle?: string;
  diet?: boolean;
};

export function Header({ showBackButton, headerTitle, diet }: HeaderProps) {
  const { navigate } = useNavigation();
  const { name } = useRoute() as { name: 'new-meal' | 'meal-details' };

  // console.log(params

  const handleNavigateToHome = () => {
    navigate('home');
  };

  return (
    <HeaderContainer routeName={name} diet={diet!}>
      <Container>
        {!showBackButton && <Logo source={logoImg} height={37} width={82} />}
        {!showBackButton && (
          <Avatar source={avatarImg} height={40} width={40} />
        )}
        {showBackButton && (
          <TitleContainer>
            <TouchableOpacity
              onPress={handleNavigateToHome}
              style={{ marginLeft: 27 }}
            >
              <LeftArrow />
            </TouchableOpacity>
            {headerTitle && <TitleText>{headerTitle}</TitleText>}
          </TitleContainer>
        )}
      </Container>
    </HeaderContainer>
  );
}
