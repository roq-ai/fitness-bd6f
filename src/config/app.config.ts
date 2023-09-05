interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Team Member', 'Trainer'],
  tenantName: 'Gym',
  applicationName: 'Fitness ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage personal information', 'View gym details', 'Manage workout session bookings'],
  ownerAbilities: ['Manage Gym profile', 'Invite Team Members to application', 'Invite Trainers to application'],
};
