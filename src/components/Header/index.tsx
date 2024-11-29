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
import { useCallback } from 'react';

export type RouteNames = 'new-meal' | 'meal-details' | 'home' | 'edit-meal';

type HeaderProps = {
  showBackButton: boolean;
  headerTitle?: string;
  diet?: boolean; // Se for opcional
  id?: string;
};

const headerTitles: Record<RouteNames, string> = {
  'new-meal': 'Nova Refeição',
  'edit-meal': 'Editar Refeição',
  'meal-details': 'Refeição',
  home: 'Home',
};

export function Header({ showBackButton, headerTitle, diet, id }: HeaderProps) {
  const { navigate } = useNavigation();
  const { name } = useRoute() as { name: RouteNames };

  const handleNavigate = useCallback(() => {
    if (name === 'new-meal' || name === 'meal-details') {
      navigate('home');
      return;
    }

    if (id && name === 'edit-meal') {
      navigate('meal-details', { id });
      return;
    }
  }, [id, name, navigate]);

  const headerText = useCallback(() => {
    return headerTitle || headerTitles[name] || '';
  }, [headerTitle, name]);

  return (
    <HeaderContainer routeName={name} diet={!!diet}>
      <Container>
        {!showBackButton && <Logo source={logoImg} height={37} width={82} />}
        {!showBackButton && (
          <Avatar source={avatarImg} height={40} width={40} />
        )}
        {showBackButton && (
          <TitleContainer>
            <TouchableOpacity
              onPress={handleNavigate}
              style={{ marginLeft: 27 }}
            >
              <LeftArrow />
            </TouchableOpacity>
            {headerText() && <TitleText>{headerText()}</TitleText>}
          </TitleContainer>
        )}
      </Container>
    </HeaderContainer>
  );
}
