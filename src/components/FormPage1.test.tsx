import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormPage1 from './FormPage1';

const mockOnChange = jest.fn();
const mockOnNext = jest.fn();

const mockUserData = {
  fullName: '',
  streetAddress: '',
  postalCode: '',
  country: '',
  phoneNumber: '',
};

describe('Form Page 1', () => {
    it('renders FormPage1 component without crashing', () => {
        render(
          <FormPage1
            onNext={mockOnNext}
            onChange={mockOnChange}
            userData={mockUserData}
            pageCount={1}
            formSubmitted={false}
          />
        );
      });

      it('updates state on input change', () => {
        const { getByLabelText } = render(
          <FormPage1
            onNext={mockOnNext}
            onChange={mockOnChange}
            userData={mockUserData}
            pageCount={1}
            formSubmitted={false}
          />
        );
    
        fireEvent.change(getByLabelText(/Full Name/i), { target: { value: 'Lana Del Rey' } });
        expect(mockOnChange).toHaveBeenCalledWith('fullName', 'Lana Del Rey');
      });

      it('disables the "Next" button if fullName is empty', () => {
        render(
          <FormPage1
            onNext={mockOnNext}
            onChange={mockOnChange}
            userData={mockUserData}
            pageCount={1}
            formSubmitted={false}
          />
        );
    
        const nextButton = screen.getByText(/Next/i);
        expect(nextButton).toBeDisabled();
      });
})