import { motion } from "framer-motion";
import { BookOpenText, Dumbbell, Leaf, Salad } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const projects = [
  {
    title: "Aplicativo de atividade física",
    category: "Aplicativo",
    text: "Aplicativo desenvolvido para organizar treinos, facilitar o acompanhamento de atividades físicas e oferecer uma experiência simples para o usuário manter sua rotina.",
    tags: ["App mobile", "Saúde", "Organização"],
    icon: Dumbbell,
    type: "fitness",
  },
  {
    title: "Blog para psicóloga",
    category: "Blog profissional",
    text: "Blog desenvolvido para uma psicóloga compartilhar conteúdos, fortalecer sua presença digital e apresentar informações de forma clara, acolhedora e profissional.",
    tags: ["Blog", "Conteúdo", "Presença digital"],
    icon: BookOpenText,
    type: "blog",
  },
  {
    title: "Aplicativo para controle de alimentação",
    category: "Aplicativo",
    text: "Aplicativo desenvolvido para auxiliar no controle da alimentação, registro de hábitos e acompanhamento da rotina alimentar de forma prática e acessível.",
    tags: ["App mobile", "Alimentação", "Rotina"],
    icon: Salad,
    type: "nutrition",
  },
  {
    title: "Landing pages para consultoria ambiental",
    category: "Landing Page",
    text: "Landing pages desenvolvidas para uma empresa de consultoria ambiental apresentar serviços, comunicar sua proposta com clareza e direcionar visitantes para contato.",
    tags: ["Landing Page", "Consultoria ambiental", "Conversão"],
    icon: Leaf,
    type: "environment",
  },
];

function PhoneMockup({ variant }) {
  const isNutrition = variant === "nutrition";

  return (
    <div className="mx-auto w-40 rounded-[30px] border border-cyan/30 bg-ink p-2 shadow-glow">
      <div className="overflow-hidden rounded-[24px] bg-panel p-3">
        <div className="mb-4 flex items-center justify-between">
          <div className="h-3 w-16 rounded-full bg-cyan/60" />
          <div className="h-6 w-6 rounded-full bg-white/10" />
        </div>

        <div className="mb-3 rounded-2xl border border-line bg-gradient-to-br from-cyan/20 to-electric/20 p-3">
          <div className="h-2 w-20 rounded-full bg-white/30" />
          <div className="mt-3 h-8 rounded-xl bg-ink/50" />
        </div>

        <div className="space-y-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-xl border border-line bg-white/[0.04] p-2">
              <span
                className={`h-5 w-5 rounded-md ${
                  isNutrition ? "bg-cyan/25" : "bg-electric/35"
                }`}
              />
              <span className="h-2 flex-1 rounded-full bg-white/18" />
              {isNutrition && <span className="h-3 w-3 rounded-full border border-cyan/60" />}
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {[1, 2, 3, 4].map((item) => (
            <span key={item} className="h-8 rounded-lg bg-white/[0.06]" />
          ))}
        </div>
      </div>
    </div>
  );
}

function WebMockup({ variant }) {
  const isBlog = variant === "blog";

  return (
    <div className="rounded-xl border border-line bg-ink/80 p-3">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-electric/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        </div>
        <div className="h-2 w-24 rounded-full bg-white/12" />
      </div>

      <div className="grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-lg bg-white/[0.04] p-3">
          <div className="h-3 w-28 rounded-full bg-cyan/60" />
          <div className="mt-3 h-2 w-full rounded-full bg-white/15" />
          <div className="mt-2 h-2 w-9/12 rounded-full bg-white/15" />
          <div className="mt-4 h-8 w-28 rounded-lg bg-electric/70" />
        </div>

        <div className="rounded-lg bg-gradient-to-br from-cyan/20 to-electric/20 p-3">
          {isBlog ? (
            <div className="space-y-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-ink/45 p-2">
                  <div className="h-2 w-16 rounded-full bg-white/24" />
                  <div className="mt-2 h-2 w-24 rounded-full bg-white/12" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="mb-3 h-16 rounded-lg border border-white/10 bg-ink/45" />
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((item) => (
                  <span key={item} className="h-10 rounded-md bg-white/10" />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectMockup({ type }) {
  if (type === "fitness" || type === "nutrition") {
    return <PhoneMockup variant={type} />;
  }

  return <WebMockup variant={type} />;
}

export default function Projects() {
  return (
    <section id="projetos" className="bg-panel py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projetos"
          title="Projetos reais, criados para resolver necessidades reais"
          text="Aplicativos, blogs e landing pages desenvolvidos para transformar ideias em soluções digitais funcionais."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-line bg-ink/70 p-5 shadow-card transition hover:-translate-y-2 hover:border-cyan/50"
              >
                <div className="mb-5 rounded-2xl border border-line bg-panel/70 p-4">
                  <ProjectMockup type={project.type} />
                </div>
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan">
                    <Icon size={21} />
                  </span>
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold text-pearl">{project.title}</h3>
                    <p className="mt-3 leading-7 text-muted">{project.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
