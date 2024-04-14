import { useAuth0 } from 'react-native-auth0';
import { YStack, SizableText, XStack, Paragraph } from 'tamagui';
import { checkEmailUrl } from '~/components/EmailVerificationIndicator/utils';

export const EmailVerificationIndicator = () => {
  const { user } = useAuth0();

  const emailVerified = user?.emailVerified;
  const emailAddress = user?.email;
  const isCompanyEmail = checkEmailUrl( process.env.EXPO_PUBLIC_COMPANY_EMAIL_SUFFIX, emailAddress);

  if (emailVerified) return null;

  return (
    <YStack space="$2" alignItems="flex-start" marginTop={'$4'}>
      <SizableText size="$8">Please verify your email</SizableText>
      <Paragraph size="$2" fontWeight="800">
          {isCompanyEmail && 'Please check your company email for a verification link. Once verified, login again to access the admin map.'}

          {!isCompanyEmail && 'Please check your company email for a verification link.'}
      </Paragraph>
    </YStack>
  );
};
