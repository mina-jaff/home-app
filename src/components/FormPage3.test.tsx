import React from 'react';
import { render } from '@testing-library/react';
import FormPage3 from './FormPage3';

const mockOnBack = jest.fn();
const mockOnSubmit = jest.fn();

const mockUserData = {
    fullName: '',
    streetAddress: '',
    postalCode: '',
    country: '',
    phoneNumber: '',
    email: '',
    password: '',
    salaryIndication: '',
  };

  describe('Form Page 3', () => {
    it('renders FormPage3 component without crashing', () => {
        render(
          <FormPage3
            onBack={mockOnBack}
            onSubmit={mockOnSubmit}
            userData={mockUserData}
            pageCount={3}
          />
        );
      });

    });