import { Spinner, YStack } from 'tamagui';

export const LoadingProgress = () => {
  return (
    <YStack padding="$3" space="$4" alignItems="center">
      <Spinner size="large" color="#2E2382" />
    </YStack>
  );
};
