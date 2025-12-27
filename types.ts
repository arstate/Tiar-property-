
export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: 'Subsidi' | 'Komersil';
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}
