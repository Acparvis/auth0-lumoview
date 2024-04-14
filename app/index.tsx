import { InternalizationExample } from 'components/InternalizationExample';
import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { LoginButton } from '~/components/LoginButton/LoginButton';
import { useAuth0 } from 'react-native-auth0';
import { LogoutButton } from '~/components/LogoutButton/LogoutButton';
import { useEffect } from 'react';
import { H2, Text } from 'tamagui';
import { AuthenticatedView } from '~/components/AuthenticatedView/AuthenticatedView';

export default function Home() {
  const { user, error } = useAuth0();

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (user) {
      console.log(user);
    }
  }, [error, user]);

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home">
          {user && <AuthenticatedView />}

        </ScreenContent>
        {user ? <LogoutButton /> : <LoginButton />}
        {user && (
          <Link href={{ pathname: '/details', params: { name: user?.nickname || '' } }} asChild>
            <Button title="Show User Details" />
          </Link>
        )}
      </Container>
    </>
  );
}
