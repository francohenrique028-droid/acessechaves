import { createFileRoute, Link } from "@tanstack/react-router";

const regions = [
  {
    title: "Bairros próximos à loja",
    items: ["Cidade dos Funcionários","Parque Manibura","Cambeba","Parque Iracema","Jardim das Oliveiras","Cajazeiras","Engenheiro Luciano Cavalcante","José de Alencar","Edson Queiroz","Sapiranga / Coité","Messejana","Lagoa Redonda","Guajerú","Coaçu","Curió","Paupina","São Bento","Salinas","Sabiaguaba","Aerolândia","Alto da Balança","Passaré","Boa Vista"],
  },
  {
    title: "Outros bairros de Fortaleza",
    items: ["Dias Macedo","Parque Dois Irmãos","Barroso","Jangurussu","Pedras","Ancuri","Parque Santa Maria","Cocó","Guararapes","Fátima","Dionísio Torres","Aldeota","Meireles","Papicu","Centro","Parangaba","Montese","Maraponga","Mondubim"],
  },
  {
    title: "Cidades próximas e região metropolitana",
    items: ["Eusébio", "Aquiraz", "Itaitinga", "Maracanaú", "Pacatuba", "Maranguape", "Caucaia"],
  },
];

const services = [
  "Chaveiro automotivo",
  "Chaveiro residencial",
  "Chaveiro comercial",
  "Chaveiro em Fortaleza",
  "Chaveiro Fortaleza CE",
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
  "Chaveiro na Cidade dos Funcionários",
  "Chaveiro na Oliveira Paiva",
  "Chaveiro na região de Messejana",
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
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
          Bairros, cidades e serviços de chaveiro{" "}
          <img
            src="https://i.imgur.com/t3s7ytw.gif"
            alt="Selo azul de verificação animado"
            className="inline-block h-[0.9em] w-[0.9em] align-[-0.12em] object-contain"
          />
        </h1>
        <p className="mt-5 max-w-3xl text-muted-foreground">Lista de localidades e termos para planejamento de campanhas e conteúdo. Os municípios e bairros abaixo estão confirmados na segmentação/SEO.</p>
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
