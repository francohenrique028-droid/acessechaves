import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  KeyRound, Phone, Menu, X, ShieldCheck, Award, Zap, Clock, DoorOpen, Key, Cpu, Wrench,
  Car, Home, ArrowRight, Star, MessageCircle, Facebook, Instagram, Mail, MapPin,
} from "lucide-react";
import logoFull from "@/assets/chaveiro-jurere-logo.png.asset.json";


// ===== Configuração editável =====
const PHONE = "5583991094553";
const PHONE_DISPLAY = "(83) 99109-4553";
const PHONE_SECONDARY = "(83) 98744-2198";
const WHATSAPP_NUMBER = "5583991094553";
const WA_MESSAGE =
  "Olá, Acesse Chaves! Encontrei vocês pelo site e gostaria de solicitar um orçamento em João Pessoa.";
const EMAIL = "";
const ADDRESS = "Av. Presidente Juscelino Kubitschek, 609 - Ernesto Geisel, João Pessoa - PB, 58075-400";
const FACEBOOK_URL = "";
const INSTAGRAM_URL = "https://www.instagram.com/acessechaves/";
const STATS = [
  { value: "24H", label: "Plantão" },
  { value: "João Pessoa", label: "PB" },
  { value: "Auto", label: "Chaves automotivas" },
  { value: "24H", label: "Atendimento" },
];
// =================================

const WA_LINK = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`
  : "#orcamento";
const TEL = `tel:+${PHONE}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acesse Chaves | Chaveiro em João Pessoa" },
      { name: "description", content: "Chaveiro João Pessoa 24H em João Pessoa. Plantão 24 horas para abertura de portas, chaves codificadas, cópias, veículos e fechaduras. WhatsApp (83) 99109-4553." },
      { property: "og:title", content: "Chaveiro João Pessoa 24H | João Pessoa - SC" },
      { property: "og:description", content: "Atendimento 24 horas em João Pessoa para serviços de chaveiro residencial e automotivo. Solicite pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Locksmith",
      name: "ACESSE CHAVES",
      telephone: "+5583991094553",
      openingHours: "Mo-Su 00:00-23:59",
      address: { "@type": "PostalAddress", streetAddress: "Av. Presidente Juscelino Kubitschek, 609", addressLocality: "João Pessoa", addressRegion: "PB", postalCode: "58075-400", addressCountry: "BR" },
      areaServed: { "@type": "Place", name: "João Pessoa e Grande João Pessoa" },
    }) }],
  }),
  component: Index,
});

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Atendimento" },
  { href: "#orcamento", label: "Chamar Agora" },
];

const btn = "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5";
const btnPrimary = `${btn} bg-gradient-brand text-primary-foreground shadow-glow hover:brightness-110`;
const btnOutline = `${btn} border border-border bg-card text-foreground hover:border-primary/60`;
const btnWa = `${btn} bg-whatsapp text-foreground hover:brightness-110`;

