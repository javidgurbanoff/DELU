"use client";

import Icon from "@/app/components/shared/Icon";
import { useCartStore } from "@/lib/store/cart";
import { useToastStore } from "@/lib/store/toast";
import Link from "next/link";
import { use } from "react";

export default function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const addItem = useCartStore((state) => state.addItem);
  const addToast = useToastStore((state) => state.addToast);

  // Mock data for any item
  const item = {
    id,
    title: "Authentic Nigerian Jollof",
    price: 3450,
    currency: "HUF",
    description: "Spicy, smoky, and deeply flavorful. Served with fried plantains and marinated chicken. Made with fresh ingredients sourced locally.",
    category: "Food & Drink",
    condition: "Fresh",
    image: "",
    seller: {
      name: "Amina S.",
      rating: 4.9,
      reviews: 42,
      verified: true,
      responseTime: "~5 min",
      listings: 8,
    },
    tags: ["African", "Spicy", "Halal"],
    views: 342,
    favorites: 18,
  };

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      title: item.title,
      price: item.price,
      currency: item.currency,
      image: item.image,
      category: item.category,
      seller: item.seller.name,
      fulfillment: "pickup",
    });
    addToast(`Added ${item.title} to cart`);
  };

  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm font-body text-on-surface-variant mb-6">
        <Link href="/marketplace/food" className="hover:text-primary transition-colors">
          Food
        </Link>
        <Icon name="chevron_right" size={16} />
        <span className="text-on-surface font-medium truncate">{item.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Image Area */}
        <div className="w-full lg:w-3/5">
          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden relative aspect-4/3">
            <div className="w-full h-full bg-linear-to-br from-tertiary/10 to-tertiary-container/10 flex items-center justify-center text-tertiary">
              <Icon name="restaurant" size={80} className="opacity-20" />
            </div>
            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface/80 backdrop-blur-sm text-on-surface text-xs font-bold px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Favorite */}
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:text-error transition-colors">
              <Icon name="favorite" size={20} />
            </button>
          </div>
        </div>

        {/* Details */}
        <div className="w-full lg:w-2/5 space-y-6">
          {/* Title + Price */}
          <div>
            <span className="inline-block bg-tertiary-container/20 text-on-tertiary-container text-xs font-bold uppercase tracking-wider px-2 py-1 rounded mb-3">
              {item.category}
            </span>
            <h1 className="font-headline text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface mb-3">
              {item.title}
            </h1>
            <div className="flex items-baseline gap-2">
              <span className="font-headline text-3xl font-bold text-primary">
                {item.price.toLocaleString()}
              </span>
              <span className="font-headline text-lg text-outline">{item.currency}</span>
            </div>
          </div>

          {/* Seller Card */}
          <div className="bg-surface-container-low rounded-2xl p-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-primary-container/30 flex items-center justify-center text-primary font-headline font-bold text-lg">
                {item.seller.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-headline text-base font-bold text-on-surface flex items-center gap-1.5">
                  {item.seller.name}
                  {item.seller.verified && (
                    <Icon name="verified" filled size={16} className="text-primary" />
                  )}
                </p>
                <p className="font-body text-xs text-on-surface-variant flex items-center gap-1">
                  <Icon name="star" filled size={12} className="text-tertiary" />
                  {item.seller.rating} • {item.seller.reviews} reviews
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs font-body">
              <div className="bg-surface-container-lowest p-3 rounded-xl text-center">
                <p className="text-on-surface-variant">Response</p>
                <p className="font-semibold text-on-surface mt-0.5">{item.seller.responseTime}</p>
              </div>
              <div className="bg-surface-container-lowest p-3 rounded-xl text-center">
                <p className="text-on-surface-variant">Listings</p>
                <p className="font-semibold text-on-surface mt-0.5">{item.seller.listings} active</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-3">
              Description
            </h2>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm text-on-surface-variant font-body">
            <span className="flex items-center gap-1.5">
              <Icon name="visibility" size={16} />
              {item.views} views
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="favorite" size={16} />
              {item.favorites} favorites
            </span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleAddToCart}
              className="w-full py-4 rounded-full bg-linear-to-r from-primary to-primary-dim text-white font-headline font-semibold text-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              style={{ boxShadow: "0 4px 14px rgba(0,105,71,0.2)" }}
            >
              <Icon name="shopping_cart" />
              Add to Cart
            </button>
            <Link
              href="/dashboard/inbox"
              className="w-full py-4 rounded-full bg-secondary-container text-on-secondary-container font-headline font-semibold text-lg hover:brightness-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Icon name="chat" />
              Message Seller
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
