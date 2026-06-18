import { Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";
import { contactLabels, contactLinks } from "../config/contact.js";

const links = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Projetos", "#projetos"],
  ["Processo", "#processo"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-10">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo da BTech"
                className="h-12 w-12 rounded-xl object-contain shadow-glow"
              />
            </a>
            <p className="mt-4 max-w-md leading-7 text-muted">
              Desenvolvimento de sites, landing pages, apps e sistemas digitais.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-muted sm:grid-cols-2">
              <a href={contactLinks.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-cyan">
                <Instagram size={17} />
                Instagram: {contactLabels.instagram}
              </a>
              <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-cyan">
                <MessageCircle size={17} />
                WhatsApp: {contactLabels.whatsapp}
              </a>
              <a href={contactLinks.email} className="flex items-center gap-2 transition hover:text-cyan sm:col-span-2">
                <Mail size={17} />
                E-mail: {contactLabels.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              {links.map(([label, href]) => (
                <a key={label} href={href} className="text-sm font-medium text-muted transition hover:text-cyan">
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex gap-3 lg:justify-end">
              <a
                aria-label="Instagram"
                href={contactLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-white/5 text-muted transition hover:border-cyan/50 hover:text-cyan"
              >
                <Instagram size={19} />
              </a>
              <a
                aria-label="WhatsApp"
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-white/5 text-muted transition hover:border-cyan/50 hover:text-cyan"
              >
                <MessageCircle size={19} />
              </a>
              <a
                aria-label="E-mail"
                href={contactLinks.email}
                className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-white/5 text-muted transition hover:border-cyan/50 hover:text-cyan"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-sm text-muted">
          © 2026 BTech. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
