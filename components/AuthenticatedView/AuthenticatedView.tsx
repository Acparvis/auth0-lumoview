import { useAuth0 } from 'react-native-auth0';
import { Button } from '../Button';
import { H2, Paragraph, SizableText, Text, YStack } from 'tamagui';
import { EmailVerificationIndicator } from '~/components/EmailVerificationIndicator/EmailVerificationIndicator';

export const AuthenticatedView = () => {
  const { user, error } = useAuth0();

  return (
    <YStack fullscreen={true} borderRadius={1} borderColor={'black'} gap={'$2'}>
      <SizableText size="$9">Welcome {user?.nickname}</SizableText>
      <Text>Your roles are:</Text>
      <Paragraph size="$2" fontWeight="800">
        {user?.['https://lumoview.com/roles']?.map((role: string) => {
          return <Text key={role}>{role}</Text>;
        })}
      </Paragraph>
      <EmailVerificationIndicator />
    </YStack>
  );
};
