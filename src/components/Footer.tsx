import Link from "next/link";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center py-12 bg-transparent">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
        {/* Card dati legali */}
        <div className="bg-[#18181b] rounded-xl p-6 border border-[#232329] shadow-lg flex-1 md:basis-3/5 flex flex-col justify-between">
          <h3 className="text-lg font-bold mb-2 gradient-text">UMIRA STUDIO</h3>
          <p className="text-sm text-foreground/70 mb-4">
            © {new Date().getFullYear()} Umira Studio Srl<br />
            P.IVA 12345678901<br />
            Via Innovazione 1, 20100 Milano (MI)
          </p>
        </div>
        {/* Card pagine e social */}
        <div className="bg-[#18181b] rounded-xl p-6 border border-[#232329] shadow-lg flex flex-col justify-between md:basis-2/5 min-w-[220px]">
          {/* Doppio elenco affiancato */}
          <div className="flex flex-row gap-8 mb-6 justify-around">
            <div className="flex flex-col gap-2">
              <Link href="/build" className="text-xs text-foreground/60 hover:text-primary transition-colors">Build</Link>
              <Link href="/projects" className="text-xs text-foreground/60 hover:text-primary transition-colors">Projects</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/umira" className="text-xs text-foreground/60 hover:text-primary transition-colors">Umira</Link>
              <Link href="/connect" className="text-xs text-foreground/60 hover:text-primary transition-colors">Connect</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="text-xs text-foreground/60 hover:text-primary transition-colors">Privacy e Cookie Policy</Link>
              <Link href="/terms" className="text-xs text-foreground/60 hover:text-primary transition-colors">Termini e Condizioni</Link>
            </div>
          </div>
          {/* Icone social */}
          <div className="flex gap-6 justify-center mt-2">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-2xl text-primary hover:text-accent transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-2xl text-primary hover:text-accent transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:info@umirastudio.com"
              aria-label="Newsletter"
              className="text-2xl text-primary hover:text-accent transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}