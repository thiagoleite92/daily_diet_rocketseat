import { useNavigation, useRoute } from '@react-navigation/native';
import { Avatar, Logo, HeaderContainer, Container, LeftArrow } from './styles';
import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png';
import { TouchableOpacity } from 'react-native';

type HeaderProps = {
  showBackButton: boolean;
};
export function Header({ showBackButton }: HeaderProps) {
  const { navigate } = useNavigation();
  const { name } = useRoute();

  const handleNavigateToHome = () => {
    navigate('home');
  };

  return (
    <HeaderContainer routeName={name}>
      <Container>
        {!showBackButton && <Logo source={logoImg} height={37} width={82} />}
        {!showBackButton && (
          <Avatar source={avatarImg} height={40} width={40} />
        )}
        {showBackButton && (
          <TouchableOpacity
            onPress={handleNavigateToHome}
            style={{ marginLeft: 27 }}
          >
            <LeftArrow />
          </TouchableOpacity>
        )}
      </Container>
    </HeaderContainer>
  );
}
