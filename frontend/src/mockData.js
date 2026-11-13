// Fallback static mock data for standalone preview (e.g. GitHub Pages without local backend)
export const MOCK_BRANCHES = [
  {
    id: 'branch-downtown',
    branch_id: 'branch-downtown',
    name: 'Downtown Flagship',
    receipt_name: 'DINLYO DOWNTOWN',
    address: 'Tahrir Sq, Cairo',
    phone: '0225734410',
    currency: 'EGP',
    timezone: 'Africa/Cairo',
  },
  {
    id: 'branch-marina',
    branch_id: 'branch-marina',
    name: 'Marina Branch',
    receipt_name: 'DINLYO MARINA',
    address: 'Marina Walk, North Coast',
    phone: '0464102200',
    currency: 'EGP',
    timezone: 'Africa/Cairo',
  },
  {
    id: 'branch-heliopolis',
    branch_id: 'branch-heliopolis',
    name: 'Heliopolis Branch',
    receipt_name: 'DINLYO HELIOPOLIS',
    address: 'Korba Square, Heliopolis',
    phone: '0224148800',
    currency: 'EGP',
    timezone: 'Africa/Cairo',
  },
];

export const MOCK_MENU = [
  { id: 'm1', branch_id: 'branch-downtown', name: 'Espresso', category: 'Coffee', price: 45, tax_rate: 0.14, estimated_prep_time_minutes: 2, is_available: 1 },
  { id: 'm2', branch_id: 'branch-downtown', name: 'Cappuccino', category: 'Coffee', price: 60, tax_rate: 0.14, estimated_prep_time_minutes: 3, is_available: 1 },
  { id: 'm3', branch_id: 'branch-downtown', name: 'Iced Latte', category: 'Coffee', price: 65, tax_rate: 0.14, estimated_prep_time_minutes: 3, is_available: 1 },
  { id: 'm4', branch_id: 'branch-downtown', name: 'Croissant', category: 'Bakery', price: 55, tax_rate: 0.14, estimated_prep_time_minutes: 1, is_available: 1 },
  { id: 'm5', branch_id: 'branch-downtown', name: 'Club Sandwich', category: 'Food', price: 140, tax_rate: 0.14, estimated_prep_time_minutes: 8, is_available: 1 },
  { id: 'm6', branch_id: 'branch-downtown', name: 'Margherita Pizza', category: 'Food', price: 190, tax_rate: 0.14, estimated_prep_time_minutes: 12, is_available: 1 },
  { id: 'm7', branch_id: 'branch-downtown', name: 'Caesar Salad', category: 'Food', price: 120, tax_rate: 0.14, estimated_prep_time_minutes: 5, is_available: 1 },
  { id: 'm8', branch_id: 'branch-downtown', name: 'Cheesecake', category: 'Dessert', price: 85, tax_rate: 0.14, estimated_prep_time_minutes: 2, is_available: 1 },
  { id: 'm9', branch_id: 'branch-downtown', name: 'Fresh Orange Juice', category: 'Beverage', price: 50, tax_rate: 0.14, estimated_prep_time_minutes: 3, is_available: 1 },
  { id: 'm10', branch_id: 'branch-downtown', name: 'Sparkling Water', category: 'Beverage', price: 30, tax_rate: 0.14, estimated_prep_time_minutes: 1, is_available: 1 },
];

export const MOCK_TABLES = [
  { id: 't1', branch_id: 'branch-downtown', table_number: '1', zone: 'Indoor', capacity: 4, status: 'available' },
  { id: 't2', branch_id: 'branch-downtown', table_number: '2', zone: 'Indoor', capacity: 4, status: 'available' },
  { id: 't3', branch_id: 'branch-downtown', table_number: '3', zone: 'Indoor', capacity: 4, status: 'available' },
  { id: 't4', branch_id: 'branch-downtown', table_number: '4', zone: 'Terrace', capacity: 4, status: 'available' },
  { id: 't5', branch_id: 'branch-downtown', table_number: '5', zone: 'Terrace', capacity: 2, status: 'available' },
  { id: 't6', branch_id: 'branch-downtown', table_number: '6', zone: 'Bar', capacity: 2, status: 'available' },
];

export const MOCK_USERS = [
  { id: 'u1', branch_id: 'branch-downtown', name: 'Executive Director (HQ)', pin: '9999', role: 'head_office', is_active: 1 },
  { id: 'u2', branch_id: 'branch-downtown', name: 'Sarah Chen (Manager)', pin: '1234', role: 'manager', is_active: 1 },
  { id: 'u3', branch_id: 'branch-downtown', name: 'Ahmed Hassan (Shift Lead)', pin: '5678', role: 'shift_manager', is_active: 1 },
  { id: 'u4', branch_id: 'branch-downtown', name: 'Omar Tarek (Cashier)', pin: '0000', role: 'cashier', is_active: 1 },
];

export const MOCK_ORDERS = [
  {
    id: 'ord-mock-1',
    order_number: 'ORD-101',
    branch_id: 'branch-downtown',
    table_id: 't1',
    table_number: '1',
    order_type: 'dine_in',
    status: 'in_prep',
    items: [
      { id: 'item-1', name: 'Cappuccino', quantity: 2, price: 60, status: 'in_prep', notes: 'Oat milk' },
      { id: 'item-2', name: 'Croissant', quantity: 1, price: 55, status: 'ready', notes: '' },
    ],
    subtotal: 175,
    tax: 24.5,
    total: 199.5,
    created_at: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
  },
];