function Logo({ variant = "header" }: { variant?: "header" | "full" }) {
  const isFull = variant === "full";
  return (
    <a href="#inicio" aria-label="Chaveiro João Pessoa 24H — início" className="flex shrink-0 items-center">
      <img
        src={logoFull.url}
        alt="Acesse Chaves — Chaveiro em João Pessoa"
        className={isFull ? "h-11 w-auto max-w-[170px] object-contain sm:h-12 sm:max-w-[190px]" : "h-10 w-auto max-w-[150px] object-contain sm:h-12 sm:max-w-[180px]"}
      />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-[62px] max-w-7xl items-center justify-between px-5 sm:h-[68px]">
        <Logo />
        <nav className="hidden gap-8 md:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
          ))}
        </nav>
        <a href={TEL} className={`${btnPrimary} !hidden !px-5 !py-2.5 md:!inline-flex`}><Phone className="h-4 w-4" />Ligar Agora</a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-5 md:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-border py-3 text-muted-foreground">{n.label}</a>
          ))}
          <a href={TEL} className={`${btnPrimary} mt-4 w-full`}><Phone className="h-4 w-4" />Ligar Agora</a>
        </nav>
      )}
    </header>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-5 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-5 pb-24 pt-40 sm:pt-48">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[400, 650, 900, 1150].map((s) => (
          <div key={s} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/[0.04]" style={{ width: s, height: s }} />
        ))}
      </div>
      <div className="relative mx-auto max-w-4xl text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="mt-8 text-[clamp(1.65rem,7.2vw,3rem)] font-extrabold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="whitespace-nowrap">Acesse Chaves 24 Horas</span>{" "}
          <span className="text-gradient-brand">em João Pessoa</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          Atendimento de chaveiro residencial, comercial e automotivo em João Pessoa e Grande João Pessoa. Abertura de portas, cópias de chaves, chaves codificadas e soluções para fechaduras. Plantão 24 horas.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={WA_LINK} className={`${btnPrimary} hidden sm:inline-flex`}>Chamar no WhatsApp</a>
          <a href={TEL} className={`${btnOutline} hero-mobile-flash`}><Phone className="h-4 w-4" />Ligar Agora</a>
          <a href={WA_LINK} target="_blank" rel="noopener" className={`${btnWa} hero-mobile-flash`}><MessageCircle className="h-4 w-4" />WhatsApp</a>
        </div>
        <div className="mx-auto mt-12 grid max-w-[360px] grid-cols-2 justify-items-center gap-x-3 gap-y-5 sm:mt-14 sm:max-w-none sm:grid-cols-3 sm:gap-6">
          {[
            { icon: ShieldCheck, a: "João Pessoa - PB", b: "e região" },
            { icon: Clock, a: "24 horas", b: "Plantão" },
            { icon: MapPin, a: "João Pessoa - PB", b: "João Pessoa" },
          ].map(({ icon: I, a, b }, i) => (
            <div key={i} className={`flex items-center justify-center gap-2.5 ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-surface text-primary"><I className="h-5 w-5" /></span>
              <div className="text-left leading-tight"><p className="text-sm font-bold">{a}</p><p className="text-xs text-muted-foreground">{b}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: DoorOpen, tile: "bg-tile-blue/15 text-tile-blue", title: "Abertura de Portas", desc: "Abertura de portas residenciais, comerciais e automotivas em João Pessoa. Consulte o atendimento para sua situação.", tags: ["Residencial", "Comercial", "Automotivo"] },
  { icon: Key, tile: "bg-tile-green/15 text-tile-green", title: "Cópia de Chaves", desc: "Cópias de chaves comuns e automotivas, incluindo modelos codificados sob consulta.", tags: ["Chaves Simples", "Tetra", "Codificadas"] },
  { icon: Cpu, tile: "bg-tile-purple/15 text-tile-purple", title: "Programação de Chaves", desc: "Programação e codificação de chaves automotivas com transponder, controles e sistemas de imobilizador.", tags: ["Transponder", "Controle", "Presença"] },
  { icon: Wrench, tile: "bg-tile-orange/15 text-tile-orange", title: "Abertura e Confecção", desc: "Abertura de portas e confecção de chaves. Consulte a equipe sobre o serviço necessário.", tags: ["Abertura", "Confecção", "Atendimento"] },
];

function Services() {
  return (
    <section id="servicos" className="bg-background px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="NOSSOS SERVIÇOS" title={<>Serviços de <span className="text-primary">Chaveiro em João Pessoa - PB</span></>} sub="Atendimento para abertura de portas, fechaduras e chaves automotivas em João Pessoa e Grande João Pessoa." />
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map(({ icon: I, tile, title, desc, tags }) => (
            <article key={title} className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <span className={`grid h-14 w-14 place-items-center rounded-xl ${tile}`}><I className="h-7 w-7" /></span>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 flex-1 text-muted-foreground">{desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((t) => <span key={t} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            { icon: Car, t: "Automotivo", d: "Serviços de chaves e fechaduras automotivas. Consulte a disponibilidade para seu veículo." },
            { icon: Home, t: "Residencial", d: "Serviços residenciais de abertura, cópia de chaves e fechaduras." },
          ].map(({ icon: I, t, d }) => (
            <div key={t} className="flex items-center gap-5 rounded-2xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><I className="h-6 w-6" /></span>
              <div><h3 className="font-bold">{t}</h3><p className="text-sm text-muted-foreground">{d}</p></div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#orcamento" className={`${btn} border border-primary text-primary hover:bg-primary hover:text-primary-foreground`}>Ver Todos os Serviços <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="sobre" className="bg-surface px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="ÁREA DE ATENDIMENTO" title="Acesse Chaves em João Pessoa e Região" sub="Chaveiro em João Pessoa - PB. Consulte nossa equipe para atendimento na região." />
        <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-border bg-card px-6 py-10 text-center">
          <MapPin className="h-9 w-9 text-primary" />
          <p className="mt-4 text-lg font-bold">Av. Presidente Juscelino Kubitschek, 609 • João Pessoa - PB</p>
          <p className="mt-3 text-sm text-muted-foreground">Plantão 24 horas. Para solicitar atendimento ou orçamento, entre em contato pelo WhatsApp.</p>
          <a href={TEL} className={`${btnPrimary} mt-7`}><Phone className="h-4 w-4" /> Solicitar Atendimento</a>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="orcamento" className="px-5 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-14">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"><Zap className="h-3.5 w-3.5" />Atendimento 24 horas</span>
        <h2 className="mt-7 text-4xl font-extrabold tracking-tight sm:text-6xl">Precisa de Chaveiro<br /><span className="text-primary">em João Pessoa?</span></h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">Precisa de chaveiro em João Pessoa? Fale com o Chaveiro João Pessoa 24H pelo WhatsApp. Atendimento 24 horas.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={TEL} className={btnPrimary}><Phone className="h-4 w-4" />Ligar Agora</a>
          <a href={WHATSAPP_NUMBER ? WA_LINK : TEL} target={WHATSAPP_NUMBER ? "_blank" : undefined} rel="noopener" className={btnWa}><MessageCircle className="h-4 w-4" />WhatsApp</a>
        </div>
        <hr className="my-12 border-border" />
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}><p className="text-3xl font-extrabold text-primary sm:text-4xl">{s.value}</p><p className="mt-1 text-sm text-muted-foreground">{s.label}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const col = "mb-4 font-semibold";
  const link = "text-sm text-muted-foreground transition-colors hover:text-primary";
  return (
    <footer className="bg-surface px-5 pt-16 pb-8">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-2xl font-black tracking-wide text-primary">ACESSE CHAVES</div>
          <p className="mt-4 text-sm text-muted-foreground">Chaveiro João Pessoa 24H em João Pessoa - SC. Av. Presidente Juscelino Kubitschek, 609. Plantão 24 horas.</p>
          <div className="mt-5 flex gap-3">
            
            {INSTAGRAM_URL && <a href={INSTAGRAM_URL} aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-primary hover:text-primary"><Instagram className="h-4 w-4" /></a>}
          </div>
        </div>
        <div>
          <h3 className={col}>Links Rápidos</h3>
          <Link to="/palavraschaves" className={link}>Bairros e serviços em João Pessoa</Link>
          <ul className="space-y-2">{NAV.map((n) => <li key={n.href}><a href={n.href} className={link}>{n.label}</a></li>)}</ul>
        </div>
        <div>
          <h3 className={col}>Serviços</h3>
          <ul className="space-y-2">{SERVICES.map((s) => <li key={s.title}><a href="#servicos" className={link}>{s.title}</a></li>)}</ul>
        </div>
        <div>
          <h3 className={col}>Contato</h3>
          <ul className="space-y-3">
            <li><a href={TEL} className={`${link} flex items-center gap-2`}><Phone className="h-4 w-4 text-primary" />{PHONE_DISPLAY}</a></li>
            <li><a href="tel:+5583987442198" className={`${link} flex items-center gap-2`}><Phone className="h-4 w-4 text-primary" />{PHONE_SECONDARY}</a></li>
            
            <li><a href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noopener" className={`${link} flex items-center gap-2`}><MapPin className="h-4 w-4 shrink-0 text-primary" />{ADDRESS}</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-center text-sm text-muted-foreground">© 2026 Chaveiro João Pessoa 24H. Todos os direitos reservados.</div>
    </footer>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
