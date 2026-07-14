import { ReactNode } from "react";

export function Wrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-wrap px-5 sm:px-7 ${className}`}>
      {children}
    </div>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "silver" | "ghost";
  size?: "md" | "sm";
  className?: string;
};

export function Btn({
  href,
  children,
  variant = "silver",
  size = "md",
  className = "",
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm font-sans font-semibold whitespace-nowrap transition-transform duration-150 hover:-translate-y-px";
  const sizes =
    size === "sm" ? "px-4 py-[9px] text-[0.82rem]" : "px-[22px] py-3 text-sm";
  const variants =
    variant === "silver"
      ? "bg-silver text-ink hover:bg-[#EDEDEC]"
      : "bg-transparent text-sand border border-sand/35 hover:border-sand";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener" : undefined}
      className={`${base} ${sizes} ${variants} ${className}`}
    >
      {children}
    </a>
  );
}

export function Eyebrow({
  children,
  tone = "silver",
}: {
  children: ReactNode;
  tone?: "silver" | "steel";
}) {
  const color = tone === "silver" ? "text-silver" : "text-steeldim";
  const line = tone === "silver" ? "bg-silver" : "bg-steeldim";
  return (
    <p
      className={`mb-[22px] flex items-center gap-2.5 font-mono text-[0.78rem] uppercase tracking-[0.16em] ${color}`}
    >
      <span className={`inline-block h-px w-[26px] ${line}`} />
      {children}
    </p>
  );
}

export function PulseDivider({ tone }: { tone: "dark" | "light" }) {
  const bg = tone === "dark" ? "bg-ink" : "bg-sand";
  const stroke = tone === "dark" ? "#D4D5D7" : "#57585C";
  return (
    <div className={`relative h-16 overflow-hidden ${bg}`}>
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="absolute left-0 top-1/2 h-10 w-full -translate-y-1/2"
      >
        <path
          className="pulse-line animate-draw"
          d="M0,20 L340,20 L365,20 L380,4 L398,36 L416,20 L440,20 L860,20 L885,20 L900,4 L918,36 L936,20 L960,20 L1200,20"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
