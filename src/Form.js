import React, { useState } from 'react';
import FormSignup from './FormSignup';
import Category from './Category';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <Category/>
        )}
     
    </>
  );
};

export default Form;
