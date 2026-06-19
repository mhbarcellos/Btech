import { motion } from "framer-motion";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { contactLabels, contactLinks } from "../config/contact.js";

const contactActions = [
  {
    label: "WhatsApp",
    value: contactLabels.whatsapp,
    href: contactLinks.whatsapp,
    icon: MessageCircle,
    primary: true,
  },
  {
    label: "Instagram",
    value: contactLabels.instagram,
    href: contactLinks.instagram,
    icon: Instagram,
  },
  {
    label: "E-mail",
    value: contactLabels.email,
    href: contactLinks.email,
    icon: Mail,
  },
];

export default function FinalCta() {
  return (
    <section id="contato" className="bg-panel py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-3xl border border-cyan/25 bg-ink p-8 shadow-glow sm:p-12 lg:p-16"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />
          <div className="absolute -bottom-28 left-12 h-72 w-72 rounded-full bg-electric/15 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-normal text-pearl sm:text-4xl lg:text-5xl">
              Vamos tirar sua ideia do papel?
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Fale com a BTech pelo WhatsApp, Instagram ou e-mail e conte qual site,
              landing page, aplicativo ou sistema web você precisa criar.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {contactActions.map((action) => {
                const Icon = action.icon;
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={action.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={`Entrar em contato por ${action.label}: ${action.value}`}
                    className={`group rounded-2xl border p-5 text-left transition hover:-translate-y-1 ${
                      action.primary
                        ? "border-cyan/50 bg-cyan text-ink shadow-glow"
                        : "border-line bg-white/[0.04] text-pearl hover:border-cyan/50 hover:bg-white/[0.08]"
                    }`}
                  >
                    <span
                      className={`mb-4 grid h-11 w-11 place-items-center rounded-xl ${
                        action.primary ? "bg-ink/10 text-ink" : "bg-cyan/10 text-cyan"
                      }`}
                    >
                      <Icon size={21} />
                    </span>
                    <span className="block text-base font-bold">{action.label}</span>
                    <span className={`mt-2 block text-sm ${action.primary ? "text-ink/75" : "text-muted"}`}>
                      {action.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
