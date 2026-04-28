"use client";

import Icon from "@/app/components/shared/Icon";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const pillars = [
  {
    title: "Products",
    subtitle: "Student-verified essentials",
    icon: "local_mall",
    color: "bg-secondary-container/30 text-secondary",
    href: "/marketplace/products",
    count: "2.4k listings",
    image: "/images/listing_textbook.png",
  },
  {
    title: "Services",
    subtitle: "Peer-powered services",
    icon: "design_services",
    color: "bg-primary-container/30 text-primary",
    href: "/marketplace/services",
    count: "860 providers",
    image: "/images/listing_braids.png",
  },
  {
    title: "Food",
    subtitle: "Campus bites & treats",
    icon: "restaurant",
    color: "bg-tertiary-container/30 text-tertiary",
    href: "/marketplace/food",
    count: "320 dishes",
    image: "/images/listing_jollof.png",
  },
];

const trending = [
  {
    title: "Organic Chem Textbook",
    price: "15,000 HUF",
    tag: "Products",
    time: "2h ago",
    image: "/images/listing_textbook.png",
  },
  {
    title: "Box Braids & Twists",
    price: "15,000 HUF",
    tag: "Services",
    time: "4h ago",
    image: "/images/listing_braids.png",
  },
  {
    title: "Midnight Ramen Kit",
    price: "2,900 HUF",
    tag: "Food",
    time: "1h ago",
    image: "/images/listing_jollof.png",
  },
  {
    title: "Sony WH-1000XM4",
    price: "65,000 HUF",
    tag: "Products",
    time: "6h ago",
    image:
      "https://i.pinimg.com/1200x/02/54/04/025404b18363459c689bfd62edb43d8e.jpg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function DashboardPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="px-6 md:px-12 py-8 max-w-6xl mx-auto space-y-10"
    >
      {/* Greeting */}
      <motion.section variants={itemVariants}>
        <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2">
          Good Morning, Curator
        </h1>
        <p className="font-body text-on-surface-variant text-base max-w-xl">
          Your campus marketplace awaits. Browse essentials, discover services,
          or grab a bite — all from verified students around you.
        </p>
      </motion.section>

      {/* Quick Stats */}
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          {
            label: "Active Listings",
            value: "5",
            icon: "inventory_2",
            trend: "+2",
          },
          {
            label: "Unread Messages",
            value: "4",
            icon: "mark_email_unread",
            trend: "",
          },
          {
            label: "Profile Views",
            value: "1.2k",
            icon: "visibility",
            trend: "+8%",
          },
          {
            label: "Wallet Balance",
            value: "24,500 HUF",
            icon: "account_balance_wallet",
            trend: "",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-surface-container-lowest p-5 rounded-2xl relative overflow-hidden group shadow-sm"
          >
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="flex items-start justify-between mb-3">
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                {stat.label}
              </p>
              <Icon name={stat.icon} className="text-primary text-lg" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline text-2xl font-bold text-on-surface">
                {stat.value}
              </span>
              {stat.trend && (
                <span className="text-[10px] text-primary bg-primary-container/30 px-2 py-0.5 rounded-full font-bold">
                  {stat.trend}
                </span>
              )}
            </div>
          </div>
        ))}
      </motion.section>

      {/* Marketplace Pillars */}
      <motion.section variants={itemVariants}>
        <h2 className="font-headline text-xl font-bold text-on-surface mb-6">
          Explore Marketplace
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="group bg-surface-container-lowest rounded-2xl p-6 hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md h-full flex flex-col"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img
                  src={pillar.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500" />
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 relative z-10 ${pillar.color}`}
              >
                <Icon name={pillar.icon} className="text-2xl" />
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-1">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant mb-4 leading-relaxed">
                {pillar.subtitle}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-label font-bold uppercase tracking-wider text-outline-variant">
                  {pillar.count}
                </span>
                <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon name="arrow_forward" size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Trending */}
      <motion.section variants={itemVariants}>
        <div className="flex justify-between items-end mb-6">
          <h2 className="font-headline text-xl font-bold text-on-surface">
            Trending Now
          </h2>
          <Link
            href="/marketplace/products"
            className="font-label text-xs text-primary font-bold uppercase tracking-widest hover:underline"
          >
            View All
          </Link>
        </div>
        <div className="space-y-2">
          {trending.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-surface-container-high shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="font-headline font-bold text-outline-variant text-sm w-6 text-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-surface-container shrink-0">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-headline text-sm font-bold text-on-surface">
                    {item.title}
                  </p>
                  <p className="font-body text-[11px] text-on-surface-variant">
                    {item.time}
                  </p>
                </div>
              </div>
              <div className="text-right flex items-center gap-3">
                <span
                  className={`text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${
                    item.tag === "Food"
                      ? "bg-tertiary-container/30 text-on-tertiary-container"
                      : item.tag === "Services"
                        ? "bg-primary-container/30 text-on-primary-container"
                        : "bg-secondary-container/30 text-on-secondary-container"
                  }`}
                >
                  {item.tag}
                </span>
                <span className="font-headline font-bold text-sm text-primary">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
