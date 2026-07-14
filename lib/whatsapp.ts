// EDITAR: troque pelo número real da Life (formato: 55 + DDD + número, só dígitos)
export const WHATSAPP_NUMBER = "5598900000000";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
