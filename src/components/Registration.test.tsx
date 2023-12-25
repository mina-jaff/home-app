import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Registration from './Registration';

describe('Registration Component', () => {
  test('renders Registration component', () => {
    render(<Registration />);
    const pageTitle = screen.getByText(/Registration Form/i);
    expect(pageTitle).toBeInTheDocument();
  });

  test('allows user to navigate through form pages', () => {
    render(<Registration />);
    
    // Page 1
    userEvent.click(screen.getByText(/Next/i));

    // Page 2
    userEvent.click(screen.getByText(/Next/i));

    // Page 3
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  test('handles form submission', () => {
    render(<Registration />);
    
    // Complete the form
    userEvent.type(screen.getByLabelText(/Full Name/i), 'John Doe');
    userEvent.type(screen.getByLabelText(/Street Address/i), '123 Main St');
    userEvent.type(screen.getByLabelText(/Postal Code/i), '12345');
    userEvent.type(screen.getByLabelText(/Country/i), 'USA');
    userEvent.type(screen.getByLabelText(/Phone Number/i), '1234567890');

    // Move to Page 2
    userEvent.click(screen.getByText(/Next/i));

    // Complete Page 2
    userEvent.type(screen.getByLabelText(/Email Address/i), 'john.doe@example.com');
    userEvent.type(screen.getByLabelText(/Password/i), 'password123');
    userEvent.type(screen.getByLabelText(/Confirm Password/i), 'password123');
    fireEvent.click(screen.getByLabelText(/0 - 1,000€/i));

    // Move to Page 3
    userEvent.click(screen.getByText(/Next/i));

    // Submit the form
    userEvent.click(screen.getByText(/Submit/i));


    expect(screen.getByLabelText(/Full Name/i)).toHaveValue('');
    expect(screen.getByLabelText(/Email Address/i)).toHaveValue('');
  });
});


