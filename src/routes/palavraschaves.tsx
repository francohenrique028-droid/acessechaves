import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/palavraschaves")({
  head: () => ({
    meta: [
      { title: "Palavras-chave | Chaveiro Junior" },
      { name: "description", content: "Página de palavras-chave do Chaveiro Junior." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PalavrasChaves,
});

function PalavrasChaves() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-5 py-16 text-center text-foreground">
      <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-8 sm:p-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Chaveiro Junior</p>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Palavras-chave</h1>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          Esta página está pronta para receber o conteúdo que você definir.
        </p>
        <Link to="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110">
          Voltar ao site
        </Link>
      </div>
    </main>
  );
}
