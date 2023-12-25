import React from 'react';

interface FormButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const FormButton: React.FC<FormButtonProps> = ({ label, onClick, disabled, type = 'button' }) => {
  return (
    <div className="form-btns">
      <button onClick={onClick} disabled={disabled} type={type} className="btn-standard">
        {label}
      </button>
    </div>
  );
};

export default FormButton;
