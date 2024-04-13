import { YStack, H2, Separator, Theme, Text } from 'tamagui';

import { EditScreenInfo } from './EditScreenInfo';
import {useAuth0} from "react-native-auth0";

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  const {user, error} = useAuth0();

  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        {user && <H2>Logged in as {user.name}</H2>}
        <Separator />
        {children}
      </YStack>
    </Theme>
  );
};
