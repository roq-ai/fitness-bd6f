import { CustomerInterface } from 'interfaces/customer';
import { TrainerInterface } from 'interfaces/trainer';
import { GymInterface } from 'interfaces/gym';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  customer_id: string;
  trainer_id: string;
  gym_id: string;
  booking_date: any;
  booking_time: any;
  workout_type: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  trainer?: TrainerInterface;
  gym?: GymInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  trainer_id?: string;
  gym_id?: string;
  workout_type?: string;
}
