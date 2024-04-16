import React from 'react';
import { render } from '@testing-library/react-native';
import { roleIconSwitch } from './utils';

describe('roleIconSwitch', () => {
    test('returns Star icon for Admin role', () => {
        const { getByTestId } = render(roleIconSwitch('Admin'));
        const iconElement = getByTestId('star');
        expect(iconElement).toBeTruthy();
    });

    test('returns Check icon for Standard role', () => {
        const { getByTestId } = render(roleIconSwitch('Standard'));
        const iconElement = getByTestId('check');
        expect(iconElement).toBeTruthy();
    });
});
