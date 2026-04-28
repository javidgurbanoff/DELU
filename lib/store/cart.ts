import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  seller: string;
  quantity: number;
  fulfillment: "pickup" | "delivery" | "campus_meetup";
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  updateFulfillment: (id: string, fulfillment: CartItem["fulfillment"]) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            items: currentItems.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...currentItems, { ...item, quantity: 1 }] });
        }
      },
      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
      },
      updateQuantity: (id, delta) => {
        set({
          items: get().items
            .map((i) => (i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i))
            .filter((i) => i.quantity > 0),
        });
      },
      updateFulfillment: (id, fulfillment) => {
        set({
          items: get().items.map((i) => (i.id === id ? { ...i, fulfillment } : i)),
        });
      },
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((acc, i) => acc + i.quantity, 0),
      totalPrice: () => get().items.reduce((acc, i) => acc + i.price * i.quantity, 0),
    }),
    {
      name: "adel-cart-storage",
    }
  )
);
