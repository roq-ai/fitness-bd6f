import { UserInterface } from 'interfaces/user';
import { GymInterface } from 'interfaces/gym';
import { GetQueryInterface } from 'interfaces';

export interface TeamMemberInterface {
  id?: string;
  user_id: string;
  gym_id: string;
  position: string;
  start_date: any;
  end_date?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  gym?: GymInterface;
  _count?: {};
}

export interface TeamMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  gym_id?: string;
  position?: string;
}
