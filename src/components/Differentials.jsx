import { motion } from "framer-motion";
import { Gauge, Gem, MonitorSmartphone, Palette, SlidersHorizontal, Workflow } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const items = [
  ["Visual moderno", Palette],
  ["Responsividade", MonitorSmartphone],
  ["Clareza", Gem],
  ["Performance", Gauge],
  ["Personalização", SlidersHorizontal],
  ["Organização", Workflow],
];

export default function Differentials() {
  return (
    <section className="bg-panel py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Diferenciais" title="Por que escolher a BTech?" />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([label, Icon], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-ink/70 p-5 transition hover:-translate-y-1 hover:border-cyan/50 hover:bg-ink"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan/10 text-cyan transition group-hover:bg-cyan group-hover:text-ink">
                <Icon size={22} />
              </span>
              <h3 className="text-lg font-bold text-pearl">{label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
