import { useAuth0 } from 'react-native-auth0';
import { YStack, SizableText, Paragraph } from 'tamagui';

export const EmailVerificationIndicator = () => {
  const { user } = useAuth0();

  const emailVerified = user?.emailVerified;
  const isCompanyEmail = user?.['https://lumoview.com/isCompanyEmail'];

  // We dont need to show any user messaging if the email is verified
  if (emailVerified) return null;

  return (
    <YStack space="$2" alignItems="flex-start" marginTop={'$0'}>
      <SizableText size="$8">Please verify your email</SizableText>
      <Paragraph size="$1" fontWeight="800">
        {isCompanyEmail &&
          'Please check your Lumoview email for a verification link. Once verified, login again to access the admin map.'}

        {!isCompanyEmail && 'Please check your email for a verification link.'}
      </Paragraph>
    </YStack>
  );
};
