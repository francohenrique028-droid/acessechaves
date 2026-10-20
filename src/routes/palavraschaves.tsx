import { createFileRoute, Link } from "@tanstack/react-router";

const regions = [
  {
    title: "Bairros próximos à loja",
    items: ["Cidade dos Funcionários", "Parque Manibura", "Cambeba", "Parque Iracema", "Jardim das Oliveiras", "Cajazeiras", "Engenheiro Luciano Cavalcante", "José de Alencar", "Edson Queiroz", "Sapiranga / Coité", "Messejana", "Lagoa Redonda"],
  },
  {
    title: "Outros bairros de Fortaleza",
    items: ["Aerolândia", "Alto da Balança", "Dias Macedo", "Boa Vista", "Passaré", "Parque Dois Irmãos", "Barroso", "Curió", "Guajerú", "Coaçu", "Paupina", "São Bento", "Sabiaguaba", "Jangurussu", "Pedras", "Ancuri", "Parque Santa Maria", "Cocó", "Guararapes", "Salinas", "Fátima", "Dionísio Torres", "Aldeota", "Meireles", "Papicu", "Centro", "Parangaba", "Montese", "Maraponga", "Mondubim"],
  },
  {
    title: "Cidades próximas e região metropolitana",
    items: ["Eusébio", "Aquiraz", "Itaitinga", "Maracanaú", "Pacatuba", "Maranguape", "Caucaia"],
  },
];

const services = [
  "Chaveiro automotivo",
  "Chaves codificadas",
  "Programação de chaves automotivas",
  "Cópia de chaves",
  "Abertura de portas",
  "Abertura de veículos",
  "Chave presencial automotiva",
  "Reparo de módulos automotivos",
  "Chaveiro residencial",
  "Chaveiro perto de mim",
];

export const Route = createFileRoute("/palavraschaves")({
  head: () => ({
    meta: [
      { title: "Palavras-chave e regiões | Chaveiro Junior" },
      { name: "description", content: "Referência de palavras-chave para chaveiro automotivo e residencial em bairros de Fortaleza e municípios próximos." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PalavrasChaves,
});

function PalavrasChaves() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="text-sm font-semibold text-primary hover:underline">← Voltar ao Chaveiro Junior</Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Planejamento de palavras-chave</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Bairros, cidades e serviços de chaveiro</h1>
        <p className="mt-5 max-w-3xl text-muted-foreground">Lista de localidades e termos para planejamento de campanhas e conteúdo. Os municípios e bairros abaixo são possibilidades de segmentação, não uma declaração de atendimento em todas essas áreas. Confirme a cobertura antes de anunciar.</p>
        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          {regions.map((region) => (
            <article key={region.title} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-xl font-bold">{region.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {region.items.map((item) => (
                  <span key={item} className="rounded-full border border-border bg-surface px-3 py-2 text-sm text-foreground">{item}</span>
                ))}
              </div>
            </article>
          ))}
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold">Serviços e termos de pesquisa</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {services.map((item) => (
                <span key={item} className="rounded-full border border-border bg-surface px-3 py-2 text-sm text-foreground">{item}</span>
              ))}
            </div>
          </article>
        </section>
        <section className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold">Combinações locais de palavras-chave</h2>
          <p className="mt-2 text-sm text-muted-foreground">Exemplos para análise e seleção, sujeitos à área de atendimento real.</p>
          <ul className="mt-5 grid gap-2 text-sm text-foreground sm:grid-cols-2">
            {regions.flatMap((region) => region.items).flatMap((place) => [
              `chaveiro em ${place}`,
              `chaveiro automotivo em ${place}`,
              `chaves codificadas em ${place}`,
              `programação de chaves em ${place}`,
            ]).map((keyword) => <li className="rounded-lg bg-surface px-3 py-2" key={keyword}>{keyword}</li>)}
          </ul>
        </section>
      </div>
    </main>
  );
}
