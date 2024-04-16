import { Stack } from 'expo-router';
import { Container } from '~/components/Container';
import { Text } from 'tamagui';
import { useAuth0 } from 'react-native-auth0';

export default function Details() {
  const { user, error } = useAuth0();

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>{user && <Text>{JSON.stringify(user, null, 2)}</Text>}</Container>
    </>
  );
}
