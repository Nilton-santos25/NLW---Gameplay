import React from 'react';
import { StatusBar } from 'react-native';
import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';

export default function App(){
  //carregando as fontes que foram instaladas no inicio da aplicação
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  /* enquanto as fontes nao forem carregadas 
	o App não sera aberto, mas para isso e necessário 
	instalar o expo loading no terminal (expo install expo-app-loading) */
  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}