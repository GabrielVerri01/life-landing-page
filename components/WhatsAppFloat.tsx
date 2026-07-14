import { waLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    // EDITAR: número de WhatsApp em lib/whatsapp.ts
    <a
      href={waLink("Oi! Quero agendar uma aula experimental grátis.")}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-steeldim text-sand2 shadow-[0_8px_22px_rgba(0,0,0,0.28)] transition-transform duration-150 hover:scale-[1.06]"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[26px] w-[26px]">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2m0 1.8a8.1 8.1 0 0 1 8.1 8.11c0 4.47-3.63 8.1-8.1 8.1a8 8 0 0 1-4.09-1.12l-.29-.17-3.13.82.84-3.05-.19-.31a8.06 8.06 0 0 1-1.24-4.28 8.1 8.1 0 0 1 8.1-8.1m-4.44 4.6c-.18 0-.47.07-.72.34-.24.27-.94.91-.94 2.22 0 1.3.96 2.57 1.1 2.75.13.17 1.87 2.98 4.62 4.06 2.28.9 2.75.72 3.24.68.5-.05 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.12-.25-.19-.5-.32-.26-.13-1.53-.75-1.77-.84-.24-.09-.41-.13-.58.13-.17.26-.66.84-.81 1-.15.17-.3.19-.56.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.51-1.43-1.77-.15-.26-.02-.4.11-.53.12-.12.26-.3.4-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.45z" />
      </svg>
    </a>
  );
}
