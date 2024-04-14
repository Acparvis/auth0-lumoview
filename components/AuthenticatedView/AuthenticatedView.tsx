import { useAuth0 } from 'react-native-auth0';
import { Paragraph, SizableText, Text, YStack } from 'tamagui';
import { EmailVerificationIndicator } from '~/components/EmailVerificationIndicator/EmailVerificationIndicator';
import { Map } from '~/components/Map/Map';

export const AuthenticatedView = () => {
  const { user, error } = useAuth0();

  return (
    <YStack fullscreen={true} borderRadius={1} borderColor={'black'} gap={'$2'}>
      <SizableText size="$9">Welcome {user?.nickname}</SizableText>
      <Text>Your roles are:</Text>

      {user?.['https://lumoview.com/roles']?.map((role: string) => {
        return (
          <Paragraph size="$4" fontWeight="800" key={role}>
            {role}
          </Paragraph>
        );
      })}

      <EmailVerificationIndicator />

      <Map />
    </YStack>
  );
};
