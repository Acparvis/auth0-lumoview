import { InternalizationExample } from 'components/InternalizationExample';
import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { LoginButton } from '~/components/LoginButton/LoginButton';
import { useAuth0 } from 'react-native-auth0';
import { LogoutButton } from '~/components/LogoutButton/LogoutButton';

export default function Home() {
  const { user, error } = useAuth0();
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home">
          {/*<InternalizationExample />*/}
          {user ? <LogoutButton /> : <LoginButton />}
        </ScreenContent>
        <Link href={{ pathname: '/details', params: { name: user?.name || '' } }} asChild>
          <Button title="Show User Details" />
        </Link>
      </Container>
    </>
  );
}
