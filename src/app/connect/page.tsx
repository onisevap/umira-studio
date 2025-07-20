import Header from "../../components/Header";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section className="w-full max-w-xl text-center py-24">
          <h1 className="text-4xl font-extrabold mb-6 tracking-tight">Contattaci</h1>
          <p className="text-lg text-foreground/80 mb-8">
            Vuoi collaborare con noi o hai un progetto da proporre? Scrivici!
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="bg-[#18181b] border border-[#232329] rounded px-4 py-2 text-foreground focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#18181b] border border-[#232329] rounded px-4 py-2 text-foreground focus:outline-none"
              required
            />
            <textarea
              placeholder="Messaggio"
              className="bg-[#18181b] border border-[#232329] rounded px-4 py-2 text-foreground focus:outline-none"
              rows={5}
              required
            />
            <button
              type="submit"
              className="mt-2 px-6 py-2 rounded-full bg-primary text-background font-semibold hover:bg-accent transition-colors"
            >
              Invia
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}