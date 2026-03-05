import { useState } from "react";
import Icon from "@/components/ui/icon";
import Catalog from "@/pages/Catalog";
import Support from "@/pages/Support";
import Reviews from "@/pages/Reviews";

type Tab = "catalog" | "reviews" | "support";

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>("catalog");

  const tabs = [
    { id: "catalog" as Tab, label: "Каталог", icon: "ShoppingBag" },
    { id: "reviews" as Tab, label: "Отзывы", icon: "Star" },
    { id: "support" as Tab, label: "Поддержка", icon: "MessageCircle" },
  ];

  return (
    <div className="min-h-screen bg-background font-golos" style={{ background: "radial-gradient(ellipse at top, #1a1040 0%, #0d1117 50%, #0a1628 100%)" }}>
      {/* Ambient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-80 h-80 rounded-full bg-purple-700/10 blur-3xl animate-float" />
        <div className="absolute top-[30%] right-[-15%] w-64 h-64 rounded-full bg-cyan-600/8 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-[20%] left-[20%] w-48 h-48 rounded-full bg-indigo-600/8 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 pt-3 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/30 text-[10px] font-semibold uppercase tracking-widest">TG Shop</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Icon name="Wifi" size={12} className="text-white/30" />
          <Icon name="Battery" size={14} className="text-white/30" />
        </div>
      </div>

      {/* Page content */}
      <main className="relative z-10">
        {activeTab === "catalog" && <Catalog />}
        {activeTab === "reviews" && <Reviews />}
        {activeTab === "support" && <Support />}
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6">
        <div
          className="flex items-center rounded-2xl p-1.5 gap-1"
          style={{
            background: "rgba(15, 12, 30, 0.88)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 -8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(168,85,247,0.08)",
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center gap-1 py-2.5 px-3 rounded-xl transition-all duration-300 ${
                  isActive ? "bg-white/8" : "hover:bg-white/4"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-300 ${
                    isActive ? "bg-purple-500/30 scale-110" : "scale-100"
                  }`}
                >
                  <Icon
                    name={tab.icon}
                    size={18}
                    className={isActive ? "text-purple-300" : "text-white/30"}
                  />
                </div>
                <span
                  className={`text-[10px] font-semibold transition-all duration-300 ${
                    isActive ? "text-purple-300" : "text-white/25"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default App;
