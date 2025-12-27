
import { Property, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Beranda', href: '#home' },
  { label: 'Daftar Rumah', href: '#listings' },
  { label: 'Layanan', href: '#services' },
  { label: 'Kontak', href: '#contact' },
];

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Griya Asri Sidoarjo',
    location: 'Sidoarjo, Jawa Timur',
    price: 'Rp 160 Juta',
    type: 'Subsidi',
    beds: 2,
    baths: 1,
    sqft: 60,
    imageUrl: 'https://picsum.photos/seed/prop1/800/600',
  },
  {
    id: '2',
    title: 'Permata Residensi Surabaya',
    location: 'Surabaya, Jawa Timur',
    price: 'Rp 850 Juta',
    type: 'Komersil',
    beds: 3,
    baths: 2,
    sqft: 90,
    imageUrl: 'https://picsum.photos/seed/prop2/800/600',
  },
  {
    id: '3',
    title: 'Dago Hill View',
    location: 'Bandung, Jawa Barat',
    price: 'Rp 1.2 Milyar',
    type: 'Komersil',
    beds: 4,
    baths: 3,
    sqft: 120,
    imageUrl: 'https://picsum.photos/seed/prop3/800/600',
  },
  {
    id: '4',
    title: 'Gresik Harmoni Regency',
    location: 'Gresik, Jawa Timur',
    price: 'Mulai 2 Juta/Bulan',
    type: 'Subsidi',
    beds: 2,
    baths: 1,
    sqft: 72,
    imageUrl: 'https://picsum.photos/seed/prop4/800/600',
  },
];

export const WA_NUMBER = '6281234567890'; // Placeholder
export const INSTAGRAM_HANDLE = '@tiar.property';
