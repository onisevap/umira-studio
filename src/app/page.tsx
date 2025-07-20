"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center px-4">
        {/* HERO */}
        <section className="w-full flex flex-col items-center justify-center text-center py-28 gap-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 gradient-text">
            Build New Era Systems
          </h1>
          <p className="text-lg sm:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Progettiamo e realizziamo sistemi fisici e digitali per aziende
            visionarie. Siamo designer, ingegneri e tecnologi con un approccio
            concreto e funzionale.
          </p>
          <Link
            href="#contact-card"
            className="inline-block px-8 py-3 rounded-full bg-primary text-background font-semibold text-lg shadow-lg hover:bg-accent transition-colors"
          >
            Contattaci
          </Link>
        </section>

        {/* SERVICES */}
        <section className="w-full max-w-5xl py-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="group bg-[#18181b] rounded-xl p-8 border border-[#232329] shadow-lg flex flex-col items-center hover:border-primary transition-all">
            <span className="text-primary text-4xl mb-2 gradient-text">1</span>
            <h2 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">
              PRODUCT SYSTEMS
            </h2>
            <p className="text-sm text-foreground/80 text-center">
              Dall’idea al prototipo: prodotti fisici innovativi e funzionali.
            </p>
          </div>
          <div className="group bg-[#18181b] rounded-xl p-8 border border-[#232329] shadow-lg flex flex-col items-center hover:border-primary transition-all">
            <span className="text-primary text-4xl mb-2 gradient-text">2</span>
            <h2 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">
              DIGITAL SYSTEMS
            </h2>
            <p className="text-sm text-foreground/80 text-center">
              Soluzioni software e piattaforme digitali su misura.
            </p>
          </div>
          <div className="group bg-[#18181b] rounded-xl p-8 border border-[#232329] shadow-lg flex flex-col items-center hover:border-primary transition-all">
            <span className="text-primary text-4xl mb-2 gradient-text">3</span>
            <h2 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">
              CONNECTED EXPERIENCES
            </h2>
            <p className="text-sm text-foreground/80 text-center">
              Esperienze integrate tra fisico e digitale per il futuro.
            </p>
          </div>
        </section>

        {/* ABOUT + PROJECTS */}
        <section className="w-full max-w-5xl py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ABOUT */}
          <div className="bg-[#18181b] rounded-xl p-8 border border-[#232329] shadow-lg flex flex-col justify-between">
            <h2 className="text-xl font-bold mb-4 gradient-text">UMIRA</h2>
            <p className="text-base text-foreground/80 mb-6">
              Siamo un team multidisciplinare con esperienza in design,
              ingegneria e tecnologia. Lavoriamo con aziende che vogliono
              innovare davvero.
            </p>
            <Link
              href="/umira"
              className="text-primary hover:underline underline-offset-4 font-medium"
            >
              Scopri di più →
            </Link>
          </div>
          {/* PROJECTS */}
          <div className="bg-[#18181b] rounded-xl p-8 border border-[#232329] shadow-lg flex flex-col justify-between">
            <h2 className="text-xl font-bold mb-4 gradient-text">PROJECTS</h2>
            <ul className="mb-6 space-y-3">
              <li>
                <Link
                  href="/projects/alpha"
                  className="text-accent hover:underline font-semibold"
                >
                  Progetto Alpha
                </Link>
                <span className="block text-sm text-foreground/60">
                  Sistema IoT per la gestione intelligente degli spazi.
                </span>
              </li>
              <li>
                <Link
                  href="/projects/beta"
                  className="text-accent hover:underline font-semibold"
                >
                  Progetto Beta
                </Link>
                <span className="block text-sm text-foreground/60">
                  Piattaforma digitale per esperienze connesse.
                </span>
              </li>
            </ul>
            <Link
              href="/projects"
              className="text-primary hover:underline underline-offset-4 font-medium"
            >
              Tutti i progetti →
            </Link>
          </div>
        </section>

        {/* CONTACT CARD ESPANDIBILE */}
        <section id="contact-card" className="w-full py-16 max-w-5xl flex justify-center">
          <div className="bg-[#18181b] rounded-xl p-8 border border-[#232329] shadow-lg w-full flex flex-col transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2 gradient-text">CONNECT</h2>
                <p className="text-base text-foreground/80">
                  Vuoi collaborare con noi o hai un progetto da proporre? Scrivici!
                </p>
              </div>
              <div className="flex-shrink-0 flex justify-start sm:justify-end">
                <button
                  onClick={() => setShowForm((v) => !v)}
                  className="px-8 py-3 rounded-full bg-primary text-white font-semibold text-lg shadow-lg hover:bg-accent transition-colors"
                  aria-expanded={showForm}
                >
                  {showForm ? "Chiudi" : "Scrivici ora"}
                </button>
              </div>
            </div>
            {showForm && (
              <form className="w-full flex flex-col gap-4 mt-8 animate-fade-in">
                <input
                  type="text"
                  placeholder="Nome"
                  className="bg-[#232329] border border-[#333] rounded px-4 py-2 text-foreground focus:outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#232329] border border-[#333] rounded px-4 py-2 text-foreground focus:outline-none"
                  required
                />
                <textarea
                  placeholder="Messaggio"
                  className="bg-[#232329] border border-[#333] rounded px-4 py-2 text-foreground focus:outline-none"
                  rows={4}
                  required
                />
                <button
                  type="submit"
                  className="mt-2 px-6 py-2 rounded-full bg-primary text-background font-semibold hover:bg-accent transition-colors"
                >
                  Invia
                </button>
              </form>
            )}
          </div>
        </section>


      </main>
      <Footer />
    </div>
    
  );
}
