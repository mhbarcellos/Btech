import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, text, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mx-auto max-w-3xl ${align === "left" ? "text-left" : "text-center"}`}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-normal text-pearl sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{text}</p>}
    </motion.div>
  );
}
