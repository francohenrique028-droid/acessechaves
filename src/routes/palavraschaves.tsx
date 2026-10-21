import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, KeyRound, Car, Wrench, MessageCircle, ArrowLeft, Clock, Search } from "lucide-react";

const PHONE = "5587988248370";
const WA = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent("Olá! Encontrei o Rei das Chaves pelo Google e gostaria de consultar um serviço de chaveiro em Petrolina.");
const groups = [
  { title: "Centro e bairros próximos", items: ["Centro", "Gercino Coelho", "São José", "Maria Auxiliadora", "Atrás da Banca", "Vila Mocó", "Vila Eduardo", "Caminho do Sol", "Palhinhas", "Vila Débora"] },
  { title: "Bairros da zona norte", items: ["José e Maria", "João de Deus", "Dom Avelar", "Antônio Cassimiro", "Santa Luzia", "Cosme e Damião", "Terras do Sul", "Jardim São Paulo", "Henrique Leite", "Vila Eulália"] },
  { title: "Bairros da zona oeste e outras áreas", items: ["Areia Branca", "Cohab Massangano", "Cohab São Francisco", "São Gonçalo", "Jardim Amazonas", "Ouro Preto", "Pedro Raimundo", "Rio Corrente", "Quati", "Parque Massangano"] },
  { title: "Outros bairros e localidades", items: ["Loteamento Recife", "Dom Malan", "Jatobá", "Cidade Universitária", "Vila Ingás", "Jardim Maravilha", "Alto da Boa Vista", "Nova Descoberta", "Pedrinhas", "Izacolândia"] },
];
const categories = [
  { title: "Chaveiro residencial e comercial", icon: KeyRound, description: "Cópias, fechaduras e soluções para imóveis.", terms: ["Chaveiro em Petrolina", "Chaveiro no Centro de Petrolina", "Chaveiro residencial Petrolina", "Chaveiro comercial Petrolina", "Cópia de chaves Petrolina", "Fazer cópia de chave em Petrolina", "Cópia de chave simples", "Cópia de chave tetra", "Abertura de porta residencial", "Abertura de porta comercial", "Porta trancada sem chave", "Chave quebrada na fechadura", "Troca de miolo de fechadura", "Troca de segredo de fechadura", "Conserto de fechadura", "Chaveiro para condomínio", "Chaveiro para loja", "Chaveiro para escritório"] },
  { title: "Chaves automotivas e codificadas", icon: Car, description: "Serviços para chaves e controles de veículos.", terms: ["Chaveiro automotivo Petrolina", "Chaves codificadas Petrolina", "Cópia de chave codificada", "Programação de chave automotiva", "Codificação de chave de carro", "Chave transponder", "Cópia de chave com chip", "Chave canivete", "Chave de presença", "Programação de chave presencial", "Chave reserva para carro", "Segunda via de chave de carro", "Chave de carro perdida", "Troca de carcaça de chave", "Controle remoto automotivo", "Programação de controle de carro", "Abertura de carro", "Carro trancado com chave dentro", "Chave quebrada na ignição"] },
  { title: "Eletrônica e módulos automotivos", icon: Wrench, description: "Diagnóstico e manutenção eletrônica sob avaliação.", terms: ["Reparo de módulo automotivo Petrolina", "Conserto de módulo de injeção", "Programação de módulo automotivo", "Reprogramação de módulo", "Reparo de BCM", "Programação de BCM", "Reparo de imobilizador", "Programação de imobilizador", "Carro não reconhece a chave", "Luz do imobilizador acesa", "Miolo de ignição", "Reparo de cilindro de ignição", "Chave não gira na ignição", "Conserto de chave de carro"] },
  { title: "Buscas por orçamento e atendimento", icon: Search, description: "Termos usados para localizar e contratar serviços.", terms: ["Rei das Chaves Petrolina", "Rei das Chaves Centro Petrolina", "Chaveiro perto de mim em Petrolina", "Chaveiro próximo ao Centro", "Telefone de chaveiro em Petrolina", "Chaveiro aberto em Petrolina", "Horário de chaveiro em Petrolina", "Preço de chave codificada Petrolina", "Quanto custa cópia de chave", "Orçamento de chave automotiva", "Onde fazer chave de carro em Petrolina", "Loja de chaves Petrolina", "Chaveiro na Rua Coronel Amorim"] },
];
const places = groups.flatMap(g => g.items);
const localExamples = places.flatMap(place => [
  "chaveiro no " + place + " Petrolina",
  "chaveiro automotivo no " + place + " Petrolina",
  "cópia de chaves no " + place + " Petrolina",
  "chaves codificadas no " + place + " Petrolina",
]);
const faqs = [
  { q: "Onde fica o Rei das Chaves em Petrolina?", a: "Nossa loja fica na Rua Coronel Amorim, 106, Loja 09, Centro, Petrolina-PE." },
  { q: "O Rei das Chaves faz chaves codificadas para carros?", a: "Trabalhamos com serviços de chaves automotivas, incluindo codificação e programação. Consulte a compatibilidade com o modelo de seu veículo." },
  { q: "Qual é o horário da loja?", a: "O horário informado no site é das 8h às 18h. Consulte pelo WhatsApp os dias e a disponibilidade de atendimento." },
  { q: "Atendem em outros bairros de Petrolina?", a: "A loja fica no Centro de Petrolina. A disponibilidade de atendimento externo e o deslocamento a cada bairro precisam ser confirmados diretamente com a equipe." },
];
export const Route = createFileRoute("/palavraschaves")({
  head: () => ({
    meta: [
      { title: "Chaveiro em Petrolina-PE | Bairros e Serviços | Rei das Chaves" },
      { name: "description", content: "Conheça serviços de chaveiro em Petrolina-PE: chaves codificadas, automotivas, cópias, fechaduras e reparo de módulos. Loja no Centro. Consulte atendimento." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Chaveiro em Petrolina-PE: bairros e serviços | Rei das Chaves" },
      { property: "og:description", content: "Loja no Centro de Petrolina desde 1973. Veja serviços automotivos, residenciais e bairros de referência e consulte a disponibilidade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://reidaschaves.lovable.app/palavraschaves" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebPage", "@id": "https://reidaschaves.lovable.app/palavraschaves#webpage", url: "https://reidaschaves.lovable.app/palavraschaves", name: "Chaveiro em Petrolina-PE | Bairros e Serviços", description: "Serviços de chaveiro e regiões de referência em Petrolina, PE", inLanguage: "pt-BR", about: { "@id": "https://reidaschaves.lovable.app/#business" } },
        { "@type": "Locksmith", "@id": "https://reidaschaves.lovable.app/#business", name: "Rei das Chaves", url: "https://reidaschaves.lovable.app/", telephone: "+5587988248370", foundingDate: "1973", address: { "@type": "PostalAddress", streetAddress: "Rua Coronel Amorim, 106, Loja 09", addressLocality: "Petrolina", addressRegion: "PE", postalCode: "56302-320", addressCountry: "BR" }, areaServed: { "@type": "City", name: "Petrolina" } },
        { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: "https://reidaschaves.lovable.app/" }, { "@type": "ListItem", position: 2, name: "Bairros e Serviços", item: "https://reidaschaves.lovable.app/palavraschaves" }] },
      ],
    }) }],
  }),
  component: KeywordsPage,
});
function KeywordsPage() {
  return <main className="min-h-screen bg-background px-5 py-14 text-foreground">
    <div className="mx-auto max-w-6xl">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="h-4 w-4" /> Voltar ao Rei das Chaves</Link>
      <header className="mt-12 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Rei das Chaves • Petrolina-PE</p>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">Chaveiro em Petrolina-PE: <span className="text-primary">serviços, bairros e regiões</span></h1>
        <p className="mt-5 text-lg text-muted-foreground">Desde 1973, o Rei das Chaves oferece serviços de chaveiro em Petrolina, com loja na Rua Coronel Amorim, 106, Loja 09, no Centro. Conheça nossas especialidades e consulte atendimento pelo WhatsApp.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"><MessageCircle className="h-5 w-5" /> Consultar pelo WhatsApp</a>
          <a href="https://maps.google.com/?q=Rua+Coronel+Amorim+106+Petrolina" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold"><MapPin className="h-5 w-5" /> Ver localização</a>
        </div>
      </header>
      <section className="mt-16" aria-labelledby="areas-title">
        <h2 id="areas-title" className="text-2xl font-extrabold sm:text-3xl">Bairros e localidades de Petrolina</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">Nossa loja está localizada no Centro. A lista reúne bairros reais da cidade para orientar sua busca. <strong>A presença nesta lista não garante atendimento externo no bairro</strong>; confirme disponibilidade e deslocamento pelo WhatsApp.</p>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {groups.map(group => <article key={group.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 text-lg font-bold"><MapPin className="h-5 w-5 text-primary" />{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">{group.items.map(place => <span key={place} className="rounded-full border border-border bg-surface px-3 py-2 text-sm">{place}</span>)}</div>
          </article>)}
        </div>
      </section>
      <section className="mt-16" aria-labelledby="services-title">
        <h2 id="services-title" className="text-2xl font-extrabold sm:text-3xl">Serviços e palavras-chave de chaveiro</h2>
        <p className="mt-3 text-muted-foreground">Veja os principais serviços e expressões pesquisadas em Petrolina. A execução de cada serviço depende de avaliação e disponibilidade.</p>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {categories.map(cat => <article key={cat.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-3 text-lg font-bold"><cat.icon className="h-6 w-6 text-primary" />{cat.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{cat.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">{cat.terms.map(term => <li key={term} className="rounded-full border border-border bg-surface px-3 py-2 text-sm">{term}</li>)}</ul>
          </article>)}
        </div>
      </section>
      <section className="mt-16 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-2xl font-extrabold">Combinações locais para pesquisas em Petrolina</h2>
        <p className="mt-3 text-sm text-muted-foreground">Exemplos de pesquisas por bairro e serviço. São referências de busca, não afirmações de que temos unidades ou atendimento disponível em cada local.</p>
        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{localExamples.map(term => <p key={term} className="rounded-lg bg-surface px-3 py-2 text-sm">{term}</p>)}</div>
      </section>
      <section className="mt-16 max-w-4xl">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Dúvidas frequentes</h2>
        <div className="mt-6 space-y-4">{faqs.map(f => <article key={f.q} className="rounded-xl border border-border bg-card p-5"><h3 className="font-bold">{f.q}</h3><p className="mt-2 text-sm text-muted-foreground">{f.a}</p></article>)}</div>
      </section>
      <section className="mt-14 rounded-2xl border border-primary/30 bg-card p-7 text-center">
        <Clock className="mx-auto h-8 w-8 text-primary" />
        <h2 className="mt-3 text-2xl font-extrabold">Precisa de um chaveiro em Petrolina?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Visite o Rei das Chaves no Centro, Rua Coronel Amorim, 106, Loja 09. Horário informado: 8h às 18h. Para dúvidas sobre serviços e atendimento externo, fale com nossa equipe.</p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground"><MessageCircle className="h-5 w-5" /> Chamar no WhatsApp</a>
      </section>
    </div>
  </main>;
}
