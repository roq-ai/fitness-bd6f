import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  membership_start_date: yup.date().required(),
  membership_end_date: yup.date().nullable(),
  preferred_workout_time: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  gym_id: yup.string().nullable().required(),
  preferred_trainer_id: yup.string().nullable().required(),
});
