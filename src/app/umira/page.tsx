import Header from "../../components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section className="w-full max-w-2xl text-center py-24">
          <h1 className="text-4xl font-extrabold mb-6 tracking-tight">Chi siamo</h1>
          <p className="text-lg text-foreground/80 mb-8">
            Umira Studio è un collettivo di designer, ingegneri e tecnologi. 
            Crediamo nell’innovazione concreta, nella funzionalità reale e nella contaminazione tra fisico e digitale.
          </p>
          <p className="text-base text-foreground/70">
            Progettiamo sistemi, prodotti e servizi che uniscono tecnologia, design e semplicità d’uso. 
            Ogni progetto nasce da un approccio diretto, multidisciplinare e orientato al risultato.
          </p>
        </section>
      </main>
    </div>
  );
}