import { useState } from "react";
import Icon from "@/components/ui/icon";

const premiumPlans = [
  {
    id: "premium-1",
    title: "Telegram Premium",
    subtitle: "1 месяц",
    price: "299 ₽",
    oldPrice: "549 ₽",
    badge: "🔥 Хит",
    features: ["Без рекламы", "Эксклюзивные стикеры", "Ускоренная загрузка", "Голосовые сообщения 60 мин"],
    type: "premium",
    tgLink: "https://t.me/Dmitriy_Alexeevich1",
  },
  {
    id: "premium-3",
    title: "Telegram Premium",
    subtitle: "3 месяца",
    price: "799 ₽",
    oldPrice: "1 299 ₽",
    badge: "💎 Выгода 38%",
    features: ["Без рекламы", "Эксклюзивные стикеры", "Ускоренная загрузка", "Голосовые сообщения 60 мин", "Уникальные значки"],
    type: "premium",
    tgLink: "https://t.me/Dmitriy_Alexeevich1",
  },
  {
    id: "premium-12",
    title: "Telegram Premium",
    subtitle: "12 месяцев",
    price: "2 499 ₽",
    oldPrice: "5 000 ₽",
    badge: "🚀 Максимум",
    features: ["Без рекламы", "Эксклюзивные стикеры", "Ускоренная загрузка", "Голосовые сообщения 60 мин", "Уникальные значки", "Приоритетная поддержка"],
    type: "premium",
    tgLink: "https://t.me/Dmitriy_Alexeevich1",
  },
];

const starsPlans = [
  {
    id: "stars-50",
    title: "Telegram Stars",
    subtitle: "50 звёзд",
    price: "149 ₽",
    oldPrice: null,
    badge: "⭐ Старт",
    features: ["Оплата ботов", "Подарки друзьям", "Мгновенное зачисление"],
    type: "stars",
    tgLink: "https://t.me/Dmitriy_Alexeevich1",
  },
  {
    id: "stars-200",
    title: "Telegram Stars",
    subtitle: "200 звёзд",
    price: "499 ₽",
    oldPrice: "599 ₽",
    badge: "⭐ Популярный",
    features: ["Оплата ботов", "Подарки друзьям", "Мгновенное зачисление", "Скидка 17%"],
    type: "stars",
    tgLink: "https://t.me/Dmitriy_Alexeevich1",
  },
  {
    id: "stars-1000",
    title: "Telegram Stars",
    subtitle: "1 000 звёзд",
    price: "1 999 ₽",
    oldPrice: "2 500 ₽",
    badge: "🌟 Pro",
    features: ["Оплата ботов", "Подарки друзьям", "Мгновенное зачисление", "Скидка 20%", "Бонус +50 звёзд"],
    type: "stars",
    tgLink: "https://t.me/Dmitriy_Alexeevich1",
  },
];

function ProductCard({ plan, index }: { plan: typeof premiumPlans[0]; index: number }) {
  const isPremium = plan.type === "premium";

  return (
    <div
      className="relative rounded-2xl overflow-hidden glass-card animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient top border */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 ${isPremium ? "grad-premium" : "grad-stars"}`}
      />

      {/* Glow bg */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none ${
          isPremium ? "bg-purple-500" : "bg-amber-400"
        }`}
      />

      <div className="p-5">
        {/* Badge */}
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full glass mb-3 text-white/80">
          {plan.badge}
        </span>

        {/* Title */}
        <h3 className={`text-xl font-bold mb-1 ${isPremium ? "text-grad-premium" : "text-grad-stars"}`}>
          {plan.title}
        </h3>
        <p className="text-white/50 text-sm mb-4">{plan.subtitle}</p>

        {/* Price */}
        <div className="flex items-end gap-2 mb-5">
          <span className="text-3xl font-black text-white">{plan.price}</span>
          {plan.oldPrice && (
            <span className="text-white/30 text-sm line-through mb-1">{plan.oldPrice}</span>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-white/70">
              <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${isPremium ? "bg-purple-500/30" : "bg-amber-500/30"}`}>
                <Icon name="Check" size={10} className={isPremium ? "text-purple-300" : "text-amber-300"} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={plan.tgLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 active:scale-95 ${
            isPremium
              ? "grad-premium neon-glow-purple hover:opacity-90"
              : "grad-stars neon-glow-amber hover:opacity-90"
          }`}
        >
          <Icon name="Send" size={16} />
          Купить у менеджера
        </a>
      </div>
    </div>
  );
}

export default function Catalog() {
  const [activeTab, setActiveTab] = useState<"premium" | "stars">("premium");

  const plans = activeTab === "premium" ? premiumPlans : starsPlans;

  return (
    <div className="min-h-screen pb-24">
      {/* Hero header */}
      <div className="relative overflow-hidden px-4 pt-14 pb-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-4 right-0 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="relative">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Магазин</p>
          <h1 className="text-3xl font-black text-white leading-tight mb-1">
            Telegram
          </h1>
          <h1 className="text-3xl font-black text-grad-premium leading-tight">
            Premium & Stars
          </h1>
          <p className="text-white/50 text-sm mt-2">Мгновенное оформление через менеджера</p>
        </div>
      </div>

      {/* Tab switcher */}
      <div className="px-4 mb-6">
        <div className="glass rounded-2xl p-1.5 flex gap-1">
          <button
            onClick={() => setActiveTab("premium")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === "premium"
                ? "grad-premium text-white"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            💎 Premium
          </button>
          <button
            onClick={() => setActiveTab("stars")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === "stars"
                ? "grad-stars text-white"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            ⭐ Stars
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="px-4 space-y-4">
        {plans.map((plan, i) => (
          <ProductCard key={plan.id} plan={plan} index={i} />
        ))}
      </div>

      {/* Info block */}
      <div className="px-4 mt-6">
        <div className="glass rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
            <Icon name="ShieldCheck" size={20} className="text-cyan-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Безопасная покупка</p>
            <p className="text-xs text-white/40">Оплата после подтверждения, 100% гарантия</p>
          </div>
        </div>
      </div>
    </div>
  );
}