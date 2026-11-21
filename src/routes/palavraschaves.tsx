import { createFileRoute, Link } from "@tanstack/react-router";
import { KeyRound, Car, Home, Phone, MapPin } from "lucide-react";

const whatsapp = "https://wa.me/5583991094553?text=" + encodeURIComponent("Olá, Acesse Chaves! Gostaria de consultar um serviço de chaveiro em João Pessoa.");
const services = [
  { icon: Home, title: "Chaveiro residencial", description: "Abertura de portas, cópias e confecção de chaves para residências. Consulte o atendimento." },
  { icon: Car, title: "Chaveiro automotivo", description: "Serviços de chaves automotivas e codificadas. Consulte a disponibilidade para seu veículo." },
  { icon: KeyRound, title: "Chaves e fechaduras", description: "Abertura, cópias de chaves e serviços relacionados a fechaduras." },
];
export const Route = createFileRoute("/palavraschaves")({
  head: () => ({
    meta: [
      { title: "Serviços de Chaveiro em João Pessoa | Acesse Chaves" },
      { name: "description", content: "Acesse Chaves: chaveiro residencial e automotivo em João Pessoa e Grande João Pessoa. Atendimento 24 horas. WhatsApp (83) 99109-4553." },
      { property: "og:title", content: "Acesse Chaves | Serviços em João Pessoa - PB" },
      { property: "og:description", content: "Chaveiro 24 horas em João Pessoa e Grande João Pessoa. Consulte nossos serviços e solicite orçamento." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});
function ServicesPage() {
  return <main className="min-h-screen bg-background px-5 py-16 text-foreground">
    <div className="mx-auto max-w-5xl">
      <Link to="/" className="text-sm font-semibold text-primary hover:underline">← Voltar para Acesse Chaves</Link>
      <p className="mt-14 text-xs font-bold uppercase tracking-widest text-primary">Acesse Chaves • João Pessoa - PB</p>
      <h1 className="mt-4 text-4xl font-extrabold sm:text-6xl">Serviços de chaveiro em João Pessoa</h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">Atendimento 24 horas em João Pessoa e Grande João Pessoa. Chaveiro residencial e automotivo, abertura e confecção de chaves. Entre em contato para confirmar a disponibilidade do serviço.</p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {services.map(({icon: Icon, title, description}) => <article key={title} className="rounded-2xl border border-border bg-card p-7">
          <Icon className="h-8 w-8 text-primary" /><h2 className="mt-5 text-xl font-bold">{title}</h2><p className="mt-3 text-muted-foreground">{description}</p>
        </article>)}
      </div>
      <section className="mt-14 rounded-2xl border border-border bg-card p-8">
        <h2 className="text-2xl font-bold">Onde encontrar a Acesse Chaves</h2>
        <p className="mt-4 flex items-start gap-2"><MapPin className="h-5 w-5 shrink-0 text-primary" />Av. Presidente Juscelino Kubitschek, 609, Ernesto Geisel, João Pessoa - PB, CEP 58075-400</p>
        <p className="mt-3 flex items-center gap-2"><Phone className="h-5 w-5 text-primary" />(83) 99109-4553 • (83) 98744-2198</p>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground">Solicitar orçamento pelo WhatsApp</a>
      </section>
    </div>
  </main>;
}
