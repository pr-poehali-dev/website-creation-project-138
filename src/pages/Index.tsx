import { useState } from "react";
import Icon from "@/components/ui/icon";

const TREE_IMG = "https://cdn.poehali.dev/projects/6ead581f-3841-42c2-9488-2d97f20a81fd/files/5ebee14d-a084-473a-b305-05ab889709a8.jpg";
const LAWN_IMG = "https://cdn.poehali.dev/projects/6ead581f-3841-42c2-9488-2d97f20a81fd/files/3bc8b2d3-2dd6-48d2-942e-657563ffbe39.jpg";
const TRASH_IMG = "https://cdn.poehali.dev/projects/6ead581f-3841-42c2-9488-2d97f20a81fd/files/ecf82b78-16eb-4937-a016-d959de1ca449.jpg";

const services = [
  {
    icon: "Scissors",
    title: "Опиловка деревьев",
    desc: "Профессиональная обрезка, формировка кроны, удаление аварийных деревьев. Работаем с деревьями любой сложности и высоты.",
    img: TREE_IMG,
    price: "от 1 500 ₽",
  },
  {
    icon: "Leaf",
    title: "Покос травы",
    desc: "Скашиваем газоны, поля, заросшие участки. Используем профессиональную технику — быстро и чисто.",
    img: LAWN_IMG,
    price: "от 800 ₽",
  },
  {
    icon: "Truck",
    title: "Вывоз мусора",
    desc: "Вывозим строительный мусор, ветки, листья, старую мебель. Быстрый выезд, честная цена за объём.",
    img: TRASH_IMG,
    price: "от 2 000 ₽",
  },
];

const portfolio = [
  { img: TREE_IMG, title: "Опиловка сосны 25 м", tag: "Деревья" },
  { img: LAWN_IMG, title: "Газон 3 гектара", tag: "Трава" },
  { img: TRASH_IMG, title: "Вывоз 8 тонн мусора", tag: "Вывоз" },
  { img: TREE_IMG, title: "Формировка парка", tag: "Деревья" },
  { img: LAWN_IMG, title: "Дачный участок 60 соток", tag: "Трава" },
  { img: TRASH_IMG, title: "Стройплощадка очистка", tag: "Вывоз" },
];

