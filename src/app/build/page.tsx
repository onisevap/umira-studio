import Header from "../../components/Header";

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section className="w-full max-w-4xl py-24">
          <h1 className="text-4xl font-extrabold mb-10 text-center tracking-tight">I nostri servizi</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-[#18181b] rounded-xl p-6 border border-[#232329] shadow-lg flex flex-col items-center">
              <span className="text-primary text-3xl mb-2">1.</span>
              <h2 className="font-bold text-xl mb-2">Product Systems</h2>
              <p className="text-sm text-foreground/80 text-center">
                Progettazione e sviluppo di prodotti fisici innovativi, dall’idea al prototipo.
              </p>
            </div>
            <div className="bg-[#18181b] rounded-xl p-6 border border-[#232329] shadow-lg flex flex-col items-center">
              <span className="text-primary text-3xl mb-2">2.</span>
              <h2 className="font-bold text-xl mb-2">Digital Systems</h2>
              <p className="text-sm text-foreground/80 text-center">
                Realizzazione di software, piattaforme web e soluzioni digitali su misura.
              </p>
            </div>
            <div className="bg-[#18181b] rounded-xl p-6 border border-[#232329] shadow-lg flex flex-col items-center">
              <span className="text-primary text-3xl mb-2">3.</span>
              <h2 className="font-bold text-xl mb-2">Connected Experiences</h2>
              <p className="text-sm text-foreground/80 text-center">
                Integrazione tra mondo fisico e digitale per esperienze utente evolute.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}