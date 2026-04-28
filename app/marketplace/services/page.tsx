"use client";

import Icon from "@/app/components/shared/Icon";
import Link from "next/link";
import { services, serviceCategories } from "@/lib/mock/services";


export default function ServicesMarketplacePage() {
  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2">
            Services
          </h1>
          <p className="font-body text-on-surface-variant text-base max-w-lg">
            Peer-powered skills and services — from tutoring to styling, all by verified students.
          </p>
        </div>
        <Link
          href="/sell/new"
          className="shrink-0 inline-flex items-center gap-2 py-3 px-6 rounded-full bg-linear-to-r from-primary to-primary-dim text-white font-headline font-semibold hover:brightness-110 active:scale-[0.98] transition-all"
          style={{ boxShadow: "0 4px 14px rgba(0,105,71,0.2)" }}
        >
          <Icon name="add" size={20} />
          Offer a Service
        </Link>
      </section>

      {/* Category Tabs */}
      <section className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
        {serviceCategories.map((cat) => (
          <button
            key={cat.label}
            className={`whitespace-nowrap flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
              cat.active
                ? "bg-primary text-on-primary"
                : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low"
            }`}
          >
            <Icon name={cat.icon} size={18} />
            {cat.label}
          </button>
        ))}
      </section>

      {/* Services Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/marketplace/items/${service.id}`}
              className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:translate-y-[-2px] transition-all duration-300 flex flex-col"
            >
              <div className="h-48 relative bg-surface-container overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3">
                  <span className="bg-surface/80 backdrop-blur-sm text-on-surface text-xs font-semibold px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                {/* Provider */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-primary-container/30 flex items-center justify-center text-primary">
                    <Icon name="person" filled size={18} />
                  </div>
                  <div>
                    <p className="font-headline text-sm font-bold text-on-surface flex items-center gap-1">
                      {service.provider.name}
                      {service.provider.verified && (
                        <Icon name="verified" filled size={14} className="text-primary" />
                      )}
                    </p>
                    <p className="font-body text-xs text-on-surface-variant flex items-center gap-1">
                      <Icon name="star" filled size={12} className="text-tertiary" />
                      {service.rating} ({service.reviews})
                    </p>
                  </div>
                </div>
                {/* Price */}
                <div className="mt-auto pt-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(171,173,175,0.15)" }}>
                  <span className="font-body text-xs text-on-surface-variant">
                    {service.priceUnit}
                  </span>
                  <span className="font-headline font-bold text-lg text-primary">
                    {service.price.toLocaleString()} {service.currency}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
