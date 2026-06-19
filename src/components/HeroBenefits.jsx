import { motion } from "framer-motion";
import { MonitorSmartphone, Sparkles, Target } from "lucide-react";

const benefits = [
  {
    title: "Sites responsivos",
    text: "Experiência adaptada para celular, tablet e computador.",
    icon: MonitorSmartphone,
  },
  {
    title: "Visual profissional",
    text: "Interface moderna, clara e alinhada à identidade da marca.",
    icon: Sparkles,
  },
  {
    title: "Foco em resultado",
    text: "Estrutura pensada para apresentar serviços e facilitar o contato.",
    icon: Target,
  },
];

export default function HeroBenefits() {
  return (
    <section className="border-y border-line bg-ink py-8">
      <div className="section-shell grid gap-4 md:grid-cols-3">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className="flex gap-4 rounded-2xl border border-line bg-panel/55 p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan">
                <Icon size={21} />
              </span>
              <div>
                <h3 className="text-base font-bold text-pearl">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{benefit.text}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
