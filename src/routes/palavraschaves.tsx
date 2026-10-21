import { createFileRoute, Link } from "@tanstack/react-router";

const regions = [
  { title: "Bairros de Valinhos", items: ["Centro", "Vila Santana", "Vila Embaré", "Vila Olivo", "Jardim São Marcos", "Jardim Pinheiros", "Jardim América II", "Parque das Colinas", "Jardim Nova Palmares", "Jardim Imperial", "Jardim Paiquerê", "Jardim dos Manacás"] },
  { title: "Outras regiões de Valinhos", items: ["Jardim Santo Antônio", "Jardim São Pedro", "Jardim Primavera", "Vila Faustina", "Jardim Alto da Boa Vista", "Parque Portugal", "Jardim Jurema", "Jardim Centenário"] },
  { title: "Cidades próximas (sob consulta)", items: ["Vinhedo", "Louveira", "Campinas"] },
];

const services = [
  "Chaveiro automotivo",
  "Chaveiro residencial",
  "Chaveiro comercial",
  "Chaveiro em Valinhos",
  "Chaveiro Valinhos SP",
  "Chaveiro perto de mim",
  "Chaveiro próximo",
  "Chaveiro aberto agora",
  "Chaveiro de emergência",
  "Chaveiro urgente",
  "Chaveiro 24 horas",
  "Chaveiro atendimento rápido",
  "Chaveiro a domicílio",
  "Chaveiro no local",
  "Chaveiro para carros",
  "Chaveiro para motos",
  "Chaveiro para caminhões",
  "Chaveiro para apartamento",
  "Chaveiro para casa",
  "Chaveiro para condomínio",
  "Chaveiro para empresas",
  "Chaveiro para lojas",
  "Chaveiro especializado em automóveis",
  "Chaveiro de carros importados",
  "Chaves codificadas",
  "Chave codificada automotiva",
  "Fazer chave codificada",
  "Cópia de chave codificada",
  "Segunda via de chave codificada",
  "Duplicação de chave codificada",
  "Programação de chaves automotivas",
  "Programar chave de carro",
  "Codificação de chave de carro",
  "Codificar chave automotiva",
  "Chave com chip",
  "Chave transponder",
  "Programação de transponder",
  "Cópia de chave com chip",
  "Chave presencial automotiva",
  "Chave presencial de carro",
  "Programação de chave presencial",
  "Cópia de chave presencial",
  "Chave canivete",
  "Chave canivete automotiva",
  "Cópia de chave canivete",
  "Controle de carro",
  "Controle remoto automotivo",
  "Programação de controle automotivo",
  "Codificação de controle automotivo",
  "Conserto de controle automotivo",
  "Troca de carcaça de chave automotiva",
  "Troca de bateria de chave de carro",
  "Reparo de chave automotiva",
  "Conserto de chave de carro",
  "Chave de carro quebrada",
  "Chave quebrada na ignição",
  "Extração de chave quebrada",
  "Perdi a chave do carro",
  "Chave de carro perdida",
  "Fazer chave de carro perdida",
  "Segunda via de chave de carro",
  "Chave reserva para carro",
  "Cópia de chave automotiva",
  "Duplicação de chave de carro",
  "Abertura de veículos",
  "Abertura de carro",
  "Abrir carro trancado",
  "Carro trancado com chave dentro",
  "Chave trancada dentro do carro",
  "Destravar porta de carro",
  "Abertura de porta automotiva",
  "Abertura de portas",
  "Abertura de porta residencial",
  "Abertura de porta comercial",
  "Abrir porta trancada",
  "Porta trancada sem chave",
  "Perdi a chave de casa",
  "Chave quebrada na fechadura",
  "Retirar chave quebrada da fechadura",
  "Cópia de chaves",
  "Duplicação de chaves",
  "Fazer cópia de chave",
  "Cópia de chave comum",
  "Cópia de chave tetra",
  "Chave tetra",
  "Chaves simples",
  "Chaves residenciais",
  "Chave para portão",
  "Chave para cadeado",
  "Chave para armário",
  "Chave para gaveta",
  "Chave para escritório",
  "Troca de fechadura",
  "Instalação de fechadura",
  "Conserto de fechadura",
  "Reparo de fechadura",
  "Manutenção de fechadura",
  "Troca de segredo de fechadura",
  "Mudança de segredo de fechadura",
  "Miolo de fechadura",
  "Troca de cilindro de fechadura",
  "Fechadura emperrada",
  "Fechadura travada",
  "Porta não abre com a chave",
  "Reparo de fechadura de porta",
  "Reparo de módulos automotivos",
  "Conserto de módulos automotivos",
  "Programação de módulos automotivos",
  "Reprogramação de módulos",
  "Reparo de módulo de injeção",
  "Módulo de injeção automotiva",
  "Programação de BCM",
  "Reparo de BCM",
  "Módulo BCM automotivo",
  "Imobilizador automotivo",
  "Programação de imobilizador",
  "Reparo de imobilizador",
  "Sistema de imobilizador automotivo",
  "Problema no reconhecimento da chave",
  "Carro não reconhece a chave",
  "Luz do imobilizador acesa",
  "Chave de ignição automotiva",
  "Miolo de ignição",
  "Conserto de ignição",
  "Troca de miolo de ignição",
  "Reparo de cilindro de ignição",
  "Chave não gira na ignição",
  "Chave de carro não funciona",
  "Chave reserva automotiva",
  "Orçamento de chave codificada",
  "Preço de chave codificada",
  "Valor de chave automotiva",
  "Quanto custa copiar chave de carro",
  "Quanto custa programar chave de carro",
  "Preço de cópia de chaves",
  "Orçamento de chaveiro",
  "Telefone de chaveiro",
  "Contato de chaveiro",
  "Chaveiro no Centro de Valinhos",
  "Chaveiro na Vila Olivo",
  "Chaveiro em Vinhedo",
];

export const Route = createFileRoute("/palavraschaves")({
  head: () => ({
    meta: [
      { title: "Palavras-chave e regiões | BVA Chaveiro Valinhos" },
      { name: "description", content: "Referência de palavras-chave para chaveiro automotivo e residencial em bairros de Valinhos e municípios próximos." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PalavrasChaves,
});

function PalavrasChaves() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="text-sm font-semibold text-primary hover:underline">← Voltar ao BVA Chaveiro</Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Planejamento de palavras-chave</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
          Bairros, cidades e serviços de chaveiro
        </h1>
        <p className="mt-5 max-w-3xl text-muted-foreground">Lista de localidades e termos para planejamento de campanhas e conteúdo. Termos para planejamento de SEO local. A prestação de serviços em cada localidade deve ser confirmada com a empresa.</p>
        <div className="mt-4 mb-3">
          <span
            className="google-animated-text inline-block bg-clip-text text-sm font-bold tracking-tight text-transparent sm:text-base"
            style={{
              backgroundImage: "linear-gradient(90deg, #b4b4b4, #ffffff, #858585, #eeeeee, #b4b4b4)",
              backgroundSize: "250% 100%",
              animation: "google-colors-shift 3s linear infinite",
            }}
          >
            Google empresas otimizado
          </span>
          <img src="https://i.imgur.com/t3s7ytw.gif" alt="Selo azul de verificação animado" className="ml-1.5 inline-block h-4 w-4 align-[-0.15em] object-contain sm:h-[18px] sm:w-[18px]" />
        </div>
        <style>{`@keyframes google-colors-shift { from { background-position: 0% 50%; } to { background-position: 100% 50%; } } @media (prefers-reduced-motion: reduce) { .google-animated-text { animation: none !important; } }`}</style>
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
