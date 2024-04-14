import { Stack, useLocalSearchParams } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import {Text} from "tamagui";
import {useAuth0} from "react-native-auth0";

export default function Details() {
  const { name } = useLocalSearchParams();
    const { user, error } = useAuth0();


  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>
        {/*<ScreenContent path="screens/details.tsx" title={`Showing details for user ${name}`} />*/}
          {user && <Text>{JSON.stringify(user, null, 2)}</Text>}
      </Container>
    </>
  );
}
