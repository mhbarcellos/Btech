import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";

const steps = [
  {
    title: "Entendimento",
    text: "Mapeamos objetivo, público, referências e prioridades para criar uma direção clara.",
  },
  {
    title: "Estrutura",
    text: "Organizamos telas, conteúdo e fluxo para que o projeto tenha lógica antes do visual.",
  },
  {
    title: "Design e desenvolvimento",
    text: "Transformamos a estratégia em interface funcional, responsiva e pronta para uso.",
  },
  {
    title: "Entrega",
    text: "Finalizamos ajustes, validamos a experiência e deixamos a base preparada para evoluir.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="bg-ink py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Processo"
          title="Como transformamos uma ideia em projeto"
          text="Um caminho objetivo para sair do conceito e chegar em uma solução digital pronta para representar sua marca."
        />

        <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent lg:block" />
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative rounded-2xl border border-line bg-panel/70 p-6 shadow-card"
            >
              <div className="mb-7 grid h-12 w-12 place-items-center rounded-xl border border-cyan/40 bg-ink text-lg font-bold text-cyan">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-pearl">{step.title}</h3>
              <p className="mt-3 leading-7 text-muted">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
