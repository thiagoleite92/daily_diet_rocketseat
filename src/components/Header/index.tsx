import { useNavigation, useRoute } from '@react-navigation/native';
import { Avatar, MainContainer, Logo, NavigateContainer } from './styles';
import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png';
import { Summary } from '@components/Summary';
import { TouchableOpacity } from 'react-native';

type HeaderProps = {
  showBackButton: boolean;
};
export function Header({ showBackButton }: HeaderProps) {
  const { navigate } = useNavigation();
  const { name } = useRoute();

  return (
    <MainContainer routeName={name}>
      <NavigateContainer>
        {!showBackButton && <Logo source={logoImg} height={37} width={82} />}
        {!showBackButton && (
          <Avatar source={avatarImg} height={40} width={40} />
        )}
      </NavigateContainer>
    </MainContainer>
  );
}
