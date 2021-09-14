
function validatein(values){
 
let errors = {};

if(!values.username.trim()){

  errors.username = 'Enter your screen name';
}
else if (values.username.length > 30 || values.username.length < 3){

  errors.username = ' Name charactors should be below 30 and above 2';
}
return errors;
}
export default validatein;
