import { YStack, H2, Separator, Theme, Text } from 'tamagui';

import { EditScreenInfo } from './EditScreenInfo';
import { useAuth0 } from 'react-native-auth0';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ children }: ScreenContentProps) => {

  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <Separator />
        {children}
      </YStack>
    </Theme>
  );
};