const reviews = [
  {
    name: "Алексей Воронов",
    role: "Владелец загородного дома",
    text: "Убрали огромный дуб рядом с домом — аккуратно, быстро, без следа. Мусор вывезли сразу. Очень доволен!",
    rating: 5,
  },
  {
    name: "Марина Сергеева",
    role: "Управляющий ТСЖ",
    text: "Обслуживаем двор уже второй год. Покос газона и обрезка деревьев — всё по договору, без задержек.",
    rating: 5,
  },
  {
    name: "Дмитрий Кузьмин",
    role: "Владелец фермы",
    text: "Скосили 5 гектар за 2 дня. Цена порадовала, качество — тоже. Будем сотрудничать регулярно.",
    rating: 5,
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0e1a05", color: "#f4f0e0" }}>

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ backgroundColor: "rgba(14,26,5,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(181,231,66,0.1)" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#b5e742" }}>
            <span className="text-sm font-bold" style={{ color: "#0e1a05", fontFamily: "Oswald, sans-serif" }}>GCG</span>
          </div>
          <span className="text-lg font-bold tracking-wider" style={{ fontFamily: "Oswald, sans-serif", color: "#b5e742" }}>
            GREEN CLEAN GROUP
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[["hero", "Главная"], ["about", "О нас"], ["services", "Услуги"], ["portfolio", "Портфолио"], ["reviews", "Отзывы"], ["contacts", "Контакты"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} className="nav-link">{label}</button>
          ))}
        </div>

        <button
          className="btn-lime px-5 py-2 rounded-full text-sm hidden md:block"
          onClick={() => scrollTo("contacts")}
        >
          Вызвать мастера
        </button>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "#b5e742" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ backgroundColor: "rgba(14,26,5,0.98)", backdropFilter: "blur(20px)" }}>
          {[["hero", "Главная"], ["about", "О нас"], ["services", "Услуги"], ["portfolio", "Портфолио"], ["reviews", "Отзывы"], ["contacts", "Контакты"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="text-2xl font-bold tracking-widest uppercase transition-colors hover:text-[#b5e742]"
              style={{ fontFamily: "Oswald, sans-serif" }}>
              {label}
            </button>
          ))}
          <button className="btn-lime px-8 py-3 rounded-full mt-4" onClick={() => scrollTo("contacts")}>
            Вызвать мастера
          </button>
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={TREE_IMG} alt="hero" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0e1a05 30%, rgba(14,26,5,0.6) 70%, #0e1a05 100%)" }} />
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 animate-spin-slow hidden lg:block"
          style={{ border: "2px dashed #b5e742", right: "-150px" }} />
        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 animate-float hidden lg:block"
          style={{ background: "radial-gradient(circle, rgba(181,231,66,0.3) 0%, transparent 70%)" }} />

        <div className="relative z-10 px-6 md:px-12 max-w-5xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ backgroundColor: "rgba(181,231,66,0.15)", color: "#b5e742", border: "1px solid rgba(181,231,66,0.3)", fontFamily: "Oswald, sans-serif" }}>
              Профессиональный уход за территорией
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6"
            style={{ fontFamily: "Oswald, sans-serif", lineHeight: 1.05 }}>
            ДЕЛАЕМ<br />
            <span style={{ color: "#b5e742" }}>ТЕРРИТОРИЮ</span><br />
            ИДЕАЛЬНОЙ
          </h1>

          <p className="animate-fade-up-delay-2 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            style={{ color: "rgba(244,240,224,0.7)" }}>
            Опиловка деревьев, покос травы, вывоз мусора — всё под ключ. Приедем в день обращения.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
            <button className="btn-lime px-8 py-4 rounded-full text-base" onClick={() => scrollTo("contacts")}>
              Получить расчёт
            </button>
            <button onClick={() => scrollTo("services")}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:border-[#b5e742] hover:text-[#b5e742]"
              style={{ border: "1px solid rgba(244,240,224,0.3)", color: "rgba(244,240,224,0.8)", fontFamily: "Oswald, sans-serif", letterSpacing: "0.08em" }}>
              Наши услуги
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>

        <div className="relative z-10 mt-20 px-6 md:px-12 grid grid-cols-3 gap-6 max-w-2xl">
          {[["500+", "Объектов сдано"], ["7 лет", "На рынке"]].map(([num, label]) => (
            <div key={num} className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Oswald, sans-serif", color: "#b5e742" }}>{num}</span>
              <span className="text-xs md:text-sm" style={{ color: "rgba(244,240,224,0.5)", fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}>{label}</span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(244,240,224,0.4)", fontFamily: "Oswald, sans-serif" }}>Листай</span>
          <Icon name="ChevronDown" size={20} style={{ color: "#b5e742" }} />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden py-4" style={{ backgroundColor: "#b5e742" }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(2).fill(["ОПИЛОВКА ДЕРЕВЬЕВ", "ПОКОС ТРАВЫ", "ВЫВОЗ МУСОРА", "БЫСТРЫЙ ВЫЕЗД", "ГАРАНТИЯ КАЧЕСТВА"]).flat().map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 mr-12 text-sm font-bold tracking-widest"
              style={{ fontFamily: "Oswald, sans-serif", color: "#0e1a05" }}>
              <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: "#0e1a05" }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* О НАС */}
      <section id="about" className="py-24 px-6 md:px-12 section-mid">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: "#b5e742", fontFamily: "Oswald, sans-serif" }}>— О компании</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "Oswald, sans-serif" }}>
              8 ЛЕТ ДЕЛАЕМ<br />
              <span style={{ color: "#b5e742" }}>ЧИСТО И КРАСИВО</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(244,240,224,0.7)" }}>
              Мы — команда профессионалов по уходу за территорией. За 8 лет выполнили более 500 проектов: от частных дачных участков до городских парков и промышленных объектов.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(244,240,224,0.7)" }}>
              Используем сертифицированное оборудование, соблюдаем все нормы безопасности и даём письменную гарантию на все виды работ.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                ["Shield", "Гарантия на все работы"],
                ["Clock", "Выезд в день обращения"],
                ["Users", "Команда из 15 специалистов"],
                ["Award", "Сертифицированное оборудование"],
              ].map(([icon, label], i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(181,231,66,0.1)", border: "1px solid rgba(181,231,66,0.2)" }}>
                    <Icon name={icon} size={18} style={{ color: "#b5e742" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "rgba(244,240,224,0.8)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img src={LAWN_IMG} alt="О нас" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,26,5,0.8), transparent)" }} />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl"
              style={{ backgroundColor: "#b5e742", color: "#0e1a05" }}>
              <div className="text-4xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>500+</div>
              <div className="text-xs font-bold tracking-wide uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>Проектов завершено</div>
            </div>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="py-24 px-6 md:px-12 section-dark">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: "#b5e742", fontFamily: "Oswald, sans-serif" }}>— Что мы делаем</span>
            <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>
              НАШИ <span style={{ color: "#b5e742" }}>УСЛУГИ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="service-card rounded-2xl overflow-hidden group cursor-pointer">
                <div className="relative h-52 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, rgba(14,26,5,0.9))" }} />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#b5e742" }}>
                    <Icon name={s.icon} size={18} style={{ color: "#0e1a05" }} />
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: "rgba(181,231,66,0.2)", color: "#b5e742", border: "1px solid rgba(181,231,66,0.4)", fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}>
                    {s.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(244,240,224,0.6)" }}>{s.desc}</p>
                  <button className="mt-5 flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
                    style={{ color: "#b5e742", fontFamily: "Oswald, sans-serif", letterSpacing: "0.08em" }}>
                    УЗНАТЬ ЦЕНУ <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПОРТФОЛИО */}
      <section id="portfolio" className="py-24 px-6 md:px-12 section-mid">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: "#b5e742", fontFamily: "Oswald, sans-serif" }}>— Наши работы</span>
              <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>ПОРТФОЛИО</h2>
            </div>
            <button className="btn-lime px-6 py-3 rounded-full text-sm">Все проекты</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolio.map((item, i) => (
              <div key={i} className="portfolio-item rounded-xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: i === 0 ? "16/9" : "1/1", gridColumn: i === 0 ? "span 2" : "span 1" }}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <div className="overlay">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block"
                      style={{ backgroundColor: "#b5e742", color: "#0e1a05", fontFamily: "Oswald, sans-serif" }}>
                      {item.tag}
                    </span>
                    <h4 className="text-base font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="reviews" className="py-24 px-6 md:px-12 section-dark">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: "#b5e742", fontFamily: "Oswald, sans-serif" }}>— Что говорят клиенты</span>
            <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>ОТЗЫВЫ</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="review-card rounded-2xl p-7">
                <div className="flex gap-1 mb-4">
                  {Array(r.rating).fill(0).map((_, j) => (
                    <span key={j} style={{ color: "#b5e742" }}>★</span>
                  ))}
                </div>
                <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(244,240,224,0.8)" }}>
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ backgroundColor: "rgba(181,231,66,0.15)", color: "#b5e742", border: "1px solid rgba(181,231,66,0.2)", fontFamily: "Oswald, sans-serif" }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ fontFamily: "Oswald, sans-serif" }}>{r.name}</div>
                    <div className="text-xs" style={{ color: "rgba(244,240,224,0.5)" }}>{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="py-24 px-6 md:px-12 section-mid">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: "#b5e742", fontFamily: "Oswald, sans-serif" }}>— Свяжитесь с нами</span>
            <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>
              ОСТАВЬТЕ <span style={{ color: "#b5e742" }}>ЗАЯВКУ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "rgba(45,74,20,0.3)", border: "1px solid rgba(181,231,66,0.15)" }}>
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>Расчёт стоимости</h3>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ backgroundColor: "rgba(14,26,5,0.7)", border: "1px solid rgba(181,231,66,0.2)", color: "#f4f0e0", fontFamily: "Golos Text, sans-serif" }}
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ backgroundColor: "rgba(14,26,5,0.7)", border: "1px solid rgba(181,231,66,0.2)", color: "#f4f0e0", fontFamily: "Golos Text, sans-serif" }}
                />
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ backgroundColor: "rgba(14,26,5,0.7)", border: "1px solid rgba(181,231,66,0.2)", color: formData.service ? "#f4f0e0" : "rgba(244,240,224,0.4)", fontFamily: "Golos Text, sans-serif" }}
                >
                  <option value="" style={{ backgroundColor: "#0e1a05" }}>Выберите услугу</option>
                  <option value="tree" style={{ backgroundColor: "#0e1a05" }}>Опиловка деревьев</option>
                  <option value="lawn" style={{ backgroundColor: "#0e1a05" }}>Покос травы</option>
                  <option value="trash" style={{ backgroundColor: "#0e1a05" }}>Вывоз мусора</option>
                  <option value="complex" style={{ backgroundColor: "#0e1a05" }}>Комплексный уход</option>
                </select>
                <button className="btn-lime w-full py-4 rounded-xl text-base mt-2">
                  Отправить заявку
                </button>
              </div>
              <p className="text-xs mt-4 text-center" style={{ color: "rgba(244,240,224,0.4)" }}>
                Перезвоним в течение 30 минут в рабочее время
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00" },
                { icon: "Mail", label: "Email", value: "info@ecosila.ru" },
                { icon: "MapPin", label: "Адрес", value: "Ваш город, ул. Примерная, 1" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Сб: 8:00 – 20:00" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(181,231,66,0.1)", border: "1px solid rgba(181,231,66,0.2)" }}>
                    <Icon name={c.icon} size={20} style={{ color: "#b5e742" }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(244,240,224,0.4)", fontFamily: "Oswald, sans-serif" }}>{c.label}</div>
                    <div className="text-lg font-semibold" style={{ fontFamily: "Oswald, sans-serif" }}>{c.value}</div>
                  </div>
                </div>
              ))}

              <div className="mt-4 p-6 rounded-2xl" style={{ backgroundColor: "#b5e742" }}>
                <div className="text-xl font-black mb-1" style={{ fontFamily: "Oswald, sans-serif", color: "#0e1a05" }}>
                  ВЫЕЗД В ДЕНЬ ОБРАЩЕНИЯ
                </div>
                <div className="text-sm" style={{ color: "rgba(14,26,5,0.7)" }}>
                  Звоните — приедем и оценим бесплатно
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 md:px-12 border-t" style={{ borderColor: "rgba(181,231,66,0.1)", backgroundColor: "#0a1203" }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "#b5e742" }}>
              <span className="text-xs font-bold" style={{ color: "#0e1a05", fontFamily: "Oswald, sans-serif" }}>ЭС</span>
            </div>
            <span className="font-bold" style={{ fontFamily: "Oswald, sans-serif", color: "#b5e742" }}>ЭкоСила</span>
          </div>
          <div className="text-xs" style={{ color: "rgba(244,240,224,0.3)" }}>
            © 2026 ЭкоСила — Профессиональный уход за территорией
          </div>
          <div className="flex gap-4">
            {["Facebook", "Instagram", "Youtube"].map((s) => (
              <button key={s} className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "rgba(181,231,66,0.1)", border: "1px solid rgba(181,231,66,0.2)", color: "#b5e742" }}>
                <Icon name={s} size={14} fallback="Share2" />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}