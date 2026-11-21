import { createFileRoute, Link } from "@tanstack/react-router";
import { KeyRound, Car, Wrench, Search } from "lucide-react";

const PHONE = "5583991094553";
const WA = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent("Olá! Encontrei a Acesse Chaves pelo Google e gostaria de consultar um serviço de chaveiro em João Pessoa.");
const groups = [
  { title: "Ernesto Geisel e arredores", items: ["Ernesto Geisel", "José Américo", "Água Fria", "Cristo Redentor", "Costa e Silva", "Funcionários"] },
  { title: "Bairros de João Pessoa", items: ["Centro", "Torre", "Bancários", "Mangabeira", "Valentina", "Cruz das Armas", "Jaguaribe", "Tambauzinho", "Tambaú", "Manaíra"] },
  { title: "Grande João Pessoa", items: ["Bayeux", "Cabedelo", "Santa Rita", "Conde"] },
];
const categories = [
  { title: "Chaveiro residencial e comercial", icon: KeyRound, description: "Cópias, fechaduras e soluções para imóveis.", terms: ["Chaveiro em João Pessoa", "Chaveiro no João Pessoa", "Chaveiro residencial João Pessoa", "Chaveiro comercial João Pessoa", "Cópia de chaves João Pessoa", "Fazer cópia de chave em João Pessoa", "Cópia de chave simples", "Cópia de chave tetra", "Abertura de porta residencial", "Abertura de porta comercial", "Porta trancada sem chave", "Chave quebrada na fechadura", "Troca de miolo de fechadura", "Troca de segredo de fechadura", "Conserto de fechadura", "Chaveiro para condomínio", "Chaveiro para loja", "Chaveiro para escritório"] },
  { title: "Chaves automotivas e codificadas", icon: Car, description: "Serviços para chaves e controles de veículos.", terms: ["Chaveiro automotivo João Pessoa", "Chaves codificadas João Pessoa", "Cópia de chave codificada", "Programação de chave automotiva", "Codificação de chave de carro", "Chave transponder", "Cópia de chave com chip", "Chave canivete", "Chave de presença", "Programação de chave presencial", "Chave reserva para carro", "Segunda via de chave de carro", "Chave de carro perdida", "Troca de carcaça de chave", "Controle remoto automotivo", "Programação de controle de carro", "Abertura de carro", "Carro trancado com chave dentro", "Chave quebrada na ignição"] },
  { title: "Eletrônica e módulos automotivos", icon: Wrench, description: "Diagnóstico e manutenção eletrônica sob avaliação.", terms: ["Reparo de módulo automotivo João Pessoa", "Conserto de módulo de injeção", "Programação de módulo automotivo", "Reprogramação de módulo", "Reparo de BCM", "Programação de BCM", "Reparo de imobilizador", "Programação de imobilizador", "Carro não reconhece a chave", "Luz do imobilizador acesa", "Miolo de ignição", "Reparo de cilindro de ignição", "Chave não gira na ignição", "Conserto de chave de carro"] },
  { title: "Buscas por orçamento e atendimento", icon: Search, description: "Termos usados para localizar e contratar serviços.", terms: ["Acesse Chaves João Pessoa", "Acesse Chaves Centro João Pessoa", "Chaveiro perto de mim em João Pessoa", "Chaveiro próximo ao Centro", "Telefone de chaveiro em João Pessoa", "Chaveiro aberto em João Pessoa", "Horário de chaveiro em João Pessoa", "Preço de chave codificada João Pessoa", "Quanto custa cópia de chave", "Orçamento de chave automotiva", "Onde fazer chave de carro em João Pessoa", "Loja de chaves João Pessoa", "Chaveiro na Av. Presidente Juscelino Kubitschek"] },
  { title: "Fechaduras, cilindros e manutenção", icon: KeyRound, description: "Buscas específicas por problemas e peças de fechaduras; consulte os serviços disponíveis.", terms: ["Fechadura para porta de madeira", "Fechadura para porta de alumínio", "Fechadura para porta de vidro", "Fechadura para porta de ferro", "Fechadura para portão", "Fechadura de sobrepor", "Fechadura de embutir", "Fechadura digital", "Fechadura eletrônica", "Instalação de fechadura digital", "Troca de fechadura residencial", "Troca de cilindro de porta", "Troca de miolo de porta", "Manutenção de fechadura", "Fechadura emperrada", "Fechadura travada", "Fechadura não gira", "Chave não entra na fechadura", "Porta não abre com chave", "Chave partida na fechadura", "Cilindro de fechadura", "Segredo de fechadura", "Troca de segredo de cadeado", "Conserto de fechadura João Pessoa", "Troca de fechadura João Pessoa"] },
  { title: "Tipos de chaves e duplicação", icon: KeyRound, description: "Termos para localizar opções de cópia e fabricação de chaves.", terms: ["Chave simples", "Chave tetra", "Chave multiponto", "Chave yale", "Chave para cadeado", "Chave de armário", "Chave de gaveta", "Chave de portão", "Chave de escritório", "Chave de porta residencial", "Cópia de chave comum João Pessoa", "Cópia de chave tetra João Pessoa", "Duplicar chave de casa", "Fazer chave reserva", "Segunda via de chave residencial", "Fazer chave pelo modelo", "Máquina de copiar chaves", "Chaveiro copiadora de chaves", "Loja para copiar chaves", "Onde fazer cópia de chave", "Chaveiro no Centro João Pessoa", "Confecção de chaves João Pessoa"] },
  { title: "Situações comuns e dúvidas de clientes", icon: Search, description: "Como as pessoas descrevem a necessidade antes de procurar um chaveiro.", terms: ["Perdi a chave da minha casa", "Perdi a chave do apartamento", "Fiquei trancado para fora", "Porta fechou com a chave dentro", "Chave não vira na porta", "Minha fechadura travou", "Quebrei a chave na fechadura", "Preciso de cópia da chave", "Fazer chave reserva para carro", "Perdi a chave do veículo", "Carro não liga por causa da chave", "Controle do carro parou de funcionar", "Chave do carro não destrava", "Chave do carro não reconhecida", "Bateria da chave automotiva", "Onde fazer chave codificada", "Quanto custa segunda via de chave", "Quanto custa trocar uma fechadura", "Quanto custa abrir porta trancada", "Orçamento de serviço de chaveiro", "Chaveiro com loja física em João Pessoa"] },
];
const places = groups.flatMap(g => g.items);
const localExamples = places.flatMap(place => [
  "chaveiro em " + place + " João Pessoa",
  "chaveiro automotivo em " + place + " João Pessoa",
  "cópia de chaves em " + place + " João Pessoa",
  "chaves codificadas em " + place + " João Pessoa",
  "chaveiro residencial em " + place + " João Pessoa",
  "programação de chave automotiva em " + place + " João Pessoa",
]);
const faqs = [
  { q: "Onde fica a Acesse Chaves?", a: "Nosso endereço é Av. Presidente Juscelino Kubitschek, 609, João Pessoa - PB." },
  { q: "Há atendimento 24 horas?", a: "Sim, a Acesse Chaves informa plantão 24 horas. Consulte a disponibilidade pelo WhatsApp." },
  { q: "Vocês atendem serviços automotivos?", a: "Consulte serviços de abertura de veículos e chaves automotivas, incluindo codificadas." },
  { q: "Atendem outros bairros de João Pessoa e região?", a: "Consulte diretamente a disponibilidade de deslocamento para cada região." },
];
export const Route = createFileRoute("/palavraschaves")({
  head: () => ({
    meta: [
      { title: "Chaveiro em João Pessoa - PB | Bairros e Serviços | Acesse Chaves" },
      { name: "description", content: "Conheça serviços de chaveiro em João Pessoa - PB: chaves codificadas, automotivas, cópias, fechaduras e reparo de módulos. Atendimento em João Pessoa. Consulte atendimento." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Chaveiro em João Pessoa e João Pessoa: bairros e serviços | Acesse Chaves" },
      { property: "og:description", content: "Atendimento em João Pessoa e Grande João Pessoa com plantão 24 horas. Veja serviços automotivos, residenciais e bairros de referência e consulte a disponibilidade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://reidaschaves.lovable.app/palavraschaves" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebPage", "@id": "https://reidaschaves.lovable.app/palavraschaves#webpage", url: "https://reidaschaves.lovable.app/palavraschaves", name: "Chaveiro em João Pessoa - PB | Bairros e Serviços", description: "Serviços de chaveiro e regiões de referência em João Pessoa, PB", inLanguage: "pt-BR", about: { "@id": "https://reidaschaves.lovable.app/#business" } },
        { "@type": "Locksmith", "@id": "https://reidaschaves.lovable.app/#business", name: "Acesse Chaves", url: "https://reidaschaves.lovable.app/", telephone: "+5583991094553", address: { "@type": "PostalAddress", streetAddress: "Av. Presidente Juscelino Kubitschek, 609", addressLocality: "João Pessoa", addressRegion: "PB", postalCode: "58075-400", addressCountry: "BR" }, areaServed: { "@type": "City", name: "João Pessoa e Grande João Pessoa" } },
        { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: "https://reidaschaves.lovable.app/" }, { "@type": "ListItem", position: 2, name: "Bairros e Serviços", item: "https://reidaschaves.lovable.app/palavraschaves" }] },
      ],
    }) }],
  }),
  component: KeywordsPage,
});
const nearbyCities = ["Bayeux - PB", "Cabedelo - PB", "Santa Rita - PB", "Conde - PB"];
const allTerms = [...new Set(categories.flatMap(category => category.terms))];
const pill = "rounded-full border border-border bg-surface px-3 py-2 text-sm text-foreground";
function KeywordsPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="text-sm font-semibold text-primary hover:underline">← Voltar ao Acesse Chaves</Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Planejamento de palavras-chave</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Bairros, cidades e serviços de chaveiro</h1>
        <p className="mt-5 max-w-3xl text-muted-foreground">Lista de localidades e termos para planejamento de campanhas e conteúdo. Os bairros abaixo são referências de pesquisa na região de João Pessoa - PB; atendimento externo e disponibilidade devem ser confirmados com a empresa.</p>
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
            <h2 className="text-xl font-bold">Bairros próximos ao Ernesto Geisel</h2>
            <div className="mt-5 flex flex-wrap gap-2">{(groups[0]?.items ?? []).map(item => <span className={pill} key={item}>{item}</span>)}</div>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Outros bairros e regiões</h2>
            <div className="mt-5 flex flex-wrap gap-2">{groups.slice(1).flatMap(group => group.items).map(item => <span className={pill} key={item}>{item}</span>)}</div>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Cidades próximas e região</h2>
            <p className="mt-2 text-sm text-muted-foreground">Cidades de referência na Grande João Pessoa. Consulte disponibilidade de atendimento externo.</p>
            <div className="mt-5 flex flex-wrap gap-2">{nearbyCities.map(item => <span className={pill} key={item}>{item}</span>)}</div>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Serviços e termos de pesquisa</h2>
            <div className="mt-5 flex flex-wrap gap-2">{allTerms.map(item => <span className={pill} key={item}>{item}</span>)}</div>
          </article>
        </section>
        <section className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold">Combinações locais de palavras-chave</h2>
          <p className="mt-2 text-sm text-muted-foreground">Variações de busca para pesquisa e planejamento de conteúdo. A lista não significa que existam unidades ou atendimento em todos os bairros.</p>
          <ul className="mt-5 grid gap-2 text-sm text-foreground sm:grid-cols-2">
            {localExamples.map(keyword => <li className="rounded-lg bg-surface px-3 py-2" key={keyword}>{keyword}</li>)}
          </ul>
        </section>
      </div>
    </main>
  );
}
