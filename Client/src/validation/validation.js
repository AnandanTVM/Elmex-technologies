import * as yup from 'yup';
//scheema
export const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(20)
    .required('Required'),

  jobtitle: yup
    .string()
    .min(2)
    .max(50)
    .required('jobt itle Required'),
  // dob: yup.date().required('Required'),
  // gender: yup.string().required('Required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required'),
  phone: yup
    .number('Phone number must be a 10 digit number')
    .positive()
    .integer()
    .required('Required'),
  education: yup
    .string()
    .min(2)
    .max(150)
    .required('Education Required'),
  experience: yup
    .string()
    .min(2)
    .max(150)
    .required('Experience Required'),
});
export const userUpdateSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required'),
  phone: yup
    .number('Phone number must be a 10 digit number')
    .positive()
    .integer()
    .required('Required'),
});
