import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';
import { Home } from '@screens/Home';
import { Numbers } from '@screens/Numbers';
import { useRoute } from '@react-navigation/native';
import { Celebrate } from '@screens/Celebrate';
import { MealDetails } from '@screens/MealDetails';
import { MealForm } from '@screens/MealForm';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.RED }}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="new-meal" component={MealForm} />
        <Screen name="edit-meal" component={MealForm} />
        <Screen name="numbers" component={Numbers} />
        <Screen name="celebrate" component={Celebrate} />
        <Screen name="meal-details" component={MealDetails} />
      </Navigator>
    </View>
  );
};
