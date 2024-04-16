import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { LogoutButton } from './LogoutButton';

// Mock the react-native-auth0 module
jest.mock('react-native-auth0', () => {
  const clearSessionMock = jest.fn(() => {
    console.log('clearSession was called'); // Add a console.log statement here
  });

  return {
    useAuth0: () => ({
      clearSession: clearSessionMock,
    }),
  };
});

// Require the mocked clearSession function
const { clearSession } = require('react-native-auth0').useAuth0();

describe('LogoutButton', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<LogoutButton />);
    const buttonElement = getByText('logOut');
    expect(buttonElement).toBeTruthy();
  });

  test('calls clearSession function when pressed', () => {
    const { getByText } = render(<LogoutButton />);
    const buttonElement = getByText('logOut');

    fireEvent.press(buttonElement);

    expect(clearSession).toHaveBeenCalled();
  });
});
