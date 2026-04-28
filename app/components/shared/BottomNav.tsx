"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { useCartStore } from "@/lib/store/cart";
import { motion } from "framer-motion";

const tabs = [
  { href: "/dashboard", icon: "grid_view", label: "Hub" },
  { href: "/marketplace/products", icon: "local_mall", label: "Market" },
  { href: "/marketplace/food", icon: "restaurant", label: "Food" },
  { href: "/cart", icon: "shopping_cart", label: "Cart", isCart: true },
  { href: "/sell/new", icon: "add_circle", label: "Sell" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const cartCount = useCartStore((state) => state.totalItems());

  return (
    <nav
      id="bottom-nav"
      className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-2 pb-safe pt-2 bg-surface-container-lowest/90 backdrop-blur-xl z-50 rounded-t-2xl"
      style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.05)" }}
    >
      {tabs.map((tab) => {
        const isActive =
          pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href));
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all active:scale-90 relative ${
              isActive
                ? "text-primary"
                : "text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="nav-bg"
                className="absolute inset-0 bg-primary-container/30 rounded-xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <div className="relative">
              <Icon
                name={tab.icon}
                filled={isActive}
                className="text-[22px] mb-0.5 relative z-10"
              />
              {tab.isCart && cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-error text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white z-20">
                  {cartCount}
                </span>
              )}
            </div>
            <span
              className={`text-[9px] font-label uppercase tracking-widest mt-0.5 relative z-10 ${
                isActive ? "font-bold" : "font-semibold"
              }`}
            >
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
