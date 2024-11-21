import { Text } from 'react-native';
import { Container } from './styles';
import { Header } from '@components/Header';
import { useRoute } from '@react-navigation/native';
import { Summary } from '@components/Summary';

export function Numbers() {
  const { name } = useRoute();

  return (
    <>
      <Summary meta={80} />
      <Text>Numbers</Text>
    </>
  );
}
