import React from 'react';
import { render } from '@testing-library/react-native';
import { EmailVerificationIndicator } from './EmailVerificationIndicator';

jest.mock('react-native-auth0', () => ({
  useAuth0: () => ({
    user: {
      emailVerified: false,
      'https://lumoview.com/isCompanyEmail': true,
    },
  }),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));

describe('EmailVerificationIndicator', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<EmailVerificationIndicator />);
    const messageElement = getByText('Please verify your email');
    expect(messageElement).toBeTruthy();
  });

  test('displays company email message', () => {
    const { getByText } = render(<EmailVerificationIndicator />);
    const messageElement = getByText('companyEmailCheck');
    expect(messageElement).toBeTruthy();
  });
});
