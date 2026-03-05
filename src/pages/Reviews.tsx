import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    name: "Алексей М.",
    avatar: "🧑",
    rating: 5,
    date: "2 дня назад",
    product: "Premium 3 месяца",
    text: "Всё пришло за 10 минут после оплаты. Менеджер вежливый, объяснил всё чётко. Буду брать ещё!",
    verified: true,
  },
  {
    id: 2,
    name: "Катерина В.",
    avatar: "👩",
    rating: 5,
    date: "5 дней назад",
    product: "Stars 200",
    text: "Первый раз покупала Stars — переживала, но всё прошло отлично. Звёзды зачислились моментально. Рекомендую 🔥",
    verified: true,
  },
  {
    id: 3,
    name: "Роман Д.",
    avatar: "👨‍💻",
    rating: 5,
    date: "1 неделю назад",
    product: "Premium 12 месяцев",
    text: "Взял годовой Premium — цена вдвое ниже официальной. Подписка активна, всё работает. Доверяю этому магазину.",
    verified: true,
  },
  {
    id: 4,
    name: "Диана К.",
    avatar: "👩‍🦰",
    rating: 5,
    date: "2 недели назад",
    product: "Stars 1000",
    text: "Купила 1000 звёзд для бизнеса. Дмитрий помог разобраться с оплатой, ответил очень быстро. Отличный сервис!",
    verified: true,
  },
  {
    id: 5,
    name: "Игорь С.",
    avatar: "🧔",
    rating: 5,
    date: "3 недели назад",
    product: "Premium 1 месяц",
    text: "Взял для теста — понравилось. Теперь беру сразу на год. Сэкономил кучу денег по сравнению с App Store.",
    verified: true,
  },
];

const stats = [
  { value: "1 200+", label: "Довольных клиентов" },
  { value: "4.9", label: "Средняя оценка" },
  { value: "15 мин", label: "Среднее время доставки" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="Star"
          size={12}
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-white/20"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="relative overflow-hidden px-4 pt-14 pb-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>
        <div className="relative">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Доверие</p>
          <h1 className="text-3xl font-black text-white leading-tight">Отзывы</h1>
          <h1 className="text-3xl font-black text-grad-stars leading-tight">покупателей</h1>
          <p className="text-white/50 text-sm mt-2">Реальные люди, реальные покупки</p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-3 text-center animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="text-xl font-black text-white">{s.value}</p>
              <p className="text-white/40 text-[10px] leading-tight mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews list */}
      <div className="px-4 space-y-3">
        {reviews.map((r, i) => (
          <div
            key={r.id}
            className="glass-card rounded-2xl p-4 animate-slide-up"
            style={{ animationDelay: `${0.2 + i * 0.08}s` }}
          >
            {/* Top row */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-xl border border-white/8 flex-shrink-0">
                {r.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-white text-sm">{r.name}</p>
                  {r.verified && (
                    <span className="flex items-center gap-0.5 text-[10px] text-cyan-400 font-semibold">
                      <Icon name="BadgeCheck" size={11} className="text-cyan-400" />
                      Верифицирован
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <StarRating rating={r.rating} />
                  <span className="text-white/30 text-[10px]">{r.date}</span>
                </div>
              </div>
            </div>

            {/* Product badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-500/15 border border-purple-500/20 mb-2">
              <Icon name="ShoppingBag" size={10} className="text-purple-400" />
              <span className="text-purple-300 text-[10px] font-semibold">{r.product}</span>
            </div>

            {/* Review text */}
            <p className="text-white/65 text-sm leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-4 mt-6">
        <div
          className="rounded-2xl p-5 text-center animate-slide-up"
          style={{
            background: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.1))",
            border: "1px solid rgba(245,158,11,0.25)",
            animationDelay: "0.6s",
          }}
        >
          <p className="text-2xl mb-2">⭐</p>
          <p className="text-white font-bold mb-1">Присоединяйтесь к 1200+ клиентам</p>
          <p className="text-white/50 text-sm mb-4">Быстро, выгодно и безопасно</p>
          <a
            href="https://t.me/Dmitriy_Alexeevich1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all active:scale-95 grad-premium"
          >
            <Icon name="Send" size={16} />
            Купить сейчас
          </a>
        </div>
      </div>
    </div>
  );
}
