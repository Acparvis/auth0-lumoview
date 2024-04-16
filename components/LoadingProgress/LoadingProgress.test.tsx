import React from 'react';
import { render } from '@testing-library/react-native';
import { LoadingProgress } from './LoadingProgress';

describe('LoadingProgress', () => {
    test('renders without crashing', () => {
        const { getByTestId } = render(<LoadingProgress />);
        const spinnerElement = getByTestId('spinner');
        expect(spinnerElement).toBeTruthy();
    });
});
