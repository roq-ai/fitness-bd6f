import { BookingInterface } from 'interfaces/booking';
import { CustomerInterface } from 'interfaces/customer';
import { TeamMemberInterface } from 'interfaces/team-member';
import { TrainerInterface } from 'interfaces/trainer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GymInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  booking?: BookingInterface[];
  customer?: CustomerInterface[];
  team_member?: TeamMemberInterface[];
  trainer?: TrainerInterface[];
  user?: UserInterface;
  _count?: {
    booking?: number;
    customer?: number;
    team_member?: number;
    trainer?: number;
  };
}

export interface GymGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
