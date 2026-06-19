import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import logo from "../assets/logo.png";
import { contactLinks } from "../config/contact.js";

const navItems = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Projetos", "#projetos"],
  ["Processo", "#processo"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-line bg-ink/82 shadow-card backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#inicio" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Logo da BTech"
            className="h-11 w-11 rounded-xl object-contain shadow-glow"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-muted transition hover:text-pearl">
              {label}
            </a>
          ))}
        </nav>

        <a
          href={contactLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Fale conosco pelo WhatsApp"
          className="hidden items-center gap-2 rounded-lg border border-cyan/30 bg-cyan/10 px-5 py-3 text-sm font-semibold text-pearl transition hover:-translate-y-0.5 hover:border-cyan/70 hover:bg-cyan/20 lg:flex"
        >
          <MessageCircle size={18} />
          Fale conosco
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-white/5 text-pearl transition hover:border-cyan/60 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`border-t border-line bg-ink/96 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "max-h-[460px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="section-shell flex flex-col gap-2 py-5">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-muted transition hover:bg-white/5 hover:text-pearl"
            >
              {label}
            </a>
          ))}
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-electric px-5 py-3 font-semibold text-white transition hover:bg-cyan hover:text-ink"
          >
            <MessageCircle size={18} />
            Fale conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
