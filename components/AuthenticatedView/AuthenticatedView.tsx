import { useAuth0 } from 'react-native-auth0';
import { Paragraph, SizableText, Text, YStack, YGroup, ListItem } from 'tamagui';
import { ChevronRight, Cloud, Moon, Star, Sun, Check } from '@tamagui/lucide-icons';
import { EmailVerificationIndicator } from '~/components/EmailVerificationIndicator/EmailVerificationIndicator';
import { Map } from '~/components/Map/Map';
import { Role, roleIconSwitch } from '~/components/AuthenticatedView/utils';
import { useTranslation } from 'react-i18next';

export const AuthenticatedView = () => {
  const { t } = useTranslation();
  const { user, error } = useAuth0();

  return (
    <YStack fullscreen={true} borderRadius={1} borderColor={'black'} gap={'$1'}>
      <SizableText size="$9">{t('welcome')} {user?.nickname}</SizableText>
      <Text marginBottom={'$2'}>{t('yourRoles')}</Text>

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
