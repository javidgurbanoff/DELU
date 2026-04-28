"use client";

import Icon from "@/app/components/shared/Icon";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const liveListings = [
  { title: "Organic Chem Textbook", seller: "Alex C.", price: "15,000", tag: "Book", tagBg: "bg-secondary-container/40 text-on-secondary-container" },
  { title: "Box Braids & Twists", seller: "Sarah K.", price: "15,000", tag: "Service", tagBg: "bg-primary-container/40 text-on-primary-container" },
  { title: "Midnight Ramen Kit", seller: "Mark T.", price: "2,900", tag: "Food", tagBg: "bg-tertiary-container/40 text-on-tertiary-container" },
  { title: "Mini Fridge 43L", seller: "Elena R.", price: "30,000", tag: "Dorm", tagBg: "bg-secondary-container/40 text-on-secondary-container" },
  { title: "Artisan Sourdough", seller: "Yuki N.", price: "2,200", tag: "Food", tagBg: "bg-tertiary-container/40 text-on-tertiary-container" },
];

const voices = [
  { quote: "Sold my textbooks in 2 hours. Couldn't believe it.", name: "Boglárka P.", context: "BME, Computer Science", icon: "local_mall" },
  { quote: "Found a jollof rice plug on campus. Life. Changed.", name: "Ade O.", context: "ELTE, Biology", icon: "restaurant" },
  { quote: "Got my braids done for half the salon price. By a student!", name: "Chioma A.", context: "Corvinus, Business", icon: "content_cut" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium feel
    },
  },
};

