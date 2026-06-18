import { motion } from "framer-motion";
import { Cpu, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent" />
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          align="left"
          eyebrow="Sobre"
          title="Tecnologia com estratégia, não só aparência"
          text="A BTech ajuda marcas, empreendedores e empresas a criarem presença digital com mais qualidade. Desenvolvemos sites, landing pages, aplicativos e sistemas com foco em design, funcionalidade e objetivo de negócio."
        />

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="glass-panel rounded-2xl p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-ink/70 p-5">
              <Cpu className="mb-5 text-cyan" size={28} />
              <h3 className="text-xl font-bold text-pearl">Base técnica</h3>
              <p className="mt-3 leading-7 text-muted">
                Código organizado, interfaces responsivas e estrutura preparada para manutenção.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-ink/70 p-5">
              <ShieldCheck className="mb-5 text-cyan" size={28} />
              <h3 className="text-xl font-bold text-pearl">Direção clara</h3>
              <p className="mt-3 leading-7 text-muted">
                Cada decisão visual e funcional nasce do objetivo que o projeto precisa cumprir.
              </p>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-line bg-gradient-to-br from-electric/20 to-cyan/10 p-5">
            <div className="mb-4 h-3 w-28 rounded-full bg-cyan/70" />
            <div className="grid gap-3 sm:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <span key={item} className="h-24 rounded-xl border border-white/10 bg-ink/45" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
