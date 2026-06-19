import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AppWindow, ArrowRight, Brush, Code2, Layout, Rocket, Wrench, X } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const services = [
  {
    title: "Sites institucionais",
    summary: "Sites modernos, responsivos e claros para apresentar empresas, marcas e profissionais.",
    detail:
      "Ideal para apresentar a empresa, seus serviços, história, diferenciais e canais de contato em uma experiência clara e profissional.",
    includes: [
      "Página inicial",
      "Sobre, serviços e diferenciais",
      "Projetos ou experiências",
      "WhatsApp, Instagram e e-mail",
      "Layout responsivo",
    ],
    useCase: "Indicado para marcas que precisam de uma presença digital confiável e bem estruturada.",
    icon: Layout,
  },
  {
    title: "Landing pages",
    summary: "Páginas focadas em conversão para campanhas, lançamentos e captação de clientes.",
    detail:
      "Páginas objetivas, criadas para conduzir o visitante com clareza desde a apresentação da oferta até a ação principal.",
    includes: [
      "Chamada forte",
      "Benefícios e apresentação da oferta",
      "Perguntas frequentes",
      "Formulário ou botão para WhatsApp",
      "Estrutura otimizada para campanhas",
    ],
    useCase: "Indicada para divulgar uma oferta específica, validar uma ideia ou captar contatos qualificados.",
    icon: Rocket,
  },
  {
    title: "Aplicativos",
    summary: "Apps com interface intuitiva e experiência pensada para o usuário.",
    detail:
      "Soluções indicadas para ideias que precisam de uso recorrente, navegação simples e uma experiência organizada para o usuário final.",
    includes: [
      "Cadastro e login",
      "Painel do usuário",
      "Registros e acompanhamento",
      "Fluxos de navegação simples",
      "Interface responsiva e intuitiva",
    ],
    useCase: "Indicado para produtos digitais com rotina de uso, acompanhamento ou interação frequente.",
    icon: AppWindow,
  },
  {
    title: "Sistemas web",
    summary: "Plataformas sob medida para organizar processos e melhorar operações.",
    detail:
      "Ajudam empresas a centralizar informações, automatizar tarefas e gerenciar dados com mais clareza e controle.",
    includes: [
      "Login e painel administrativo",
      "Cadastros e organização de dados",
      "Filtros, buscas e relatórios",
      "Controle de status",
      "Fluxos sob medida para a operação",
    ],
    useCase: "Indicado para empresas que desejam organizar rotinas, processos internos e informações importantes.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    summary: "Interfaces bonitas, organizadas e funcionais.",
    detail:
      "Envolve a construção da estrutura visual e da experiência do usuário, pensando em hierarquia, clareza e consistência.",
    includes: [
      "Estrutura visual",
      "Hierarquia e organização das telas",
      "Componentes de interface",
      "Protótipo visual",
      "Padronização da experiência",
    ],
    useCase: "Indicado para transformar uma ideia em telas claras antes do desenvolvimento ou melhorar uma solução existente.",
    icon: Brush,
  },
  {
    title: "Manutenção e evolução",
    summary: "Ajustes, melhorias e acompanhamento técnico após a publicação.",
    detail:
      "Mantém o projeto atualizado, funcional e preparado para acompanhar novas necessidades da marca ou operação.",
    includes: [
      "Correções e melhorias",
      "Novas seções",
      "Ajustes de texto e layout",
      "Melhorias visuais",
      "Atualização de informações e otimização responsiva",
    ],
    useCase: "Indicada para projetos já publicados que precisam continuar evoluindo com qualidade.",
    icon: Wrench,
  },
];

function ServiceModal({ service, onClose }) {
  const Icon = service.icon;

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-ink/82 px-4 py-6 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 18 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-panel p-6 shadow-glow sm:p-8"
      >
        <button
          type="button"
          aria-label="Fechar detalhes"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-lg border border-line bg-white/5 text-muted transition hover:border-cyan/60 hover:text-pearl"
        >
          <X size={20} />
        </button>

        <div className="mb-7 flex items-center gap-4 pr-12">
          <span className="grid h-13 w-13 place-items-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan">
            <Icon size={26} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Serviço</p>
            <h3 id="service-modal-title" className="mt-1 text-2xl font-bold text-pearl sm:text-3xl">
              {service.title}
            </h3>
          </div>
        </div>

        <p className="text-lg leading-8 text-muted">{service.detail}</p>

        <div className="mt-8 rounded-2xl border border-line bg-ink/55 p-5">
          <h4 className="text-base font-bold text-pearl">O que pode incluir</h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {service.includes.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 rounded-2xl border border-cyan/25 bg-cyan/10 p-5">
          <h4 className="text-base font-bold text-pearl">Indicação de uso</h4>
          <p className="mt-2 leading-7 text-muted">{service.useCase}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="servicos" className="bg-ink py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções digitais para tirar sua ideia do papel"
          text="Da criação de sites profissionais à evolução contínua, a BTech desenvolve soluções digitais com estratégia, estética e base técnica."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.button
                key={service.title}
                type="button"
                onClick={() => setSelectedService(service)}
                aria-label={`Ver detalhes do serviço ${service.title}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group h-full rounded-2xl border border-line bg-panel/60 p-6 text-left shadow-card transition duration-300 hover:-translate-y-2 hover:border-cyan/50 hover:bg-panel focus:outline-none focus:ring-2 focus:ring-cyan/60"
              >
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-cyan/25 bg-cyan/10 text-cyan transition group-hover:bg-cyan group-hover:text-ink">
                  <Icon size={23} />
                </span>
                <h3 className="text-xl font-bold text-pearl">{service.title}</h3>
                <p className="mt-3 leading-7 text-muted">{service.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition group-hover:translate-x-1">
                  Ver detalhes
                  <ArrowRight size={16} />
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
