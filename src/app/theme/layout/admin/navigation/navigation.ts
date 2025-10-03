export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  role?: string[];
  isMainParent?: boolean;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'default',
    title: 'Dashboard',
    type: 'item',
    classes: 'nav-item',
    url: '/default',
    icon: 'ti ti-dashboard',
    breadcrumbs: false
  },
  {
    id: 'orders',
    title: 'Orders Management',
    type: 'item',
    classes: 'nav-item',
    url: '/orders',
    icon: 'ti ti-checklist',
    breadcrumbs: false
  },
  {
    id: 'delivery',
    title: 'Delivery Management',
    type: 'item',
    classes: 'nav-item',
    url: '/delivery',
    icon: 'ti ti-bike',
    breadcrumbs: true
  },
  {
    id: 'vendor',
    title: 'Vendor Management',
    type: 'item',
    classes: 'nav-item',
    url: '/vendor',
    icon: 'ti ti-building-store',
    breadcrumbs: true
  },
  {
    id: 'client',
    title: 'Client Management',
    type: 'item',
    classes: 'nav-item',
    url: '/client',
    icon: 'ti ti-users',
    breadcrumbs: true
  },
  {
    id: 'finance',
    title: 'Financial',
    type: 'item',
    classes: 'nav-item',
    url: '/finance',
    icon: 'ti ti-cash-banknote',
    breadcrumbs: true
  },
  {
    id: 'support',
    title: 'Customer Support',
    type: 'item',
    classes: 'nav-item',
    url: '/support',
    icon: 'ti ti-headphones',
    breadcrumbs: true
  },
  {
    id: 'offer',
    title: 'Promotions & Discounts',
    type: 'item',
    classes: 'nav-item',
    url: '/offer',
    icon: 'ti ti-rosette-discount',
    breadcrumbs: true
  },
  {
    id: 'report',
    title: 'Reports & Analytics',
    type: 'item',
    classes: 'nav-item',
    url: '/report',
    icon: 'ti ti-chart-bar',
    breadcrumbs: true
  }
];
