"use client";

import Link from "next/link";
import Icon from "./Icon";
import { useCartStore } from "@/lib/store/cart";

export default function TopNav() {
  const cartCount = useCartStore((state) => state.totalItems());

  return (
    <header
      className="w-full sticky top-0 z-50 md:hidden"
      style={{
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-primary font-headline"
        >
          ADEL
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative text-primary hover:text-primary-dim transition-colors active:scale-95"
          >
            <Icon name="shopping_cart" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-error text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="text-primary hover:text-primary-dim transition-colors active:scale-95">
            <Icon name="notifications" />
          </button>
          <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary font-headline font-bold text-sm border-2 border-primary-container">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
