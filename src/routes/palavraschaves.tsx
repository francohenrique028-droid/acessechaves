import { createFileRoute, Link } from "@tanstack/react-router";
import { KeyRound, Car, Wrench, Search } from "lucide-react";

const PHONE = "5548999167599";
const WA = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent("Olá! Encontrei o Chaveiro Jurerê 24H pelo Google e gostaria de consultar um serviço de chaveiro em Jurerê.");
const groups = [
  { title: "Jurerê e arredores", items: ["Jurerê", "Jurerê Internacional", "Jurerê Tradicional", "Canasvieiras", "Praia do Forte", "Daniela"] },
  { title: "Norte da Ilha", items: ["Cachoeira do Bom Jesus", "Ponta das Canas", "Lagoinha do Norte", "Ingleses", "Vargem Grande", "Vargem Pequena"] },
  { title: "Outras regiões de Florianópolis", items: ["Santo Antônio de Lisboa", "Sambaqui", "Ratones", "Cacupé", "João Paulo", "Centro de Florianópolis"] },
];
const categories = [
  { title: "Chaveiro residencial e comercial", icon: KeyRound, description: "Cópias, fechaduras e soluções para imóveis.", terms: ["Chaveiro em Jurerê", "Chaveiro no Jurerê", "Chaveiro residencial Jurerê", "Chaveiro comercial Jurerê", "Cópia de chaves Jurerê", "Fazer cópia de chave em Jurerê", "Cópia de chave simples", "Cópia de chave tetra", "Abertura de porta residencial", "Abertura de porta comercial", "Porta trancada sem chave", "Chave quebrada na fechadura", "Troca de miolo de fechadura", "Troca de segredo de fechadura", "Conserto de fechadura", "Chaveiro para condomínio", "Chaveiro para loja", "Chaveiro para escritório"] },
  { title: "Chaves automotivas e codificadas", icon: Car, description: "Serviços para chaves e controles de veículos.", terms: ["Chaveiro automotivo Jurerê", "Chaves codificadas Jurerê", "Cópia de chave codificada", "Programação de chave automotiva", "Codificação de chave de carro", "Chave transponder", "Cópia de chave com chip", "Chave canivete", "Chave de presença", "Programação de chave presencial", "Chave reserva para carro", "Segunda via de chave de carro", "Chave de carro perdida", "Troca de carcaça de chave", "Controle remoto automotivo", "Programação de controle de carro", "Abertura de carro", "Carro trancado com chave dentro", "Chave quebrada na ignição"] },
  { title: "Eletrônica e módulos automotivos", icon: Wrench, description: "Diagnóstico e manutenção eletrônica sob avaliação.", terms: ["Reparo de módulo automotivo Jurerê", "Conserto de módulo de injeção", "Programação de módulo automotivo", "Reprogramação de módulo", "Reparo de BCM", "Programação de BCM", "Reparo de imobilizador", "Programação de imobilizador", "Carro não reconhece a chave", "Luz do imobilizador acesa", "Miolo de ignição", "Reparo de cilindro de ignição", "Chave não gira na ignição", "Conserto de chave de carro"] },
  { title: "Buscas por orçamento e atendimento", icon: Search, description: "Termos usados para localizar e contratar serviços.", terms: ["Chaveiro Jurerê 24H Jurerê", "Chaveiro Jurerê 24H Centro Jurerê", "Chaveiro perto de mim em Jurerê", "Chaveiro próximo ao Centro", "Telefone de chaveiro em Jurerê", "Chaveiro aberto em Jurerê", "Horário de chaveiro em Jurerê", "Preço de chave codificada Jurerê", "Quanto custa cópia de chave", "Orçamento de chave automotiva", "Onde fazer chave de carro em Jurerê", "Loja de chaves Jurerê", "Chaveiro na Rodovia Maurício Sirotsky Sobrinho"] },
  { title: "Fechaduras, cilindros e manutenção", icon: KeyRound, description: "Buscas específicas por problemas e peças de fechaduras; consulte os serviços disponíveis.", terms: ["Fechadura para porta de madeira", "Fechadura para porta de alumínio", "Fechadura para porta de vidro", "Fechadura para porta de ferro", "Fechadura para portão", "Fechadura de sobrepor", "Fechadura de embutir", "Fechadura digital", "Fechadura eletrônica", "Instalação de fechadura digital", "Troca de fechadura residencial", "Troca de cilindro de porta", "Troca de miolo de porta", "Manutenção de fechadura", "Fechadura emperrada", "Fechadura travada", "Fechadura não gira", "Chave não entra na fechadura", "Porta não abre com chave", "Chave partida na fechadura", "Cilindro de fechadura", "Segredo de fechadura", "Troca de segredo de cadeado", "Conserto de fechadura Jurerê", "Troca de fechadura Jurerê"] },
  { title: "Tipos de chaves e duplicação", icon: KeyRound, description: "Termos para localizar opções de cópia e fabricação de chaves.", terms: ["Chave simples", "Chave tetra", "Chave multiponto", "Chave yale", "Chave para cadeado", "Chave de armário", "Chave de gaveta", "Chave de portão", "Chave de escritório", "Chave de porta residencial", "Cópia de chave comum Jurerê", "Cópia de chave tetra Jurerê", "Duplicar chave de casa", "Fazer chave reserva", "Segunda via de chave residencial", "Fazer chave pelo modelo", "Máquina de copiar chaves", "Chaveiro copiadora de chaves", "Loja para copiar chaves", "Onde fazer cópia de chave", "Chaveiro no Centro Jurerê", "Confecção de chaves Jurerê"] },
  { title: "Situações comuns e dúvidas de clientes", icon: Search, description: "Como as pessoas descrevem a necessidade antes de procurar um chaveiro.", terms: ["Perdi a chave da minha casa", "Perdi a chave do apartamento", "Fiquei trancado para fora", "Porta fechou com a chave dentro", "Chave não vira na porta", "Minha fechadura travou", "Quebrei a chave na fechadura", "Preciso de cópia da chave", "Fazer chave reserva para carro", "Perdi a chave do veículo", "Carro não liga por causa da chave", "Controle do carro parou de funcionar", "Chave do carro não destrava", "Chave do carro não reconhecida", "Bateria da chave automotiva", "Onde fazer chave codificada", "Quanto custa segunda via de chave", "Quanto custa trocar uma fechadura", "Quanto custa abrir porta trancada", "Orçamento de serviço de chaveiro", "Chaveiro com loja física em Jurerê"] },
];
const places = groups.flatMap(g => g.items);
const localExamples = places.flatMap(place => [
  "chaveiro no " + place + " Jurerê",
  "chaveiro automotivo no " + place + " Jurerê",
  "cópia de chaves no " + place + " Jurerê",
  "chaves codificadas no " + place + " Jurerê",
  "chaveiro residencial no " + place + " Jurerê",
  "programação de chave automotiva no " + place + " Jurerê",
]);
const faqs = [
  { q: "Onde fica o Chaveiro Jurerê 24H?", a: "Nosso endereço é Rodovia Maurício Sirotsky Sobrinho, 5401, Jurerê, Florianópolis - SC." },
  { q: "Há atendimento 24 horas?", a: "Sim, o Chaveiro Jurerê 24H informa plantão 24 horas. Consulte a disponibilidade pelo WhatsApp." },
  { q: "Vocês atendem serviços automotivos?", a: "Consulte serviços de abertura de veículos e chaves automotivas, incluindo codificadas." },
  { q: "Atendem outros bairros de Florianópolis?", a: "Consulte diretamente a disponibilidade de deslocamento para cada região." },
];
export const Route = createFileRoute("/palavraschaves")({
  head: () => ({
    meta: [
      { title: "Chaveiro em Jurerê, Florianópolis - SC | Bairros e Serviços | Chaveiro Jurerê 24H" },
      { name: "description", content: "Conheça serviços de chaveiro em Jurerê, Florianópolis - SC: chaves codificadas, automotivas, cópias, fechaduras e reparo de módulos. Atendimento em Jurerê. Consulte atendimento." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Chaveiro em Jurerê e Florianópolis: bairros e serviços | Chaveiro Jurerê 24H" },
      { property: "og:description", content: "Atendimento em Jurerê de Jurerê com plantão 24 horas. Veja serviços automotivos, residenciais e bairros de referência e consulte a disponibilidade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://chaveiro-jurere.lovable.app/palavraschaves" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebPage", "@id": "https://chaveiro-jurere.lovable.app/palavraschaves#webpage", url: "https://chaveiro-jurere.lovable.app/palavraschaves", name: "Chaveiro em Jurerê, Florianópolis - SC | Bairros e Serviços", description: "Serviços de chaveiro e regiões de referência em Jurerê, PE", inLanguage: "pt-BR", about: { "@id": "https://chaveiro-jurere.lovable.app/#business" } },
        { "@type": "Locksmith", "@id": "https://chaveiro-jurere.lovable.app/#business", name: "Chaveiro Jurerê 24H", url: "https://chaveiro-jurere.lovable.app/", telephone: "+5548999167599", address: { "@type": "PostalAddress", streetAddress: "Rodovia Maurício Sirotsky Sobrinho, 5401", addressLocality: "Florianópolis", addressRegion: "SC", addressCountry: "BR" }, areaServed: { "@type": "City", name: "Jurerê" } },
        { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: "https://chaveiro-jurere.lovable.app/" }, { "@type": "ListItem", position: 2, name: "Bairros e Serviços", item: "https://chaveiro-jurere.lovable.app/palavraschaves" }] },
      ],
    }) }],
  }),
  component: KeywordsPage,
});
const nearbyCities = ["São José - SC", "Palhoça - SC", "Biguaçu - SC"];
const allTerms = [...new Set(categories.flatMap(category => category.terms))];
const pill = "rounded-full border border-border bg-surface px-3 py-2 text-sm text-foreground";
function KeywordsPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="text-sm font-semibold text-primary hover:underline">← Voltar ao Chaveiro Jurerê 24H</Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Planejamento de palavras-chave</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Bairros, cidades e serviços de chaveiro</h1>
        <p className="mt-5 max-w-3xl text-muted-foreground">Lista de localidades e termos para planejamento de campanhas e conteúdo. Os bairros abaixo são referências de pesquisa na região de Florianópolis - SC; atendimento externo e disponibilidade devem ser confirmados com a empresa.</p>
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
            <h2 className="text-xl font-bold">Bairros próximos a Jurerê</h2>
            <div className="mt-5 flex flex-wrap gap-2">{(groups[0]?.items ?? []).map(item => <span className={pill} key={item}>{item}</span>)}</div>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Outros bairros de Florianópolis</h2>
            <div className="mt-5 flex flex-wrap gap-2">{groups.slice(1).flatMap(group => group.items).map(item => <span className={pill} key={item}>{item}</span>)}</div>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Cidades próximas e região</h2>
            <p className="mt-2 text-sm text-muted-foreground">Cidades de referência na Grande Florianópolis. Consulte disponibilidade de atendimento externo.</p>
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
