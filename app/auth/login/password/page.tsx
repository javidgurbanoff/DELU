"use client";

import Link from "next/link";
import Icon from "@/app/components/shared/Icon";
import { useState } from "react";

export default function PasswordPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="w-full max-w-md mx-auto">
      <div
        className="bg-surface-container-lowest rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.04)" }}
      >
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container rounded-bl-full opacity-20 -mr-10 -mt-10 pointer-events-none" />

        {/* Back */}
        <Link
          href="/auth/login"
          className="inline-flex items-center gap-2 text-on-surface-variant font-body text-sm font-medium mb-8 hover:text-primary transition-colors"
        >
          <Icon name="arrow_back" size={18} />
          Back
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="font-headline text-3xl font-extrabold tracking-tight text-primary mb-2">
            Welcome Back
          </h1>
          <p className="font-body text-on-surface-variant">
            Enter your password to access your campus hub.
          </p>
        </div>

        {/* User Badge */}
        <div className="flex items-center gap-3 mb-8 bg-surface-container p-3 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary">
            <Icon name="person" filled />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-body text-sm font-semibold text-on-surface truncate">
              student@university.edu
            </p>
            <p className="font-body text-xs text-primary flex items-center gap-1">
              <Icon name="verified" filled size={12} />
              Verified Student
            </p>
          </div>
          <Link href="/auth/login" className="text-secondary text-xs font-medium hover:underline">
            Change
          </Link>
        </div>

        {/* Password Form */}
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/dashboard";
          }}
        >
          <div>
            <label
              className="block font-body text-sm font-medium text-on-surface mb-2"
              htmlFor="password-input"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon name="lock" className="text-outline" />
              </div>
              <input
                id="password-input"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
                className="w-full pl-12 pr-12 py-4 bg-surface-container-highest rounded-xl font-body text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline border-none outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-primary transition-colors"
              >
                <Icon name={showPassword ? "visibility_off" : "visibility"} size={20} />
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              href="/auth/forgot-password"
              className="font-body text-sm text-secondary font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-full bg-linear-to-r from-primary to-primary-dim text-white font-headline font-semibold text-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            style={{ boxShadow: "0 4px 14px rgba(0,105,71,0.2)" }}
          >
            Sign In
            <Icon name="arrow_forward" className="text-white" />
          </button>
        </form>
      </div>
    </main>
  );
}
