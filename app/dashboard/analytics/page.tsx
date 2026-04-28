"use client";

import Icon from "@/app/components/shared/Icon";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const kpis = [
  { label: "Total Sales", value: "84,500 HUF", trend: "+12.5%", icon: "payments", color: "text-primary bg-primary/10" },
  { label: "Profile Views", value: "1,240", trend: "+8.2%", icon: "visibility", color: "text-secondary bg-secondary/10" },
  { label: "Active Listings", value: "8", trend: "0%", icon: "inventory_2", color: "text-tertiary bg-tertiary/10" },
  { label: "Avg. Rating", value: "4.9", trend: "+0.1", icon: "star", color: "text-tertiary bg-tertiary/10" },
];

const salesData = [3200, 4500, 2100, 8900, 5400, 7200, 6100]; // Weekly sales
const maxSales = Math.max(...salesData);

const engagementData = [
  { day: "Mon", views: 120 },
  { day: "Tue", views: 180 },
  { day: "Wed", views: 150 },
  { day: "Thu", views: 240 },
  { day: "Fri", views: 320 },
  { day: "Sat", views: 280 },
  { day: "Sun", views: 190 },
];
const maxViews = Math.max(...engagementData.map(d => d.views));

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AnalyticsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="px-6 md:px-12 py-10 max-w-6xl mx-auto space-y-10"
    >
      {/* Header */}
      <motion.section variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-2">
            Analytics
          </h1>
          <p className="font-body text-on-surface-variant text-base">
            Track your performance, sales, and community engagement.
          </p>
        </div>
        <div className="flex gap-2 bg-surface-container-low p-1 rounded-xl">
          {['7D', '1M', '3M', '1Y'].map((range) => (
            <button key={range} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${range === '7D' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high'}`}>
              {range}
            </button>
          ))}
        </div>
      </motion.section>

      {/* KPI Grid */}
      <motion.section variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-outline-variant/5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${kpi.color}`}>
              <Icon name={kpi.icon} size={20} />
            </div>
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">
              {kpi.label}
            </p>
            <div className="flex items-baseline justify-between">
              <span className="font-headline text-xl font-bold text-on-surface">{kpi.value}</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                kpi.trend.startsWith('+') ? 'text-primary bg-primary/10' : 'text-on-surface-variant bg-surface-container'
              }`}>
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Chart */}
        <motion.section variants={itemVariants} className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/5">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="font-headline text-lg font-bold text-on-surface">Revenue Growth</h3>
              <p className="font-body text-xs text-on-surface-variant">Daily earnings this week</p>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Weekly</span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 px-2 relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
              {[1, 2, 3, 4, 5].map(l => <div key={l} className="w-full h-px bg-on-surface" />)}
            </div>
            {salesData.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 group relative z-10">
                <div className="relative w-full flex justify-center items-end h-full">
                  <motion.div
                    initial={{ height: "0%" }}
                    animate={{ height: isLoaded ? `${Math.max((val / maxSales) * 100, 8)}%` : "0%" }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-[32px] md:max-w-[40px] bg-primary rounded-t-xl group-hover:brightness-110 transition-all relative"
                    style={{ 
                      background: "linear-gradient(to top, var(--color-primary), var(--color-primary-container))" 
                    }}
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface-container-lowest text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none whitespace-nowrap z-30">
                      {val.toLocaleString()} HUF
                    </div>
                  </motion.div>
                </div>
                <span className="font-label text-[10px] font-bold text-on-surface-variant uppercase">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Engagement Chart */}
        <motion.section variants={itemVariants} className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/5">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="font-headline text-lg font-bold text-on-surface">Engagement Flow</h3>
              <p className="font-body text-xs text-on-surface-variant">Profile interaction trends</p>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary" />
              <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Profile Views</span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 px-2 relative">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
              {[1, 2, 3, 4, 5].map(l => <div key={l} className="w-full h-px bg-on-surface" />)}
            </div>
            {engagementData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 group relative z-10">
                <div className="relative w-full flex justify-center items-end h-full">
                  <motion.div
                    initial={{ height: "0%" }}
                    animate={{ height: isLoaded ? `${Math.max((d.views / maxViews) * 100, 8)}%` : "0%" }}
                    transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-[32px] md:max-w-[40px] bg-secondary rounded-t-xl group-hover:brightness-110 transition-all relative"
                    style={{ 
                      background: "linear-gradient(to top, var(--color-secondary), var(--color-secondary-dim))" 
                    }}
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface-container-lowest text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none whitespace-nowrap z-30">
                      {d.views} views
                    </div>
                  </motion.div>
                </div>
                <span className="font-label text-[10px] font-bold text-on-surface-variant uppercase">
                  {d.day}
                </span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Performers */}
        <motion.section variants={itemVariants} className="lg:col-span-2">
          <h3 className="font-headline text-lg font-bold text-on-surface mb-6">Top Performing Listings</h3>
          <div className="space-y-3">
            {[
              { title: "Organic Chemistry II", sales: 4, revenue: "60,000 HUF", views: 245, image: "/images/listing_textbook.png" },
              { title: "Sony Noise Cancelling Headphones", sales: 1, revenue: "45,000 HUF", views: 890, image: "/images/listing_textbook.png" },
              { title: "Kitchen Essentials Bundle", sales: 2, revenue: "12,000 HUF", views: 156, image: "/images/listing_textbook.png" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/5 hover:border-outline-variant/20 hover:bg-surface-container-low transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
                    <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <p className="font-headline text-sm font-bold text-on-surface">{item.title}</p>
                    <p className="font-body text-xs text-on-surface-variant">{item.views} views • {item.sales} sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-headline text-sm font-bold text-primary">{item.revenue}</p>
                  <p className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Revenue</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Recent Transactions */}
        <motion.section variants={itemVariants}>
          <h3 className="font-headline text-lg font-bold text-on-surface mb-6">Recent Sales</h3>
          <div className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/5 space-y-6">
            {[
              { user: "Sarah J.", amount: "+3,200", status: "Completed", time: "2h ago" },
              { user: "Kevin M.", amount: "+15,000", status: "Pending", time: "5h ago" },
              { user: "Elena R.", amount: "+2,900", status: "Completed", time: "1d ago" },
              { user: "Mark T.", amount: "+1,500", status: "Refunded", time: "2d ago" },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px]">
                    {tx.user.charAt(0)}
                  </div>
                  <div>
                    <p className="font-headline text-xs font-bold text-on-surface">{tx.user}</p>
                    <p className="text-[10px] text-on-surface-variant">{tx.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-headline text-xs font-bold text-primary">{tx.amount} HUF</p>
                  <p className={`text-[10px] font-bold ${
                    tx.status === 'Completed' ? 'text-primary' : tx.status === 'Pending' ? 'text-secondary' : 'text-error'
                  }`}>
                    {tx.status}
                  </p>
                </div>
              </div>
            ))}
            <button className="w-full py-2 rounded-xl bg-surface-container-low text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-high transition-colors">
              View All Transactions
            </button>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

