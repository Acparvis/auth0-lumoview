import { useState } from 'react';
import { Stack, Link } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { LoginButton } from '~/components/LoginButton/LoginButton';
import { useAuth0 } from 'react-native-auth0';
import { LogoutButton } from '~/components/LogoutButton/LogoutButton';
import { AuthenticatedView } from '~/components/AuthenticatedView/AuthenticatedView';
import Logo from '~/components/Logo/Logo';
import { LoadingProgress } from '~/components/LoadingProgress/LoadingProgress';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const { user, error } = useAuth0();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Stack.Screen options={{ title: 'Lumoview', headerShown: !!user }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="">
          {!user && <Logo />}
          {isLoading && <LoadingProgress />}
          {user && <AuthenticatedView />}
        </ScreenContent>
        {!isLoading && user && (
          <Link href={{ pathname: '/details', params: { name: user?.nickname || '' } }} asChild>
            <Button title={t('userDetails')} />
          </Link>
        )}
        {user ? <LogoutButton /> : <LoginButton setIsLoading={setIsLoading} />}
      </Container>
    </>
  );
}
