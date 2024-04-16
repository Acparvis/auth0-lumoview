import { render } from '@testing-library/react-native';
import React from 'react';

import Logo from './Logo';

describe('Logo', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<Logo />);
    const svgElement = getByTestId('logo-svg');
    expect(svgElement).toBeTruthy();
  });

  test('renders with correct height and width', () => {
    const { getByTestId } = render(<Logo />);
    const svgElement = getByTestId('logo-svg');
    expect(svgElement.props.height).toBe('60%');
    expect(svgElement.props.width).toBe('60%');
  });
});
