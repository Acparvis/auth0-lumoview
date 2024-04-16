import { Star, Check } from '@tamagui/lucide-icons';

export type Role = 'Admin' | 'Standard';

export const roleIconSwitch = (role: Role) =>
  ({
    Admin: <Star />,
    Standard: <Check />,
  })[role];
