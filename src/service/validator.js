import joiValidate from 'react-joi-validation';
import joi from 'joi-browser';

joiValidate.setJoi(joi);

export const userSchema = joi.object({
  email: joi.string().email().required(),
  firstName: joi.string().min(1).max(64).required(),
  lastName: joi.string().min(1).max(64).required(),
  job: joi.string().min(1).max(64).required(),
  age: joi.number().positive().required(),
});

export function insertSpaces(string) {
  string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
  string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  return string;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validate(data, schema) {
  const res = joi.validate(data, schema, {abortEarly: false, allowUnknown: true});
  let errors = null;
  if(res.error && res.error.details) {
    errors = res.error.details.map(item => {
      const caption = capitalizeFirstLetter(insertSpaces(Array.isArray(item.path)? item.path[0] : item.path));
      const msg = item.message.replace(item.path, caption);
      return insertSpaces(msg);
    });
  }
  if(errors) {
    return {errors, message: errors.join('\n')};
  }
  return null;
}

export function validateAndAlert(data, schema) {
  const errors = validate(data, schema);
  if(errors) {
    alert(`Please check following fields: \n\n${errors.message}`);
    return false;
  }
  return true;
}
