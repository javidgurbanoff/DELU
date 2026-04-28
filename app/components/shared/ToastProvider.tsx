"use client";

import { useToastStore } from "@/lib/store/toast";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../shared/Icon";

export default function ToastProvider() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-on-surface text-surface-container-lowest shadow-lg shadow-black/10 min-w-[280px]"
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
              toast.type === "success" ? "bg-primary text-white" : "bg-error text-white"
            }`}>
              <Icon name={toast.type === "success" ? "check" : "error"} size={16} filled />
            </div>
            <p className="font-headline text-sm font-bold flex-1">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="w-6 h-6 rounded-md hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <Icon name="close" size={18} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
