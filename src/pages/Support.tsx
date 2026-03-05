import Icon from "@/components/ui/icon";

const managers = [
  {
    id: 1,
    name: "Александр",
    role: "Старший менеджер",
    status: "online",
    emoji: "👨‍💼",
    tgLink: "https://t.me/your_manager1",
    responseTime: "~2 мин",
  },
  {
    id: 2,
    name: "Мария",
    role: "Менеджер по продажам",
    status: "online",
    emoji: "👩‍💼",
    tgLink: "https://t.me/your_manager2",
    responseTime: "~5 мин",
  },
  {
    id: 3,
    name: "Поддержка 24/7",
    role: "Общий чат помощи",
    status: "online",
    emoji: "🤖",
    tgLink: "https://t.me/your_support_chat",
    responseTime: "Всегда онлайн",
  },
];

const faqItems = [
  {
    q: "Как происходит покупка?",
    a: "Напишите менеджеру, укажите нужный тариф — он пришлёт реквизиты и оформит подписку сразу после оплаты.",
  },
  {
    q: "Какие способы оплаты?",
    a: "Принимаем карты РФ, СБП, криптовалюту (USDT, BTC). Уточните у менеджера актуальные варианты.",
  },
  {
    q: "Когда придёт Premium / Stars?",
    a: "Обычно в течение 5–15 минут после подтверждения оплаты.",
  },
  {
    q: "Есть ли гарантии?",
    a: "Да, 100% гарантия. Если возникнут проблемы — вернём деньги или повторим активацию.",
  },
];

export default function Support() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="relative overflow-hidden px-4 pt-14 pb-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Помощь</p>
          <h1 className="text-3xl font-black text-white leading-tight">
            Наши
          </h1>
          <h1 className="text-3xl font-black leading-tight" style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Менеджеры
          </h1>
          <p className="text-white/50 text-sm mt-2">Работаем каждый день, отвечаем быстро</p>
        </div>
      </div>

      {/* Managers */}
      <div className="px-4 space-y-3 mb-8">
        {managers.map((m, i) => (
          <div
            key={m.id}
            className="glass-card rounded-2xl p-4 animate-slide-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 flex items-center justify-center text-2xl border border-white/10">
                  {m.emoji}
                </div>
                {m.status === "online" && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-background" />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-white text-base">{m.name}</p>
                <p className="text-white/40 text-xs mb-1">{m.role}</p>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={10} className="text-green-400" />
                  <span className="text-green-400 text-xs">{m.responseTime}</span>
                </div>
              </div>

              {/* Button */}
              <a
                href={m.tgLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs text-white transition-all active:scale-95"
                style={{ background: "linear-gradient(135deg, #229ed9, #2aabee)" }}
              >
                <Icon name="Send" size={13} />
                Написать
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Divider label */}
      <div className="px-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-xs uppercase tracking-widest">Частые вопросы</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>

      {/* FAQ */}
      <div className="px-4 space-y-3">
        {faqItems.map((item, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl p-4 animate-slide-up"
            style={{ animationDelay: `${0.3 + i * 0.1}s` }}
          >
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="HelpCircle" size={13} className="text-purple-400" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white mb-1">{item.q}</p>
                <p className="text-white/50 text-xs leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 mt-6">
        <div
          className="rounded-2xl p-5 text-center animate-slide-up"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))", border: "1px solid rgba(168,85,247,0.3)", animationDelay: "0.7s" }}
        >
          <p className="text-white font-bold mb-1">Не нашли ответ?</p>
          <p className="text-white/50 text-sm mb-4">Напишите нам — ответим на любой вопрос</p>
          <a
            href="https://t.me/your_support_chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all active:scale-95"
            style={{ background: "linear-gradient(135deg, #229ed9, #2aabee)" }}
          >
            <Icon name="MessageCircle" size={16} />
            Написать в поддержку
          </a>
        </div>
      </div>
    </div>
  );
}
