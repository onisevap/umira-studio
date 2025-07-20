import Header from "../../components/Header";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section className="w-full max-w-4xl py-24">
          <h1 className="text-4xl font-extrabold mb-10 text-center tracking-tight">I nostri progetti</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-[#18181b] rounded-xl p-6 border border-[#232329] shadow-lg flex flex-col">
              <h2 className="font-bold text-xl mb-2">Progetto Alpha</h2>
              <p className="text-sm text-foreground/80 mb-4">
                Sistema IoT per la gestione intelligente degli spazi.
              </p>
              <Link href="/projects/alpha" className="text-accent hover:underline text-sm">
                Scopri di più →
              </Link>
            </div>
            <div className="bg-[#18181b] rounded-xl p-6 border border-[#232329] shadow-lg flex flex-col">
              <h2 className="font-bold text-xl mb-2">Progetto Beta</h2>
              <p className="text-sm text-foreground/80 mb-4">
                Piattaforma digitale per esperienze connesse.
              </p>
              <Link href="/projects/beta" className="text-accent hover:underline text-sm">
                Scopri di più →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}