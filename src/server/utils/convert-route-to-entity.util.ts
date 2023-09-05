const mapping: Record<string, string> = {
  bookings: 'booking',
  customers: 'customer',
  gyms: 'gym',
  'team-members': 'team_member',
  trainers: 'trainer',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
