"use client";

import Icon from "@/app/components/shared/Icon";
import Link from "next/link";
import TopNav from "@/app/components/shared/TopNav";
import BottomNav from "@/app/components/shared/BottomNav";
import SideNav from "@/app/components/shared/SideNav";
import { useCartStore } from "@/lib/store/cart";
import { AnimatePresence, motion } from "framer-motion";

export default function CartPage() {
  const { items, removeItem, updateQuantity, updateFulfillment, clearCart, totalPrice } = useCartStore();
  
  const subtotal = totalPrice();
  const serviceFee = items.length > 0 ? 450 : 0;
  const total = subtotal + serviceFee;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 bg-background pb-24 md:pb-0">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left: Cart Items */}
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-2">
                  Your Cart
                </h1>
                <p className="text-on-surface-variant text-sm font-body">
                  {items.length === 0 
                    ? "Your cart is currently empty." 
                    : `You have ${items.length} items in your cart.`}
                </p>
              </div>

              {/* Items */}
              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm"
                      style={{ border: "1px solid rgba(171,173,175,0.08)" }}
                    >
                      <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 relative bg-surface-container flex items-center justify-center">
                        {item.image ? (
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                          <Icon
                            name={item.category.includes("Food") ? "restaurant" : "inventory_2"}
                            filled
                            size={32}
                            className={item.category.includes("Food") ? "text-tertiary" : "text-secondary"}
                          />
                        )}
                      </div>
                      <div className="flex flex-col flex-1 justify-between py-1">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h3 className="font-headline font-semibold text-base text-on-surface leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-on-surface-variant text-xs mt-1 font-body">
                              Sold by {item.seller}
                            </p>
                          </div>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-on-surface-variant hover:text-error transition-colors p-1 rounded-full"
                          >
                            <Icon name="close" size={20} />
                          </button>
                        </div>
                        <div className="flex justify-between items-end mt-3">
                          <div className="flex items-center gap-3 bg-surface-container-low rounded-full px-1 py-1">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
                            >
                              <Icon name="remove" size={16} />
                            </button>
                            <span className="font-semibold text-sm w-4 text-center">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
                            >
                              <Icon name="add" size={16} />
                            </button>
                          </div>
                          <span className="font-headline font-bold text-lg text-primary">
                            {(item.price * item.quantity).toLocaleString()} {item.currency}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {items.length === 0 && (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mx-auto text-outline-variant">
                      <Icon name="shopping_cart" size={40} />
                    </div>
                    <p className="font-body text-on-surface-variant">Explore the marketplace to find something you need.</p>
                    <Link 
                      href="/marketplace/products"
                      className="inline-flex py-3 px-8 rounded-full bg-primary text-white font-headline font-bold text-sm"
                    >
                      Browse Products
                    </Link>
                  </div>
                )}
              </div>

              {/* Fulfillment Options */}
              {items.length > 0 && (
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm" style={{ border: "1px solid rgba(171,173,175,0.08)" }}>
                  <h3 className="font-headline font-semibold text-lg text-on-surface mb-4 flex items-center gap-2">
                    <Icon name="local_shipping" className="text-primary" />
                    Delivery Preferences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "pickup", label: "Campus Pickup", sub: "Main Library Foyer", price: "Free" },
                      { id: "delivery", label: "Dorm Delivery", sub: "To your building", price: "+800 HUF" }
                    ].map((opt) => (
                      <label 
                        key={opt.id}
                        className={`relative flex cursor-pointer rounded-xl p-4 transition-all border ${
                          true // For mock, first item's fulfillment or similar
                            ? "bg-primary-container/10 border-primary ring-1 ring-primary"
                            : "bg-surface-container-low border-transparent"
                        }`}
                      >
                        <input type="radio" name="fulfillment" value={opt.id} className="sr-only" />
                        <span className="flex flex-1 flex-col">
                          <span className="block text-sm font-medium text-on-surface font-headline">{opt.label}</span>
                          <span className="mt-1 text-xs text-on-surface-variant">{opt.sub}</span>
                          <span className={`mt-2 text-sm font-bold ${opt.price === "Free" ? "text-primary" : "text-on-surface-variant"}`}>
                            {opt.price}
                          </span>
                        </span>
                        <Icon name="check_circle" filled className="text-primary" />
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Order Summary */}
            <div className="w-full lg:w-[400px] shrink-0">
              <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 lg:sticky lg:top-8 shadow-sm" style={{ border: "1px solid rgba(171,173,175,0.08)" }}>
                <h3 className="font-headline font-bold text-xl text-on-surface mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4 text-sm font-body mb-6">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Items ({items.length})</span>
                    <span className="font-medium text-on-surface">{subtotal.toLocaleString()} HUF</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Campus Pickup</span>
                    <span className="font-medium text-primary">Free</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      Service Fee
                      <Icon name="info" size={14} className="cursor-help" />
                    </span>
                    <span className="font-medium text-on-surface">{serviceFee} HUF</span>
                  </div>
                </div>
                <div className="h-px w-full bg-surface-container-high mb-6" />
                <div className="flex justify-between items-end mb-8">
                  <span className="font-headline font-semibold text-lg text-on-surface">Total</span>
                  <div className="text-right">
                    <span className="font-headline font-bold text-3xl text-primary">
                      {total.toLocaleString()}
                    </span>
                    <span className="font-headline text-lg text-primary ml-1 uppercase">HUF</span>
                  </div>
                </div>
                <Link
                  href="/orders/confirmation"
                  onClick={() => clearCart()}
                  className={`w-full py-4 rounded-full bg-gradient-to-r from-primary to-primary-dim text-white font-headline font-semibold text-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${
                    items.length === 0 ? "opacity-50 pointer-events-none" : ""
                  }`}
                  style={{ boxShadow: items.length > 0 ? "0 4px 14px rgba(0,105,71,0.2)" : "none" }}
                >
                  <Icon name="lock" />
                  Secure Checkout
                </Link>

                {/* Trust */}
                <div className="flex flex-col gap-3 mt-6 bg-primary-container/10 p-4 rounded-xl"
                  style={{ border: "1px solid rgba(0,105,71,0.1)" }}
                >
                  <div className="flex items-center gap-3 text-xs text-on-surface">
                    <span className="bg-primary-container p-1 rounded-full shrink-0">
                      <Icon name="verified_user" size={16} className="text-primary" />
                    </span>
                    <span className="font-medium">Verified Student Transaction</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-on-surface">
                    <span className="bg-primary-container p-1 rounded-full shrink-0">
                      <Icon name="enhanced_encryption" size={16} className="text-primary" />
                    </span>
                    <span className="font-medium">Encrypted Payment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
