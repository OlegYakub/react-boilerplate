//import { isAfterFull, isAfterNowFull } from '../utils';

export const validate = (validator, fields) => {
  if (validator) {
    let errors = {};
    const unfilled = validator.required.filter(field => !fields[field]);
    if (validator.custom) {
      const result = validator.custom
        .map(({error, validate, fields: validationFields}) => {
          const valid = validate(...validationFields.map(field => fields[field]));
          const errors = {};
          validationFields.forEach(item => {
            errors[item] = error;
          });
          return valid ? null : errors;
        });
      const customErrors = result.filter(Boolean);
      if (customErrors.length) {
        customErrors.forEach(error => {
          errors = Object.assign(errors, error);
        });
      }
    }
    if (unfilled.length) {
      unfilled.forEach(field => {
        errors[field] = 'Please fill required fields';
      });
    }
    return {errors};
  }
  return {errors: null};
};

// export const pastDates = fields => ({
//   error: 'Past dates are not available',
//   validate: isAfterNowFull,
//   fields
// });
//
// export const endDateAfter = fields => ({
//   error: 'End date should be after start date',
//   validate: isAfterFull,
//   fields
// });

export const email = fields => ({
  error: 'Incorrect email format',
  validate: validateEmail,
  fields,
});

export const phone = fields => ({
  error: 'Phone format must be XXX-XXX-XXXX',
  validate: validatePhone,
  fields,
});

export const ssn = fields => ({
  error: 'SSN format must be XXX-XX-XXXX',
  validate: validateSSN,
  fields,
});

export const samePasswords = fields => ({
  error: 'Passwords must be same',
  validate: (password, repeat) => password === repeat,
  fields,
});

export const password = fields => ({
  error: 'Passwords must contain at least 8 characters',
  validate: validatePassword,
  fields,
});

const validatePassword = password => {
  const re = /^.*.{8,20}$/;
  return re.test(password);
};

const validateEmail = email => {
  /* eslint-disable no-useless-escape */
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validatePhone = phone => {
  /* eslint-disable no-useless-escape */
  const re = /^\d{3}-\d{3}-\d{4}$/;
  return re.test(phone);
};

const validateSSN = ssn => {
  /* eslint-disable no-useless-escape */
  const re = /^\d{3}-\d{2}-\d{4}$/;
  return re.test(ssn);
};

