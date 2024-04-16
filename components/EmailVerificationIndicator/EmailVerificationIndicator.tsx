import { useAuth0 } from 'react-native-auth0';
import { YStack, SizableText, Paragraph } from 'tamagui';
import { useTranslation } from 'react-i18next';

export const EmailVerificationIndicator = () => {
  const { t } = useTranslation();
  const { user } = useAuth0();

  const emailVerified = user?.emailVerified;
  const isCompanyEmail = user?.['https://lumoview.com/isCompanyEmail'];

  // We don't need to show any user messaging if the email is verified
  if (emailVerified) return null;

  return (
    <YStack space="$2" alignItems="flex-start" marginTop={'$0'}>
      <SizableText size="$8">Please verify your email</SizableText>
      <Paragraph size="$1" fontWeight="800">
        {isCompanyEmail && t('companyEmailCheck')}
        {!isCompanyEmail && t('standardEmailCheck')}
      </Paragraph>
    </YStack>
  );
};
