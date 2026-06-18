/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070D",
        panel: "#0B1020",
        electric: "#2563EB",
        cyan: "#22D3EE",
        pearl: "#F8FAFC",
        muted: "#94A3B8",
        line: "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(34, 211, 238, 0.16)",
        card: "0 18px 60px rgba(0, 0, 0, 0.32)",
      },
      backgroundImage: {
        "radial-tech":
          "radial-gradient(circle at 18% 12%, rgba(34,211,238,0.18), transparent 28%), radial-gradient(circle at 86% 8%, rgba(37,99,235,0.22), transparent 24%), linear-gradient(180deg, #05070D 0%, #08101F 48%, #05070D 100%)",
      },
    },
  },
  plugins: [],
};
