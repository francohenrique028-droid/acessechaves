import { createFileRoute, Link } from "@tanstack/react-router";
import { KeyRound, Car, Wrench, Search } from "lucide-react";

const PHONE = "558788248370";
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
        { "@type": "Locksmith", "@id": "https://reidaschaves.lovable.app/#business", name: "Rei das Chaves", url: "https://reidaschaves.lovable.app/", telephone: "+558788248370", foundingDate: "1973", address: { "@type": "PostalAddress", streetAddress: "Rua Coronel Amorim, 106, Loja 09", addressLocality: "Petrolina", addressRegion: "PE", addressCountry: "BR" }, areaServed: { "@type": "City", name: "Petrolina" } },
        { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: "https://reidaschaves.lovable.app/" }, { "@type": "ListItem", position: 2, name: "Bairros e Serviços", item: "https://reidaschaves.lovable.app/palavraschaves" }] },
      ],
    }) }],
  }),
  component: KeywordsPage,
});
const nearbyCities = ["Juazeiro-BA", "Lagoa Grande-PE", "Casa Nova-BA", "Sobradinho-BA", "Santa Maria da Boa Vista-PE"];
const allTerms = categories.flatMap(category => category.terms);
const pill = "rounded-full border border-border bg-surface px-3 py-2 text-sm text-foreground";
function KeywordsPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="text-sm font-semibold text-primary hover:underline">← Voltar ao Rei das Chaves</Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Planejamento de palavras-chave</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Bairros, cidades e serviços de chaveiro</h1>
        <p className="mt-5 max-w-3xl text-muted-foreground">Lista de localidades e termos para planejamento de campanhas e conteúdo. Os bairros abaixo são referências de pesquisa em Petrolina-PE; atendimento externo e disponibilidade devem ser confirmados com a empresa.</p>
        <div className="mb-3 mt-4 flex items-center gap-1.5">
          <span className="google-animated-text bg-clip-text text-sm font-bold tracking-tight text-transparent sm:text-base" style={{
            backgroundImage: "linear-gradient(90deg, #b4b4b4, #ffffff, #858585, #eeeeee, #b4b4b4)",
            backgroundSize: "250% 100%",
            animation: "google-colors-shift 3s linear infinite"
          }}>Google empresas otimizado</span>
          <img src="https://i.imgur.com/t3s7ytw.gif" alt="Ícone animado de verificação" className="h-4 w-4 object-contain sm:h-[18px] sm:w-[18px]" />
        </div>
        <style>{`@keyframes google-colors-shift { from { background-position: 0% 50%; } to { background-position: 100% 50%; } } @media (prefers-reduced-motion: reduce) { .google-animated-text { animation: none !important; } }`}</style>
        <section className="mt-12 grid gap-6 lg:grid-cols-2" aria-label="Bairros, cidades e palavras-chave">
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Bairros próximos à loja</h2>
            <div className="mt-5 flex flex-wrap gap-2">{groups[0].items.map(item => <span className={pill} key={item}>{item}</span>)}</div>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Outros bairros de Petrolina</h2>
            <div className="mt-5 flex flex-wrap gap-2">{groups.slice(1).flatMap(group => group.items).map(item => <span className={pill} key={item}>{item}</span>)}</div>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Cidades próximas e região</h2>
            <p className="mt-2 text-sm text-muted-foreground">Localidades de referência geográfica. Consulte a empresa sobre atendimento fora de Petrolina.</p>
            <div className="mt-5 flex flex-wrap gap-2">{nearbyCities.map(item => <span className={pill} key={item}>{item}</span>)}</div>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Serviços e termos de pesquisa</h2>
            <div className="mt-5 flex flex-wrap gap-2">{allTerms.map(item => <span className={pill} key={item}>{item}</span>)}</div>
          </article>
        </section>
        <section className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold">Combinações locais de palavras-chave</h2>
          <p className="mt-2 text-sm text-muted-foreground">Exemplos de termos pesquisados por bairro e serviço. Esta lista não indica unidades ou cobertura garantida em cada local.</p>
          <ul className="mt-5 grid gap-2 text-sm text-foreground sm:grid-cols-2">
            {localExamples.map(keyword => <li className="rounded-lg bg-surface px-3 py-2" key={keyword}>{keyword}</li>)}
          </ul>
        </section>
      </div>
    </main>
  );
}
