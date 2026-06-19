import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contactLinks } from "../config/contact.js";

export default function SimpleStart() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 rounded-3xl border border-line bg-panel/70 p-7 shadow-card sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan">
              Próximo passo
            </p>
            <h2 className="text-balance text-3xl font-bold text-pearl sm:text-4xl">
              Seu projeto pode começar simples
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              Nem todo projeto precisa começar grande. A BTech pode ajudar a transformar uma
              ideia inicial em uma primeira versão funcional, clara e pronta para evoluir com o
              tempo.
            </p>
          </div>
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Conversar pelo WhatsApp sobre um projeto digital"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-4 font-semibold text-ink shadow-glow transition hover:-translate-y-1 hover:bg-pearl focus:outline-none focus:ring-2 focus:ring-cyan/60"
          >
            <MessageCircle size={20} />
            Conversar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
