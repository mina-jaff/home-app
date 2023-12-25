import React from 'react';
import FormButton from './FormButton';

interface FormPage1Props {
  onNext: () => void;
  onChange: (name: string, value: string | number) => void;
  userData: {
    fullName: string;
    streetAddress: string;
    postalCode: number | string;
    country: string;
    phoneNumber: number | string;
  };
  pageCount: number;
  formSubmitted: boolean;
}

const FormPage1: React.FC<FormPage1Props> = ({ onNext, onChange, userData, pageCount, formSubmitted }) => {
    const showNextButton = pageCount < 3 && !formSubmitted;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      onChange(name, value);
    };

    return (
        <div>
        <form className="form">
        <label htmlFor="fullName" className="form-label">
          Full Name:
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={userData.fullName}
          className="form-input"
          onChange={handleInputChange}
        />

        <label htmlFor="streetAddress" className="form-label">
          Street Address:
        </label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          value={userData.streetAddress}
          className="form-input"
          onChange={handleInputChange}
        />

        <label htmlFor="postalCode" className="form-label">
          Postal Code:
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={userData.postalCode}
          className="form-input"
          onChange={handleInputChange}
        />

        <label htmlFor="country" className="form-label">
          Country:
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={userData.country}
          className="form-input"
          onChange={handleInputChange}
        />

        <label htmlFor="phoneNumber" className="form-label">
          Phone Number:
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={userData.phoneNumber}
          className="form-input"
          onChange={handleInputChange}
        />

        {showNextButton && (
          <FormButton label="Next" onClick={onNext} disabled={!userData.fullName || formSubmitted} />
        )}
        </form>
      </div>
  );
};

export default FormPage1;
