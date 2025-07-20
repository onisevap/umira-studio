import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-6 px-4 sm:px-12 bg-transparent">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/umira-logo.svg" alt="Umira Studio Logo" width={36} height={36} />
        <span className="font-bold text-xl tracking-tight text-primary">Umira Studio</span>
      </Link>
      <nav>
        <ul className="flex gap-6 text-sm font-bold">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
          </li>
          <li>
            <Link href="/build" className="hover:text-accent transition-colors">BUILD</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-accent transition-colors">PROJECTS</Link>
          </li>
          <li>
            <Link href="/umira" className="hover:text-accent transition-colors">UMIRA</Link>
          </li>
          <li>
            <Link href="/connect" className="hover:text-accent transition-colors">CONNECT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}