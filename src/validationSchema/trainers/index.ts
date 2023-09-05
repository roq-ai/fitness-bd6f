import * as yup from 'yup';

export const trainerValidationSchema = yup.object().shape({
  specialty: yup.string().required(),
  years_experience: yup.number().integer().required(),
  certification: yup.string().required(),
  user_id: yup.string().nullable().required(),
  gym_id: yup.string().nullable().required(),
});