export default function Home() {
  const [emailFocused, setEmailFocused] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-background overflow-hidden">
      {/* ─── Minimal Header ─── */}
      <header className="fixed top-0 w-full z-50">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel"
        >
          <div className="max-w-[1200px] mx-auto px-6 h-14 flex justify-between items-center">
            <Link href="/" className="font-headline text-xl font-black tracking-tighter text-on-surface">
              adel<span className="text-primary">.</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/marketplace/products" className="hidden md:inline font-body text-[13px] font-medium text-on-surface-variant hover:text-on-surface transition-colors">
                Browse
              </Link>
              <Link href="/auth/login" className="font-body text-[13px] font-medium text-on-surface-variant hover:text-on-surface transition-colors">
                Sign in
              </Link>
              <Link
                href="/auth/login"
                className="py-2 px-5 rounded-lg bg-on-surface text-surface-container-lowest font-headline text-[13px] font-bold hover:bg-on-surface/85 active:scale-[0.97] transition-all"
              >
                Join waitlist
              </Link>
            </div>
          </div>
        </motion.div>
      </header>

      {/* ─── Hero: Editorial, Asymmetric ─── */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary-container/10 via-transparent to-transparent rounded-full blur-[80px] pointer-events-none" />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-[1200px] mx-auto relative z-10"
        >
          {/* Eyebrow */}
          <motion.p variants={itemVariants} className="font-label text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6 md:mb-8">
            Campus Marketplace — Budapest &apos;26
          </motion.p>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="font-headline text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold tracking-tight text-on-surface leading-[1.05] mb-6 max-w-3xl">
            Stop overpaying.<br />
            Start trading with<br />
            <span className="text-primary">your campus.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p variants={itemVariants} className="font-body text-lg text-on-surface-variant max-w-lg leading-relaxed mb-10">
            Textbooks, home-cooked food, tutoring sessions — everything students
            actually need, sold by students you can actually trust.
          </motion.p>

          {/* Inline email capture */}
          <motion.div variants={itemVariants} className={`flex flex-col sm:flex-row gap-3 max-w-md transition-all duration-300 ${emailFocused ? "scale-[1.01]" : ""}`}>
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Your university email"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                className={`w-full py-3.5 pl-4 pr-4 rounded-lg font-body text-sm text-on-surface placeholder:text-outline-variant outline-none transition-all duration-300 ${
                  emailFocused
                    ? "bg-surface-container-lowest ring-2 ring-primary/20"
                    : "bg-surface-container-low"
                }`}
              />
            </div>
            <Link
              href="/auth/login"
              className="py-3.5 px-6 rounded-lg bg-primary text-on-primary font-headline text-sm font-bold hover:bg-primary-dim active:scale-[0.97] transition-all whitespace-nowrap text-center"
            >
              Get early access →
            </Link>
          </motion.div>

          <motion.p variants={itemVariants} className="font-body text-xs text-outline mt-3">
            Free for students. We verify via your .edu or institution email.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── Live Feed Strip ─── */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-8 relative overflow-hidden" 
        style={{ borderTop: "1px solid rgba(171,173,175,0.12)", borderBottom: "1px solid rgba(171,173,175,0.12)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant">
              Live on Campus
            </span>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {liveListings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="shrink-0 flex items-center gap-4 bg-surface-container-lowest rounded-xl p-4 min-w-[280px] hover:bg-surface-container-low transition-colors cursor-pointer group"
                style={{ border: "1px solid rgba(171,173,175,0.08)" }}
              >
                <div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors shrink-0">
                  <Icon name={item.tag === "Food" ? "restaurant" : item.tag === "Service" ? "design_services" : "inventory_2"} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-headline text-sm font-bold text-on-surface truncate">{item.title}</p>
                  <p className="font-body text-xs text-on-surface-variant">{item.seller}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-headline text-sm font-bold text-on-surface">{item.price}</p>
                  <span className={`text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded ${item.tagBg}`}>
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── Three Columns: The Offer ─── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4"
          >
            How it works
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-16 max-w-lg leading-tight"
          >
            One platform.<br />Three ways to thrive.
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0"
          >
            {[
              {
                num: "01",
                title: "Trade Stuff",
                body: "Textbooks collecting dust? Dorm gear you no longer need? List it in 30 seconds. Buyers come to you — all verified by their university.",
                icon: "local_mall",
                accent: "text-secondary",
                accentBg: "bg-secondary/5",
              },
              {
                num: "02",
                title: "Book Skills",
                body: "Need a tutor for Calculus? A photographer for your LinkedIn headshot? Browse services from students who've been in your shoes.",
                icon: "design_services",
                accent: "text-primary",
                accentBg: "bg-primary/5",
              },
              {
                num: "03",
                title: "Eat Local",
                body: "Homemade jollof, artisan sourdough, matcha cookies — skip the overpriced canteen. Support student chefs cooking from their kitchens.",
                icon: "restaurant",
                accent: "text-tertiary",
                accentBg: "bg-tertiary/5",
              },
            ].map((col, i) => (
              <motion.div
                key={col.num}
                variants={itemVariants}
                className={`p-8 md:p-10 ${i < 2 ? "md:border-r" : ""}`}
                style={i < 2 ? { borderColor: "rgba(171,173,175,0.12)" } : undefined}
              >
                <div className={`w-12 h-12 rounded-xl ${col.accentBg} flex items-center justify-center ${col.accent} mb-6 transition-transform group-hover:scale-110`}>
                  <Icon name={col.icon} size={22} />
                </div>
                <p className={`font-headline text-xs font-bold uppercase tracking-[0.15em] ${col.accent} mb-3`}>
                  {col.num}
                </p>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">
                  {col.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {col.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Social Proof: Student Voices ─── */}
      <section className="py-16 px-6 bg-surface-container-lowest" style={{ borderTop: "1px solid rgba(171,173,175,0.12)" }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="font-label text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-12">
            From the community
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {voices.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col"
              >
                <div className="mb-6">
                  <Icon name={v.icon} size={24} className="text-outline-variant" />
                </div>
                <blockquote className="font-headline text-lg md:text-xl font-bold text-on-surface leading-snug mb-6 flex-1 italic">
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-headline text-sm font-bold text-on-surface">{v.name}</p>
                  <p className="font-body text-xs text-on-surface-variant">{v.context}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Strip ─── */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid rgba(171,173,175,0.12)" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="font-headline text-2xl md:text-3xl font-extrabold text-on-surface tracking-tight mb-3">
              Verified students only.
            </h2>
            <p className="font-body text-on-surface-variant max-w-md leading-relaxed">
              Every account is tied to a real university email. No bots, no strangers,
              no anonymous accounts. Your campus, your rules.
            </p>
          </motion.div>
          <div className="flex gap-6 md:gap-10">
            {[
              { value: "50k+", label: "Students" },
              { value: "120", label: "Universities" },
              { value: "4.9", label: "Rating" },
            ].map((s, i) => (
              <motion.div 
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center md:text-left"
              >
                <p className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight">{s.value}</p>
                <p className="font-body text-[10px] text-on-surface-variant mt-1 uppercase tracking-widest font-bold">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-24 px-6 text-center relative" style={{ borderTop: "1px solid rgba(171,173,175,0.12)" }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[1200px] mx-auto"
        >
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface leading-tight mb-6">
            Your campus has<br />everything you need.
          </h2>
          <p className="font-body text-on-surface-variant text-lg mb-10 max-w-md mx-auto">
            You just haven&apos;t found it yet.
          </p>
          <Link
            href="/auth/login"
            className="inline-flex py-4 px-10 rounded-lg bg-on-surface text-surface-container-lowest font-headline text-base font-bold hover:bg-on-surface/85 active:scale-[0.97] transition-all shadow-lg"
          >
            Start for free
          </Link>
        </motion.div>
      </section>

      {/* ─── Footer: Minimal ─── */}
      <footer className="py-8 px-6" style={{ borderTop: "1px solid rgba(171,173,175,0.12)" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-[11px] text-outline">
            © 2026 adel<span className="text-primary">.</span> Built for students, by students.
          </p>
          <div className="flex gap-6 text-[11px] text-outline font-body font-medium">
            <Link href="/privacy" className="hover:text-on-surface transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-on-surface transition-colors">Terms</Link>
            <Link href="/help" className="hover:text-on-surface transition-colors">Help</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
