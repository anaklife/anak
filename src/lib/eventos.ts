/**
 * Modelo mínimo de eventos. Sin datos reales todavía.
 */

export type Evento = {
  id: string;
  slug: string;
  titulo: string;
  fecha: string;
  publicado: boolean;
};

export const EVENTOS_PLACEHOLDER: Evento[] = [];
