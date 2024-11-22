import React from 'react';
import {
  useFonts,
  NunitoSans_400Regular as nunito400Regular,
  NunitoSans_700Bold as nunito700Bold,
} from '@expo-google-fonts/nunito-sans';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from 'styled-components/native';
import { theme } from '@theme/index';
import { Routes } from 'src/routes';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    nunito400Regular,
    nunito700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar style="auto" backgroundColor={theme.COLORS.GREE_LIGHT} />
    </ThemeProvider>
  );
}