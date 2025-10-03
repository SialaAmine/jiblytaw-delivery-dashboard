// #mock-orders.ts
import { Order } from './models';

export const MOCK_ORDERS: Order[] = [
  {
    id: 2001,
    customerName: 'Alice Martin',
    vendor: 'Italiano Food',
    deliveryAgent: 'Marco Rossi',
    status: 'Placed',
    totalPrice: 42.5,
    createdAtMinutesAgo: 5,
    createdAt: new Date('2025-09-22T12:15:00'), // Monday
    items: [
      { name: 'Margherita Pizza', note: 'extra cheese', price: 15 },
      { name: 'Tiramisu', note: 'extra cheese', price: 5.5 },
      { name: 'Coke 33cl', note: 'extra cheese', price: 2 }
    ],
    deliveryInfo: {
      driverFullName: 'Marco Rossi',
      driverPhone: '+33 61 22 33 44',
      vehicle: 'Motorcycle',
      compensation: 20,
      deliveryAddress: '10 Rue Victor Hugo, Paris',
      customerPhone: '+33 77 88 99 00',
      orderNote: 'Ring the bell twice'
    }
  },
  {
    id: 2002,
    customerName: 'John Smith',
    vendor: 'Sushi Bento',
    deliveryAgent: 'N/A',
    status: 'Preparing',
    totalPrice: 55,
    createdAtMinutesAgo: 15,
    createdAt: new Date('2025-09-23T19:30:00'), // Tuesday
    items: [
      { name: 'Salmon Sushi Set (12 pcs)', note: 'extra cheese', price: 22 },
      { name: 'Miso Soup', note: 'extra cheese', price: 5 },
      { name: 'Green Tea', note: 'extra cheese', price: 3 }
    ],
    deliveryInfo: {
      driverFullName: 'Taro Suzuki',
      driverPhone: '+33 61 00 11 22',
      vehicle: 'Car',
      compensation: 25,
      deliveryAddress: '45 Avenue Charles, Lyon',
      customerPhone: '+33 66 77 88 11',
      orderNote: 'Leave at reception'
    }
  },
  {
    id: 2003,
    customerName: 'Sarah Lopez',
    vendor: 'Vegan Point',
    deliveryAgent: 'Emma Green',
    status: 'In Delivery',
    totalPrice: 32.75,
    createdAtMinutesAgo: 25,
    createdAt: new Date('2025-09-24T14:45:00'), // Wednesday
    items: [
      { name: 'Falafel Wrap', note: 'no onions', price: 9.5 },
      { name: 'Vegan Brownie', note: 'extra cheese', price: 4.25 },
      { name: 'Smoothie Mango', note: 'extra cheese', price: 6 }
    ],
    deliveryInfo: {
      driverFullName: 'Emma Green',
      driverPhone: '+33 62 11 22 33',
      vehicle: 'Bicycle',
      compensation: 15,
      deliveryAddress: '20 Boulevard St. Michel, Paris',
      customerPhone: '+33 77 66 55 44',
      orderNote: 'Call when outside'
    }
  },
  {
    id: 2004,
    customerName: 'David Kim',
    vendor: 'Burger Bros',
    deliveryAgent: 'Lucas White',
    status: 'Delivered',
    totalPrice: 28,
    createdAtMinutesAgo: 40,
    createdAt: new Date('2025-09-25T11:10:00'), // Thursday
    items: [
      { name: 'Double Cheeseburger', note: 'extra cheese', price: 12 },
      { name: 'Fries Large', note: 'extra cheese', price: 4 },
      { name: 'Milkshake Chocolate', note: 'extra cheese', price: 6 }
    ],
    deliveryInfo: {
      driverFullName: 'Lucas White',
      driverPhone: '+33 63 44 55 66',
      vehicle: 'Car',
      compensation: 18,
      deliveryAddress: '77 Rue Lafayette, Marseille',
      customerPhone: '+33 70 11 22 33',
      orderNote: 'Deliver to the back door'
    }
  },
  {
    id: 2005,
    customerName: 'Emma Brown',
    vendor: 'Italiano Food',
    deliveryAgent: 'N/A',
    status: 'Canceled',
    totalPrice: 18,
    createdAtMinutesAgo: 60,
    createdAt: new Date('2025-09-26T09:20:00'), // Friday
    items: [
      { name: 'Pasta Carbonara', note: 'extra cheese', price: 12 },
      { name: 'Water 50cl', note: 'extra cheese', price: 2 }
    ],
    deliveryInfo: {
      driverFullName: '—',
      driverPhone: '—',
      vehicle: '—',
      compensation: 0,
      deliveryAddress: '5 Place Bellecour, Lyon',
      customerPhone: '+33 66 00 11 22',
      orderNote: '—'
    }
  },
  {
    id: 2006,
    customerName: 'Paul Dupont',
    vendor: 'Sushi Bento',
    deliveryAgent: 'N/A',
    status: 'Placed',
    totalPrice: 47,
    createdAtMinutesAgo: 10,
    createdAt: new Date('2025-09-27T18:00:00'), // Saturday
    items: [
      { name: 'Dragon Roll', note: 'extra cheese', price: 15 },
      { name: 'Tempura', note: 'extra cheese', price: 8 }
    ],
    deliveryInfo: {
      driverFullName: 'Yuki Tanaka',
      driverPhone: '+33 61 77 88 22',
      vehicle: 'Car',
      compensation: 20,
      deliveryAddress: 'Nice, France',
      customerPhone: '+33 70 11 22 33',
      orderNote: 'Leave with concierge'
    }
  },
  {
    id: 2007,
    customerName: 'Nora Alami',
    vendor: 'Vegan Point',
    deliveryAgent: 'Tom Green',
    status: 'Preparing',
    totalPrice: 26,
    createdAtMinutesAgo: 12,
    createdAt: new Date('2025-09-28T13:25:00'), // Sunday
    items: [
      { name: 'Vegan Burger', note: 'extra cheese', price: 12 },
      { name: 'Lemonade', note: 'extra cheese', price: 3 }
    ],
    deliveryInfo: {
      driverFullName: 'Tom Green',
      driverPhone: '+33 66 88 99 11',
      vehicle: 'Bike',
      compensation: 12,
      deliveryAddress: 'Rue Saint Denis, Paris',
      customerPhone: '+33 60 77 55 11',
      orderNote: ''
    }
  },
  {
    id: 2008,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  },
  {
    id: 2009,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  },
  {
    id: 2010,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  },
  {
    id: 2011,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  },
  {
    id: 2012,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  },
  {
    id: 2013,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  },
  {
    id: 2014,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  },
  {
    id: 2015,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  },
  {
    id: 2016,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  },
  {
    id: 2017,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  },
  {
    id: 2018,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  },
  {
    id: 2019,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  },
  {
    id: 2020,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  },
  {
    id: 2021,
    customerName: 'Carlos Mendes',
    vendor: 'Burger Bros',
    deliveryAgent: 'Ana Costa',
    status: 'In Delivery',
    totalPrice: 33,
    createdAtMinutesAgo: 22,
    createdAt: new Date('2025-09-29T17:40:00'), // Monday again
    items: [
      { name: 'BBQ Burger', note: 'extra cheese', price: 14 },
      { name: 'Onion Rings', note: 'extra cheese', price: 5 }
    ],
    deliveryInfo: {
      driverFullName: 'Ana Costa',
      driverPhone: '+33 66 44 33 22',
      vehicle: 'Car',
      compensation: 16,
      deliveryAddress: 'Avenue de la République, Toulouse',
      customerPhone: '+33 77 66 22 11',
      orderNote: 'Ring bell 3 times'
    }
  }
];
