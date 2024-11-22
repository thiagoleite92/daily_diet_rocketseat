import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';
import { Home } from '@screens/Home';
import { Numbers } from '@screens/Numbers';
import { NewMeal } from '@screens/NewMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.RED }}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="new-meal" component={NewMeal} />
        <Screen name="home" component={Home} />
        <Screen name="numbers" component={Numbers} />
      </Navigator>
    </View>
  );
};
