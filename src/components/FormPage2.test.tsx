import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormPage2 from './FormPage2';

const mockOnChange = jest.fn();
const mockOnNext = jest.fn();
const mockOnBack = jest.fn();

const mockUserData = {
  email: '',
  password: '',
  salaryIndication: '',
};

describe('Form Page 2', () => {
    it('renders FormPage2 component without crashing', () => {
        render(
          <FormPage2
            onNext={mockOnNext}
            onChange={mockOnChange}
            onBack={mockOnBack}
            userData={mockUserData}
            pageCount={2}
            formSubmitted={false}
          />
        );
      });

      it('updates state on input change', () => {
        const { getByLabelText } = render(
          <FormPage2
            onNext={mockOnNext}
            onChange={mockOnChange}
            onBack={mockOnBack}
            userData={mockUserData}
            pageCount={2}
            formSubmitted={false}
          />
        );
    
        fireEvent.change(getByLabelText(/email/i), { target: { value: 'lana@spotify.com' } });
        expect(mockOnChange).toHaveBeenCalledWith('email', 'lana@spotify.com');
      });

      it('disables the "Next" button if salary indication is not selected', () => {
        const { getByLabelText, getByTestId } = render(
          <FormPage2
            onNext={mockOnNext}
            onChange={mockOnChange}
            onBack={mockOnBack}
            userData={mockUserData}
            pageCount={2}
            formSubmitted={false}
          />
        );
    
        const nextButton = screen.getByText(/Next/i);
        expect(nextButton).toBeDisabled();
        fireEvent.change(getByLabelText(/Email/i), { target: { value: 'lana@spotify.com' } });
        fireEvent.change(getByTestId(/password-input/i), { target: { value: 'abc' } });
        fireEvent.change(getByTestId(/password-confirmation-input/i), { target: { value: 'abc' } });
        expect(nextButton).toBeDisabled();
      });
    });