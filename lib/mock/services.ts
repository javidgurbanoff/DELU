export interface ServiceItem {
  id: string;
  title: string;
  price: number;
  priceUnit: string;
  currency: string;
  image: string;
  category: string;
  provider: { name: string; avatar: string; verified: boolean };
  rating: number;
  reviews: number;
}

export const services: ServiceItem[] = [
  {
    id: "svc-1",
    title: "Box Braids & Twists",
    price: 15000,
    priceUnit: "Starting at",
    currency: "HUF",
    image: "/images/listing_braids.png",
    category: "Hair & Beauty",
    provider: { name: "Sarah K.", avatar: "/mock/avatar-sarah.jpg", verified: true },
    rating: 5.0,
    reviews: 22,
  },
  {
    id: "svc-2",
    title: "Calculus II Tutoring",
    price: 5000,
    priceUnit: "/ hr",
    currency: "HUF",
    image: "/images/listing_textbook.png",
    category: "Tutoring",
    provider: { name: "Mark T.", avatar: "/mock/avatar-mark.jpg", verified: true },
    rating: 4.9,
    reviews: 31,
  },
  {
    id: "svc-3",
    title: "Dorm Room Deep Clean",
    price: 10000,
    priceUnit: "Fixed Price",
    currency: "HUF",
    image: "/images/listing_braids.png",
    category: "Moving & Logistics",
    provider: { name: "CleanTeam", avatar: "", verified: true },
    rating: 4.8,
    reviews: 14,
  },
];


export const serviceCategories = [
  { label: "Hair & Beauty", icon: "content_cut", active: true },
  { label: "Tutoring", icon: "school", active: false },
  { label: "Moving & Logistics", icon: "local_shipping", active: false },
  { label: "Creative", icon: "palette", active: false },
];
