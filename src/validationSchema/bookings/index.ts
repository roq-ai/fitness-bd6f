import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_date: yup.date().required(),
  booking_time: yup.date().required(),
  workout_type: yup.string().required(),
  customer_id: yup.string().nullable().required(),
  trainer_id: yup.string().nullable().required(),
  gym_id: yup.string().nullable().required(),
});
