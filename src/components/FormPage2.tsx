import React, { useState } from 'react';
import FormButton from './FormButton';

interface FormPage2Props {
  onNext: () => void;
  onBack: () => void;
  onChange: (name: string, value: string | number) => void;
  userData: {
    email: string;
    password: string;
    salaryIndication: string;
  };
  pageCount: number;
  formSubmitted: boolean;
}

const FormPage2: React.FC<FormPage2Props> = ({ onNext, onBack, onChange, userData, pageCount, formSubmitted }) => {
    const showNextButton = pageCount < 3 && !formSubmitted;;
    const [passwordError, setPasswordError] = useState<string>('');
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
    
      if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(value);
        setIsEmailValid(isValidEmail);
      }
    
      onChange(name, value);
    };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange('salaryIndication', value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange('password', value);

    setPasswordError('');
  };

  const handlePasswordConfirmationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange('passwordConfirmation', value);
  
    if (value !== userData.password) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div>
      <form className="form">
        <label htmlFor="email" className="form-label">
          Email Address:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          className="form-input"
          onChange={handleInputChange}
        />
        {!isEmailValid && <p className="error-message">Please enter a valid email address</p>}

        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          className="form-input"
          onChange={handlePasswordChange}
        />

        <label htmlFor="passwordConfirmation" className="form-label">
          Confirm Password:
        </label>
        <input
          type="password"
          id="passwordConfirmation"
          name="passwordConfirmation"
          className="form-input"
          onChange={handlePasswordConfirmationChange}
        />
        {passwordError && <p className="error-message">{passwordError}</p>}

        <label className="form-label">Monthly Gross Salary in EUR:</label>
        <div>
          <label>
            <input
              type="radio"
              name="salaryIndication"
              value="0-1000"
              checked={userData.salaryIndication === '0-1000'}
              onChange={handleSalaryChange}
            />
            0 - 1,000€
          </label>
          <label>
            <input
              type="radio"
              name="salaryIndication"
              value="1000-2000"
              checked={userData.salaryIndication === '1000-2000'}
              onChange={handleSalaryChange}
            />
            1.000 - 2.000€
          </label>
          <label>
            <input
              type="radio"
              name="salaryIndication"
              value="2000-3000"
              checked={userData.salaryIndication === '2000-3000'}
              onChange={handleSalaryChange}
            />
            2.000 - 3.000€
          </label>
          <label>
            <input
              type="radio"
              name="salaryIndication"
              value="3000-4000"
              checked={userData.salaryIndication === '3000-4000'}
              onChange={handleSalaryChange}
            />
            3.000 - 4.000€
          </label>
          <label>
            <input
              type="radio"
              name="salaryIndication"
              value="<4000"
              checked={userData.salaryIndication === '<4000'}
              onChange={handleSalaryChange}
            />
            More than 4.000€
          </label>
        </div>

        {showNextButton && (
            <FormButton
                label="Next"
                onClick={onNext}
                disabled={!isEmailValid || !userData.password || !userData.salaryIndication || !!passwordError || formSubmitted}
            />
        )}
        <FormButton label="Back" onClick={onBack} />
      </form>
    </div>
  );
};

export default FormPage2;
