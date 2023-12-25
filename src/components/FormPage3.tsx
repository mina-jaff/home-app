import React from 'react';
import FormButton from './FormButton';

interface FormPage3Props {
  onBack: () => void;
  onSubmit: () => void;
  userData: {
    fullName: string;
    streetAddress: string;
    postalCode: number | string;
    country: string;
    phoneNumber: number | string;
    email: string;
    password: string;
    salaryIndication: string;
  };
  pageCount: number;
}

const FormPage3: React.FC<FormPage3Props> = ({ onBack, onSubmit, userData, pageCount }) => {
  const handleInternalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <form className="form" onSubmit={handleInternalSubmit}>
      <div className='form-review'>
        <p>
          <strong>Full Name:</strong> {userData.fullName}
        </p>
        <p>
          <strong>Street Address:</strong> {userData.streetAddress}
        </p>
        <p>
          <strong>Postal Code:</strong> {userData.postalCode}
        </p>
        <p>
          <strong>Country:</strong> {userData.country}
        </p>
        <p>
          <strong>Phone Number:</strong> {userData.phoneNumber}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Password:</strong> *****
        </p>
        <p>
          <strong>Salary Indication:</strong> {userData.salaryIndication}
        </p>
      </div>
      <FormButton label="Back" onClick={onBack} />
      <FormButton label="Submit" type="submit" />
      </form>
    </div>
  );
};

export default FormPage3;

