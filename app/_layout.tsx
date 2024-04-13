import '../translation';

import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { useAuth0, Auth0Provider } from 'react-native-auth0';

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
      domain={'dev-58q7wd61yme0sqbo.us.auth0.com'}
      clientId={'3CeBgqwzegz93msqsC4lBGhaVpA91Kqr'}>
      <TamaguiProvider config={config}>
        <Stack />
      </TamaguiProvider>
    </Auth0Provider>
  );
}
