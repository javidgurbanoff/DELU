"use client";

import Icon from "@/app/components/shared/Icon";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How does ADEL verify students?",
    answer: "Every user must sign up with a valid institution email (.edu or equivalent). We also use university-specific SSO where available to ensure only real students can trade.",
    category: "Safety",
  },
  {
    question: "Is my payment secure?",
    answer: "Yes. ADEL uses a secure escrow-style system. When you buy an item, the funds are held by our payment provider and only released to the seller once you confirm receipt of the item or service.",
    category: "Payments",
  },
  {
    question: "Where do meetups happen?",
    answer: "We recommend meeting in well-lit, public areas on campus, such as the library, student union, or near campus security offices. Always tell a friend where you're going.",
    category: "Trading",
  },
  {
    question: "Can I sell services like tutoring?",
    answer: "Absolutely. ADEL is designed for products, services (like tutoring or photography), and even student-made food. Just choose the right category when listing.",
    category: "Selling",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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


export default function HelpPage() {
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="px-6 md:px-12 py-12 max-w-4xl mx-auto space-y-12"
    >
      {/* Header */}
      <motion.section variants={itemVariants} className="text-center space-y-4">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
          How can we help?
        </h1>
        <p className="font-body text-on-surface-variant text-lg max-w-xl mx-auto">
          Search our knowledge base or browse categories to find answers to your questions.
        </p>
        <div className="relative max-w-lg mx-auto mt-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Icon name="search" className="text-outline-variant" />
          </div>
          <input
            type="text"
            placeholder="Search help articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest rounded-2xl font-body text-on-surface focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline-variant shadow-sm border-none outline-none"
          />
        </div>
      </motion.section>

      {/* Support Channels */}
      <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-primary/5 rounded-3xl p-8 flex flex-col items-center text-center group cursor-pointer hover:bg-primary/10 transition-colors">
          <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
            <Icon name="support_agent" size={32} />
          </div>
          <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Live Support</h3>
          <p className="font-body text-sm text-on-surface-variant mb-6">
            Chat with a campus curator for immediate assistance.
          </p>
          <button className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-label text-sm font-bold">
            Start Chat
          </button>
        </div>
        <div className="bg-secondary/5 rounded-3xl p-8 flex flex-col items-center text-center group cursor-pointer hover:bg-secondary/10 transition-colors">
          <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
            <Icon name="mail" size={32} />
          </div>
          <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Email Us</h3>
          <p className="font-body text-sm text-on-surface-variant mb-6">
            Get a response within 24 hours from our support team.
          </p>
          <button className="px-6 py-2.5 rounded-full bg-secondary text-on-secondary font-label text-sm font-bold">
            Send Email
          </button>
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="font-headline text-2xl font-bold text-on-surface">Common Questions</h2>
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-surface-container-lowest rounded-2xl p-6 open:bg-surface-container-low transition-all"
              >
                <summary className="list-none flex justify-between items-center cursor-pointer">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      {faq.category}
                    </span>
                    <h3 className="font-headline font-bold text-on-surface">
                      {faq.question}
                    </h3>
                  </div>
                  <Icon
                    name="expand_more"
                    className="text-on-surface-variant transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="mt-4 font-body text-on-surface-variant text-sm leading-relaxed border-t pt-4 border-outline-variant/10">
                  {faq.answer}
                </div>
              </details>
            ))
          ) : (
            <div className="text-center py-12 bg-surface-container-lowest rounded-2xl">
              <Icon name="sentiment_dissatisfied" size={48} className="text-outline-variant mb-4" />
              <p className="font-body text-on-surface-variant">No results found for &quot;{search}&quot;</p>
            </div>
          )}
        </div>
      </motion.section>

      {/* Safety Banner */}
      <motion.section variants={itemVariants} className="bg-linear-to-r from-primary to-primary-dim rounded-3xl p-8 text-on-primary flex flex-col md:flex-row items-center gap-8 shadow-lg shadow-primary/20">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="font-headline text-2xl font-bold">Safety First</h2>
          <p className="font-body text-sm text-on-primary/80 leading-relaxed">
            Trading on campus should be safe and fun. Read our full safety guide to learn about best practices for meetups and payments.
          </p>
          <button className="px-6 py-2.5 rounded-full bg-white text-primary font-label text-sm font-bold hover:bg-primary-container transition-colors">
            Safety Guide
          </button>
        </div>
        <div className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-sm">
          <Icon name="verified_user" size={80} className="text-white/40" />
        </div>
      </motion.section>
    </motion.div>
  );
}
