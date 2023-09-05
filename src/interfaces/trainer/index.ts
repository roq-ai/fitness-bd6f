import { BookingInterface } from 'interfaces/booking';
import { CustomerInterface } from 'interfaces/customer';
import { UserInterface } from 'interfaces/user';
import { GymInterface } from 'interfaces/gym';
import { GetQueryInterface } from 'interfaces';

export interface TrainerInterface {
  id?: string;
  user_id: string;
  gym_id: string;
  specialty: string;
  years_experience: number;
  certification: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  customer?: CustomerInterface[];
  user?: UserInterface;
  gym?: GymInterface;
  _count?: {
    booking?: number;
    customer?: number;
  };
}

export interface TrainerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  gym_id?: string;
  specialty?: string;
  certification?: string;
}
