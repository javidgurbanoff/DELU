export interface FoodItem {
  id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
  tags: string[];
  description: string;
  seller: { name: string; avatar: string; rating: number; reviews: number };
  availability: string;
  featured?: boolean;
}

export const foodItems: FoodItem[] = [
  {
    id: "food-1",
    title: "Authentic Nigerian Jollof",
    price: 3450,
    currency: "HUF",
    image: "/images/listing_jollof.png",
    tags: ["African", "Spicy", "Halal"],
    description: "Spicy, smoky, and deeply flavorful. Served with fried plantains and marinated chicken.",
    seller: { name: "Amina S.", avatar: "/mock/avatar-amina.jpg", rating: 4.9, reviews: 42 },
    availability: "Made Today",
    featured: true,
  },
  {
    id: "food-2",
    title: "Artisan Sourdough",
    price: 2200,
    currency: "HUF",
    image: "https://images.pexels.com/photos/30895275/pexels-photo-30895275.jpeg",
    tags: ["Baked", "Vegan"],
    description: "Freshly baked this morning. Crusty outside, soft and chewy inside.",
    seller: { name: "Elena R.", avatar: "/mock/avatar-elena.jpg", rating: 4.8, reviews: 15 },
    availability: "2 left",
  },
  {
    id: "food-3",
    title: "Midnight Ramen Kit",
    price: 2900,
    currency: "HUF",
    image: "https://images.pexels.com/photos/28758599/pexels-photo-28758599.jpeg",
    tags: ["Spicy", "Halal"],
    description: "Rich, spicy chicken broth, fresh noodles, and a marinated egg.",
    seller: { name: "Mark T.", avatar: "/mock/avatar-mark.jpg", rating: 4.7, reviews: 8 },
    availability: "Delivery at 11PM",
  },
  {
    id: "food-4",
    title: "Matcha Choc Cookies",
    price: 1650,
    currency: "HUF",
    image: "https://images.pexels.com/photos/32084505/pexels-photo-32084505.jpeg",
    tags: ["Baked", "Sweet"],
    description: "Set of 4 soft-baked cookies using premium culinary grade matcha.",
    seller: { name: "Yuki N.", avatar: "/mock/avatar-yuki.jpg", rating: 4.9, reviews: 12 },
    availability: "Available now",
  },
  {
    id: "food-5",
    title: "Halal Meat",
    price: 3900,
    currency: "HUF",
    image: "https://i.pinimg.com/1200x/6a/52/9f/6a529f4e06359da06daa47a18e871d2a.jpg",
    tags: ["Fresh","Halal"],
    description: "Finding halal lamb and beef has never been easier. The only place for the highest quality, freshest, and most delicious meats.",
    seller: { name: "Joseph N.", avatar: "/mock/avatar-yuki.jpg", rating: 4.3, reviews: 462 },
    availability: "Available now",
  },

];


export const foodCategories = [
  { label: "All Foods", icon: "restaurant_menu", active: true },
  { label: "Baked Goods", icon: "bakery_dining", active: false },
  { label: "Spicy", icon: "local_fire_department", active: false },
  { label: "Vegan", icon: "eco", active: false },
  { label: "Halal", icon: "mosque", active: false },
  { label: "Cultural", icon: "public", active: false },
];
