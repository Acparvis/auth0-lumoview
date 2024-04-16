import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { LanguagePicker } from './LanguagePicker';

const mockChangeLanguage = jest.fn();

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (str: string) => str,
        i18n: {
            changeLanguage: mockChangeLanguage,
        },
    }),
}));

describe('LanguagePicker', () => {
    beforeEach(() => {
        mockChangeLanguage.mockClear();
    });

    test('renders without crashing', () => {
        const { getByText } = render(<LanguagePicker />);
        const germanButton = getByText('button.german');
        const englishButton = getByText('button.english');
        expect(germanButton).toBeTruthy();
        expect(englishButton).toBeTruthy();
    });

    test('calls changeLanguage function when buttons are pressed', () => {
        const { getByText } = render(<LanguagePicker />);
        const germanButton = getByText('button.german');
        const englishButton = getByText('button.english');

        fireEvent.press(germanButton);
        fireEvent.press(englishButton);

        expect(mockChangeLanguage).toHaveBeenCalledTimes(2);
        expect(mockChangeLanguage).toHaveBeenCalledWith('de');
        expect(mockChangeLanguage).toHaveBeenCalledWith('en');
    });
});
