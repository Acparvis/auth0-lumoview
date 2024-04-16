import { Stack } from 'expo-router';
import { Container } from '~/components/Container';
import { Text } from 'tamagui';
import { useAuth0 } from 'react-native-auth0';
import { LanguagePicker } from '~/components/LanguagePicker/LanguagePicker';
import {useTranslation} from "react-i18next";

export default function Details() {
    const { t } = useTranslation();
  const { user, error } = useAuth0();

  return (
    <>
      <Stack.Screen options={{ title: t('settings') }} />
      <Container>
        {user && <Text>{JSON.stringify(user, null, 2)}</Text>}
        <LanguagePicker />
      </Container>
    </>
  );
}
