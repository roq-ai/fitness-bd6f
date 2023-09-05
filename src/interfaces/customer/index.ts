import { BookingInterface } from 'interfaces/booking';
import { UserInterface } from 'interfaces/user';
import { GymInterface } from 'interfaces/gym';
import { TrainerInterface } from 'interfaces/trainer';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  user_id: string;
  gym_id: string;
  membership_start_date: any;
  membership_end_date?: any;
  preferred_workout_time?: any;
  preferred_trainer_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  user?: UserInterface;
  gym?: GymInterface;
  trainer?: TrainerInterface;
  _count?: {
    booking?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  gym_id?: string;
  preferred_trainer_id?: string;
}
