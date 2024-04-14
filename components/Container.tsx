import { YStack } from 'tamagui';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <YStack flex={1} padding="$6" fullscreen={true} justifyContent={'space-between'} gap={'$2'}>
      {children}
    </YStack>
  );
};
