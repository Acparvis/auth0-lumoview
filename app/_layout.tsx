import '../translation';

import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { Auth0Provider } from 'react-native-auth0';

import config from '../tamagui.config';

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Auth0Provider
      domain={process.env.EXPO_PUBLIC_AUTH0_DOMAIN as string}
      clientId={process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID as string}>
      <TamaguiProvider config={config}>
        <Stack />
      </TamaguiProvider>
    </Auth0Provider>
  );
}
