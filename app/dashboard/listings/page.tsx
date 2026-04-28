"use client";

import Icon from "@/app/components/shared/Icon";
import Link from "next/link";


const stats = [
  { label: "Total Active Listings", value: "5", trend: "+2 this month", trendUp: true, color: "text-primary" },
  { label: "Total Profile Views", value: "1.2k", trend: "Last 30 days", trendUp: false, color: "text-on-surface" },
  { label: "Interest / Messages", value: "24", trend: "4 unread", trendUp: false, color: "text-secondary" },
];

const listings = [
  {
    id: "lst-1", title: "Calculus II Tutoring", price: "4,500 HUF", priceUnit: "/hr",
    type: "Service", status: "Active", views: 128, favorites: 4,
    description: "Experienced engineering student offering 1-on-1 sessions. Midterms prep available.",
    image: "/images/listing_braids.png", // Using braids as service placeholder
  },
  {
    id: "lst-2", title: "Used Dorm Fridge", price: "12,000 HUF", priceUnit: "",
    type: "Product", status: "Active", views: 342, favorites: 12,
    description: "Perfect condition, 45L capacity. Moving out, need it gone by Friday.",
    image: "/images/listing_textbook.png",
  },
  {
    id: "lst-3", title: "Homemade Brownies", price: "1,500 HUF", priceUnit: "/box",
    type: "Food", status: "Pending Approval", views: 0, favorites: 0,
    description: "Freshly baked batch for finals week. Contains walnuts. Delivery on campus.",
    image: "/images/listing_jollof.png",
  },
];

export default function MyListingsPage() {
  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight mb-2">
            My Listings
          </h1>
          <p className="text-on-surface-variant font-body text-sm md:text-base">
            Manage your active offers, monitor performance, and update your catalog.
          </p>
        </div>
        <Link
          href="/sell/new"
          className="shrink-0 inline-flex items-center gap-2 py-3 px-6 rounded-full bg-linear-to-br from-secondary to-secondary-dim text-white font-headline font-semibold hover:brightness-110 active:scale-95 transition-all"
          style={{ boxShadow: "0 4px 14px rgba(0,80,212,0.2)" }}
        >
          <Icon name="add_circle" size={18} />
          Post a New Item
        </Link>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface-container-lowest rounded-2xl p-6"
            style={{ border: "1px solid rgba(171,173,175,0.15)" }}
          >
            <p className="text-on-surface-variant text-sm font-medium mb-1">{s.label}</p>
            <div className="flex items-baseline gap-3">
              <span className={`font-headline text-4xl font-bold ${s.color}`}>{s.value}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                s.trendUp ? "text-primary-dim bg-primary-container/30" : "text-on-surface-variant bg-surface-container"
              }`}>
                {s.trendUp && <Icon name="trending_up" size={10} className="inline mr-0.5" />}
                {s.trend}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Listing Cards */}
      <section>
        <h2 className="font-headline text-xl font-bold text-on-surface mb-6">Active Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {listings.map((lst) => {
            const isFood = lst.type === "Food";
            const isPending = lst.status === "Pending Approval";
            return (
              <div key={lst.id} className="group">
                <Link href={`/marketplace/items/${lst.id}`} className="bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col group hover:translate-y-[-4px] transition-all duration-300 shadow-sm hover:shadow-md h-full"
                  style={isFood ? { border: "1px solid rgba(248,160,16,0.1)" } : { border: "1px solid rgba(0,0,0,0.03)" }}
                >
                  <div className="h-48 relative overflow-hidden bg-surface-container">
                    <img src={lst.image} alt={lst.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                      <span className={`bg-surface/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                        isFood ? "text-tertiary" : "text-on-surface"
                      }`}>
                        {lst.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`backdrop-blur-md text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 uppercase tracking-widest ${
                        isPending
                          ? "bg-tertiary-container/90 text-on-tertiary-container"
                          : "bg-primary-container/90 text-on-primary-container"
                      }`}>
                        {isPending ? (
                          <><Icon name="hourglass_empty" size={12} /> Pending</>
                        ) : (
                          <><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Active</>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <h3 className="font-headline text-lg font-extrabold text-on-surface leading-tight group-hover:text-primary transition-colors">{lst.title}</h3>
                      <span className={`font-headline font-bold whitespace-nowrap ${isFood ? "text-tertiary" : "text-primary"}`}>
                        {lst.price}{lst.priceUnit && <span className="text-xs text-on-surface-variant font-normal"> {lst.priceUnit}</span>}
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant mb-6 line-clamp-2 font-body leading-relaxed">{lst.description}</p>
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-auto bg-surface-container-low/50 px-4 py-3 rounded-xl mb-4">
                      <span className="flex items-center gap-1.5"><Icon name="visibility" size={14} className="opacity-60" /> {lst.views} Views</span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant/30" />
                      <span className="flex items-center gap-1.5"><Icon name="favorite" size={14} className="opacity-60" /> {lst.favorites} Saves</span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={(e) => { e.preventDefault(); /* Edit logic */ }} className="flex-1 bg-surface-container text-on-surface font-label text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-lg hover:bg-surface-container-high transition-colors">Edit</button>
                      {!isPending && (
                        <button onClick={(e) => { e.preventDefault(); /* Mark sold logic */ }} className="flex-1 bg-secondary text-on-secondary font-label text-[10px] font-bold uppercase tracking-widest py-2.5 rounded-lg hover:brightness-110 transition-all">Mark Sold</button>
                      )}
                      <button onClick={(e) => { e.preventDefault(); /* Delete logic */ }} className="w-10 bg-error/10 text-error flex items-center justify-center rounded-lg hover:bg-error/20 transition-colors">
                        <Icon name="delete" size={18} />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
