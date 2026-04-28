"use client";

import Link from "next/link";
import Icon from "@/app/components/shared/Icon";

export default function RegisterPage() {
  return (
    <main
      className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden min-h-[700px] relative z-10"
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
    >
      {/* Left Side: Editorial Panel */}
      <div className="relative hidden w-full overflow-hidden lg:block lg:w-1/2 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#10B981]">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/a9/c0/ba/a9c0ba00401f2bb5f1e514310261c097.jpg"
            alt="Student marketplace"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#0F172A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#10B981]/20" />

        <div className="relative z-10 flex h-full flex-col justify-end p-12">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Built for verified students.
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-200">
              Textbooks, home-cooked food, tutoring sessions — everything
              students actually need, sold by students you can actually trust.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-white/20 pt-6">
              <div>
                <div className="text-2xl font-bold text-[#10B981]">50k+</div>
                <div className="mt-1 text-sm text-slate-300">
                  Verified Students
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-[#10B981]">120+</div>
                <div className="mt-1 text-sm text-slate-300">Universities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side: Login Form */}{" "}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-16 bg-white">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-8 text-center lg:text-left">
            <h1 className="text-4xl text-primary sm:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-3">
              Join DELU
            </h1>
            <p className="text-lg text-slate-600 font-medium">
              Create your verified student account
            </p>
          </div>

          {/* Trust Badge */}
          <div
            className="flex items-center justify-center lg:justify-start gap-3 mb-8 bg-surface-container p-3 rounded-xl w-fit mx-auto lg:mx-0"
            style={{ border: "1px solid rgba(171,173,175,0.15)" }}
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Icon name="verified_user" filled />
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-on-surface">
                100% Student Verified
              </p>
              <p className="font-body text-xs text-on-surface-variant">
                Exclusive academic network
              </p>
            </div>
          </div>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/auth/login";
            }}
          >
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Name Surname"
                required
                className="w-full px-4 py-4 bg-slate-50 rounded-xl text-[#0F172A] focus:ring-2 focus:ring-[#10B981]/30 transition-all placeholder:text-slate-400 border border-slate-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                University Email
              </label>
              <input
                type="email"
                placeholder="student@university.edu"
                required
                className="w-full px-4 py-4 bg-slate-50 rounded-xl text-[#0F172A] focus:ring-2 focus:ring-[#10B981]/30 transition-all placeholder:text-slate-400 border border-slate-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                University
              </label>
              <input
                type="text"
                placeholder="Your university name"
                required
                className="w-full px-4 py-4 bg-slate-50 rounded-xl text-[#0F172A] focus:ring-2 focus:ring-[#10B981]/30 transition-all placeholder:text-slate-400 border border-slate-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a secure password"
                required
                className="w-full px-4 py-4 bg-slate-50 rounded-xl text-[#0F172A] focus:ring-2 focus:ring-[#10B981]/30 transition-all placeholder:text-slate-400 border border-slate-200 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-full bg-linear-to-r from-primary to-primary-dim text-white font-headline font-semibold text-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              style={{ boxShadow: "0 4px 14px rgba(0,105,71,0.2)" }}
            >
              Create verified account
              <Icon name="arrow_forward" className="text-white" />
            </button>
          </form>

          <div className="mt-8 mb-8 flex items-center justify-center gap-4">
            <div className="h-px bg-surface-container-high flex-1" />
            <span className="font-body text-sm text-outline font-medium">
              Already verified?
            </span>
            <div className="h-px bg-surface-container-high flex-1" />
          </div>

          {/* Secondary Action */}
          <Link
            href="/auth/login"
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-surface-container-low text-on-surface font-headline font-medium hover:bg-surface-container transition-colors w-full"
            style={{ border: "1px solid rgba(171,173,175,0.15)" }}
          >
            <Icon name="login" className="text-slate-500" />
            Sign in instead
          </Link>

          {/* Footer Links */}
          <div className="mt-12 text-center text-xs font-body text-outline flex flex-wrap justify-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link href="/help" className="hover:text-primary transition-colors">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
