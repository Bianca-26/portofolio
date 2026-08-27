"use client";

import { useState, useEffect } from "react";
import { Monitor, X } from "lucide-react";

export default function DesktopRecommendationBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Verifică dacă utilizatorul l-a închis deja în sesiunea curentă
    const isDismissed = sessionStorage.getItem("dismissed_desktop_warning");
    if (!isDismissed) {
      // Mic delay ca să apară frumos după încărcarea paginii
      const timer = setTimeout(() => setIsVisible(true), 400);

      // Auto-dismiss după 6 secunde
      const autoDismissTimer = setTimeout(() => {
        handleClose();
      }, 6500);

      return () => {
        clearTimeout(timer);
        clearTimeout(autoDismissTimer);
      };
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("dismissed_desktop_warning", "true");
    }, 300); // durata animației de ieșire
  };

  if (!isVisible) return null;

  return (
    <div
      className={`md:hidden fixed bottom-6 left-4 right-4 z-50 transition-all duration-300 transform ${
        isClosing
          ? "opacity-0 translate-y-4 scale-95"
          : "opacity-100 translate-y-0 scale-100 animate-in fade-in slide-in-from-bottom-5"
      }`}
    >
      <div className="bg-[#101F30]/90 backdrop-blur-md border border-[#82C3F5]/30 rounded-2xl p-4 shadow-2xl flex items-start gap-3.5 text-white">
        <div className="p-2 rounded-xl bg-[#82C3F5]/10 text-[#82C3F5] shrink-0">
          <Monitor className="w-5 h-5" />
        </div>

        <div className="flex-1 pr-1">
          <h4 className="text-xs font-semibold text-[#82C3F5] uppercase tracking-wider">
            Best Experience
          </h4>
          <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
            For pixel-perfect details and full layouts, viewing on a{" "}
            <span className="text-white font-medium">Desktop or Laptop</span> is
            recommended.
          </p>
        </div>

        <button
          onClick={handleClose}
          aria-label="Close notification"
          className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}