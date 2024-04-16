import { useAuth0 } from 'react-native-auth0';
import { Paragraph, SizableText, Text, YStack, YGroup, ListItem } from 'tamagui';
import { ChevronRight, Cloud, Moon, Star, Sun, Check } from '@tamagui/lucide-icons';
import { EmailVerificationIndicator } from '~/components/EmailVerificationIndicator/EmailVerificationIndicator';
import { Map } from '~/components/Map/Map';
import {Role, roleIconSwitch} from "~/components/AuthenticatedView/utils";

export const AuthenticatedView = () => {
  const { user, error } = useAuth0();

  return (
    <YStack fullscreen={true} borderRadius={1} borderColor={'black'} gap={'$1'}>
      <SizableText size="$9">Welcome {user?.nickname}</SizableText>
      <Text>Your roles are:</Text>

      <YGroup alignSelf="center" bordered size="$5">
        {user?.['https://lumoview.com/roles']?.map((role: string) => {
          return (
            <YGroup.Item key={role}>
              <ListItem icon={roleIconSwitch(role as Role)}>{role}</ListItem>
            </YGroup.Item>
          );
        })}
      </YGroup>

      <EmailVerificationIndicator />

      <Map />
    </YStack>
  );
};
