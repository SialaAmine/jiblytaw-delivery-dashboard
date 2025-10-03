export type OrderStatus = 'Placed' | 'Preparing' | 'In Delivery' | 'Delivered' | 'Canceled';

export interface OrderItem {
  name: string;
  note?: string;
  price: number; // per line
}

export interface Order {
  id: number; // 1052
  customerName: string; // John Doe
  vendor: string; // Italiano Food
  deliveryAgent?: string; // John Doe / N/A
  status: OrderStatus;
  totalPrice: number; // 39
  createdAtMinutesAgo: number; // 12
  createdAt: Date;
  items: OrderItem[];
  deliveryInfo: {
    driverFullName: string;
    driverPhone: string;
    vehicle: string;
    compensation: number;
    deliveryAddress: string;
    customerPhone: string;
    orderNote: string;
  };
}

export const VENDORS = ['All Vendors', 'Italiano Food', 'Sushi Bento', 'Vegan Point', 'Burger Bros'];
export const STATUSES: OrderStatus[] = ['Placed', 'Preparing', 'In Delivery', 'Delivered', 'Canceled'];
