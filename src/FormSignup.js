import './index';
import React from 'react';
import MyForms from './MyForms';
import validatein from './Validatein';


const FormSignup = ({submitForm}) => {
  
  const  {handleChange, values, handleSubmit, errors} = MyForms( submitForm, validatein);
  const Participant=() => {
    localStorage.setItem("player", values.username);
  };

  return (
    <div>
        <h1>NINJA GAME</h1>
        <hr/>
     
         <form onSubmit={handleSubmit} noValidate>
            
             <input type="text"
              placeholder="Enter your screen name"
              name='username' 
              id='username'
              value={values.username}
              onChange={handleChange}
             /> 
                   
             {errors.username && <p>{errors.username}</p>}
                
             <button type='submit'onClick={Participant}>START</button>
        </form> 

    </div>
  );
}      

export default FormSignup;