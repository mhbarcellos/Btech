import { motion } from "framer-motion";
import { AppWindow, Brush, Code2, Layout, Rocket, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const services = [
  {
    title: "Sites institucionais",
    text: "Presenças digitais claras, rápidas e alinhadas à identidade da marca.",
    icon: Layout,
  },
  {
    title: "Landing pages",
    text: "Páginas focadas em campanhas, lançamentos e captação de interesse.",
    icon: Rocket,
  },
  {
    title: "Aplicativos",
    text: "Experiências responsivas para transformar fluxos em produtos digitais.",
    icon: AppWindow,
  },
  {
    title: "Sistemas web",
    text: "Ferramentas sob medida para organizar processos e operações online.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    text: "Interfaces pensadas para navegação simples, visual moderno e uso real.",
    icon: Brush,
  },
  {
    title: "Manutenção e evolução",
    text: "Ajustes, melhorias e novas funcionalidades para manter seu projeto vivo.",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-ink py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções digitais para tirar sua ideia do papel"
          text="Da primeira tela à evolução contínua, a BTech cria produtos digitais com estratégia, estética e base técnica."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group rounded-2xl border border-line bg-panel/60 p-6 shadow-card transition duration-300 hover:-translate-y-2 hover:border-cyan/50 hover:bg-panel"
              >
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-cyan/25 bg-cyan/10 text-cyan transition group-hover:bg-cyan group-hover:text-ink">
                  <Icon size={23} />
                </span>
                <h3 className="text-xl font-bold text-pearl">{service.title}</h3>
                <p className="mt-3 leading-7 text-muted">{service.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
