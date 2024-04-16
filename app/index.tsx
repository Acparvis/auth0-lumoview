import { useEffect, useState } from 'react';
import { Stack, Link } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { LoginButton } from '~/components/LoginButton/LoginButton';
import { useAuth0 } from 'react-native-auth0';
import { LogoutButton } from '~/components/LogoutButton/LogoutButton';

import { H2, Text } from 'tamagui';
import { AuthenticatedView } from '~/components/AuthenticatedView/AuthenticatedView';
import Logo from '~/components/Logo/Logo';
import { LoadingProgress } from '~/components/LoadingProgress/LoadingProgress';

export default function Home() {
  const { user, error } = useAuth0();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: !!user }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="">
          {!user && <Logo />}
          {isLoading && <LoadingProgress />}
          {user && <AuthenticatedView />}
        </ScreenContent>
        {user ? <LogoutButton /> : <LoginButton setIsLoading={setIsLoading} />}
        {!isLoading && user && (
          <Link href={{ pathname: '/details', params: { name: user?.nickname || '' } }} asChild>
            <Button title="Show User Details" />
          </Link>
        )}
      </Container>
    </>
  );
}
