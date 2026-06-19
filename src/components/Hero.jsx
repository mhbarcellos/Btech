import { motion } from "framer-motion";
import { ArrowRight, Layers, Play, Sparkles, Zap } from "lucide-react";
import { contactLinks } from "../config/contact.js";

function DashboardMockup() {
  const bars = ["h-16", "h-24", "h-14", "h-28", "h-20", "h-32", "h-24"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[560px]"
    >
      <div className="absolute -inset-8 rounded-[32px] bg-cyan/10 blur-3xl" />
      <div className="glass-panel relative overflow-hidden rounded-2xl p-4 sm:p-5">
        <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
            <span className="h-3 w-3 rounded-full bg-cyan/80" />
          </div>
          <div className="h-2 w-28 rounded-full bg-white/12" />
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.35fr]">
          <div className="rounded-xl border border-line bg-white/[0.04] p-4">
            <div className="mb-4 h-3 w-24 rounded-full bg-cyan/70" />
            <div className="space-y-3">
              {["w-full", "w-10/12", "w-8/12"].map((width) => (
                <div key={width} className={`h-3 ${width} rounded-full bg-white/12`} />
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-electric/18 p-3">
                <div className="mb-2 h-7 w-7 rounded-lg bg-cyan/25" />
                <div className="h-2 w-12 rounded-full bg-white/20" />
              </div>
              <div className="rounded-lg bg-white/[0.05] p-3">
                <div className="mb-2 h-7 w-7 rounded-lg bg-electric/30" />
                <div className="h-2 w-10 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-panel/80 p-4">
            <div className="flex items-end justify-between gap-2">
              {bars.map((height, index) => (
                <motion.span
                  key={`${height}-${index}`}
                  initial={{ scaleY: 0.35 }}
                  animate={{ scaleY: [0.65, 1, 0.82] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: index * 0.12,
                  }}
                  className={`${height} min-w-0 flex-1 origin-bottom rounded-t-lg bg-gradient-to-t from-electric to-cyan`}
                />
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-lg border border-line bg-white/[0.04] p-3">
                  <div className="mb-3 h-2 w-12 rounded-full bg-white/18" />
                  <div className="h-8 rounded-md bg-gradient-to-r from-cyan/25 to-electric/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute -left-2 top-12 hidden rounded-xl p-4 sm:block"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan/15 text-cyan">
            <Zap size={20} />
          </span>
          <div>
            <div className="h-2 w-20 rounded-full bg-white/30" />
            <div className="mt-2 h-2 w-14 rounded-full bg-cyan/60" />
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute -bottom-4 right-2 hidden rounded-xl p-4 sm:block"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-electric/20 text-cyan">
            <Sparkles size={20} />
          </span>
          <div>
            <div className="h-2 w-24 rounded-full bg-white/30" />
            <div className="mt-2 h-2 w-16 rounded-full bg-electric/70" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-radial-tech pt-32 sm:pt-36 lg:pt-40">
      <div className="mesh-line absolute inset-0 opacity-70" />
      <div className="section-shell relative grid min-h-[calc(100vh-40px)] items-center gap-12 pb-24 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan">
            <Layers size={16} />
            Desenvolvimento digital premium
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-normal text-pearl sm:text-5xl lg:text-6xl">
            Criamos sites profissionais, apps e sistemas para marcas que querem crescer
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            A BTech desenvolve sites, landing pages, aplicativos e sistemas web modernos,
            responsivos e estratégicos para transformar ideias em presença digital real.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-electric px-6 py-4 font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:bg-cyan hover:text-ink"
            >
              Começar um projeto
              <ArrowRight size={19} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white/5 px-6 py-4 font-semibold text-pearl transition hover:-translate-y-1 hover:border-cyan/60 hover:bg-white/10"
            >
              <Play size={18} />
              Ver serviços
            </a>
          </div>
        </motion.div>

        <DashboardMockup />
      </div>
    </section>
  );
}
