/**
 * Stub Mercado Pago.
 * No crear preferencias ni checkout hasta la fase de eventos + pagos.
 */

export type PreferenciaInput = {
  titulo: string;
  monto: number;
  eventoId?: string;
};

export async function crearPreferenciaPago(
  input: PreferenciaInput,
): Promise<never> {
  void input;
  throw new Error("Mercado Pago no está implementado todavía.");
}

export function isMercadoPagoConfigured(): boolean {
  return Boolean(process.env.MERCADOPAGO_ACCESS_TOKEN);
}
