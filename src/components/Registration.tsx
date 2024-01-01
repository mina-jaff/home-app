import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import FormPage3 from './FormPage3';
import Modal from './Modal';
import ProgressTracker from './ProgressTracker';
import house from '../assets/house-black.png';

interface UserData {
    fullName: string;
    streetAddress: string;
    postalCode: number | string;
    country: string;
    phoneNumber: number | string;
    email: string;
    password: string;
    salaryIndication: string;
    passwordConfirmation: string;
  }

const Registration: React.FC = () => {
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState<UserData>(() => {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : {
      fullName: '',
      streetAddress: '',
      postalCode: '',
      country: '',
      phoneNumber: '',
      email: '',
      password: '',
      salaryIndication: '',
      passwordConfirmation: '',
    };
  });
    
      const [pageCount, setPageCount] = useState<number>(1);
      const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
      const [showModal, setShowModal] = useState<boolean>(false);

      useEffect(() => {
        if (!formSubmitted) {
          localStorage.setItem('userData', JSON.stringify(userData));
        }
      }, [userData]);

      const handleNext = () => {
        setPageCount(pageCount + 1);
      };
    
      const handleBack = () => {
        setPageCount(pageCount - 1);
      };

      const handleChange = (name: string, value: string | number) => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          [name]: value,
        }));
      };

      const handleSubmit = async () => {
        setFormSubmitted(true);

        try {
          await fetch('http://localhost:5000/api/userdata', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });

          setShowModal(true);
          setPageCount(pageCount + 1);
        } catch (error) {
          console.error('Error submitting data:', error);
        }
    
        setUserData({
          fullName: '',
          streetAddress: '',
          postalCode: '',
          country: '',
          phoneNumber: '',
          email: '',
          password: '',
          salaryIndication: '',
          passwordConfirmation: '',
        });
        setFormSubmitted(false);
      };

      const handleCloseModal = () => {
        setShowModal(false);
        navigate('/');
      }
    
    return (
    <div className="form-container">
    <section className="form-layout">
        <header>
          <ProgressTracker pageCount={pageCount} />
            <h1 className="title-standard">Registration Form</h1>
            <img src={house} className="img-small"></img>
              {pageCount < 3 && (
                <p>Please complete this registration form to set up your account. This ensures that we can find the right matches for you based on the provided data.</p>
              )} 
              {pageCount === 3 && <p>Review Your Information</p>}
        </header>
        {pageCount === 1 && (
            <FormPage1 onNext={handleNext} onChange={handleChange} userData={userData} pageCount={pageCount} formSubmitted={formSubmitted} />
        )}
        {pageCount === 2 && (
          <FormPage2 onNext={handleNext} onBack={handleBack} onChange={handleChange} userData={userData} pageCount={pageCount} formSubmitted={formSubmitted} />
        )}
        {pageCount === 3 && (
          <FormPage3 onBack={handleBack} onSubmit={handleSubmit} userData={userData} pageCount={pageCount} />
        )}
        {pageCount === 4 && showModal && (<Modal onClick={handleCloseModal}/>)}
    </section>
    </div>
  );
};

export default Registration;
