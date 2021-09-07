import { useState, useEffect } from 'react';

const Myforms = (callback, validatein) => {
  const [values, setValues] = useState({
    username: '',
      
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validatein(values));//Change to validatein
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
    
  );

  return { handleChange, handleSubmit, values, errors };
};

export default Myforms;
