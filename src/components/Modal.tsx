import React from 'react';

interface ModalProps {
    onClick?: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClick }) => {
    return (
        <div>
            <p className="p-standard">Thank you! Your registration form has been submitted. We will get back to you within the next
                few days.
            </p>
            <button onClick={onClick} className="btn-standard">OK</button>
        </div>
    )
}

export default Modal;