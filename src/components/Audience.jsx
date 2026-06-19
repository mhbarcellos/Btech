import { motion } from "framer-motion";
import { BriefcaseBusiness, Lightbulb, UserRound } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const audiences = [
  {
    title: "Empresas e negócios locais",
    text: "Sites e landing pages para apresentar serviços, fortalecer a marca e facilitar o contato.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Profissionais autônomos",
    text: "Páginas profissionais para mostrar serviços, experiências e canais de atendimento.",
    icon: UserRound,
  },
  {
    title: "Ideias e projetos digitais",
    text: "Aplicativos e sistemas web para organizar processos, testar ideias e criar soluções sob medida.",
    icon: Lightbulb,
  },
];

export default function Audience() {
  return (
    <section className="bg-ink py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Para quem"
          title="Para quem a BTech cria projetos digitais?"
          text="A BTech atende empresas, profissionais autônomos, prestadores de serviço e marcas que precisam de uma presença digital mais clara, profissional e funcional."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.article
                key={audience.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.48, delay: index * 0.06 }}
                className="rounded-2xl border border-line bg-panel/65 p-6 shadow-card transition hover:-translate-y-1 hover:border-cyan/50"
              >
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-cyan/10 text-cyan">
                  <Icon size={21} />
                </span>
                <h3 className="text-xl font-bold text-pearl">{audience.title}</h3>
                <p className="mt-3 leading-7 text-muted">{audience.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
