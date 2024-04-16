import { forwardRef } from 'react';

import { Button as TButton, ButtonText } from '../tamagui.config';
import { TouchableOpacity } from 'react-native';
import { ButtonProps } from 'tamagui';

interface TButtonProps extends ButtonProps {
  title: string;
}

export const Button = forwardRef<TouchableOpacity, TButtonProps>(({ onPress, title }, ref) => {
  return (
    <TButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </TButton>
  );
});
