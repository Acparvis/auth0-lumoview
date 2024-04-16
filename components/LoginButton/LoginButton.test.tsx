import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { LoginButton } from './LoginButton';

const mockAuthorize = jest.fn();

jest.mock('react-native-auth0', () => ({
    useAuth0: () => ({
        authorize: mockAuthorize,
    }),
}));

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (str: string) => str,
        i18n: {
            changeLanguage: jest.fn(),
        },
    }),
}));

describe('LoginButton', () => {
    beforeEach(() => {
        mockAuthorize.mockClear();
    });

    test('renders without crashing', () => {
        const setIsLoading = jest.fn();
        const { getByText } = render(<LoginButton setIsLoading={setIsLoading} />);
        const loginButton = getByText('loginSignUp');
        expect(loginButton).toBeTruthy();
    });

    test('calls authorize function when button is pressed', () => {
        const setIsLoading = jest.fn();
        const { getByText } = render(<LoginButton setIsLoading={setIsLoading} />);
        const loginButton = getByText('loginSignUp');

        fireEvent.press(loginButton);

        expect(mockAuthorize).toHaveBeenCalledTimes(1);
    });
});
