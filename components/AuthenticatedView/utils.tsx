import { Star, Check } from '@tamagui/lucide-icons';

export type Role = 'Admin' | 'Standard';

export const roleIconSwitch = (role: Role) =>
  ({
    Admin: <Star testID="star" />,
    Standard: <Check testID="check" />,
  })[role];
