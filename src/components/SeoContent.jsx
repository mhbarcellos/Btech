import { motion } from "framer-motion";
import { AppWindow, Globe2, MousePointerClick } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const seoCards = [
  {
    title: "Sites profissionais",
    text: "Criação de sites institucionais responsivos para apresentar empresas, serviços e contatos de forma clara.",
    icon: Globe2,
  },
  {
    title: "Landing pages",
    text: "Desenvolvimento de páginas focadas em campanhas, divulgação de serviços e geração de contatos.",
    icon: MousePointerClick,
  },
  {
    title: "Sistemas e aplicativos",
    text: "Soluções digitais sob medida para organizar processos, melhorar rotinas e transformar ideias em produtos digitais.",
    icon: AppWindow,
  },
];

export default function SeoContent() {
  return (
    <section className="bg-panel py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Presença digital"
          title="Soluções digitais para empresas e profissionais"
          text="A BTech desenvolve sites profissionais, landing pages, aplicativos e sistemas web para empresas, profissionais autônomos e marcas que precisam fortalecer sua presença digital. Cada projeto é pensado para unir visual moderno, boa experiência de uso, responsividade e clareza na comunicação."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {seoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl border border-line bg-ink/70 p-6 shadow-card transition hover:-translate-y-1 hover:border-cyan/50"
              >
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-cyan/10 text-cyan">
                  <Icon size={21} />
                </span>
                <h3 className="text-lg font-bold text-pearl">{card.title}</h3>
                <p className="mt-3 leading-7 text-muted">{card.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
