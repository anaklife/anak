/**
 * Stub Resend (emails transaccionales / marketing).
 * No enviar correos reales en esta fase.
 */

export type EmailInput = {
  to: string;
  subject: string;
  html?: string;
};

export async function enviarEmail(input: EmailInput): Promise<never> {
  void input;
  throw new Error("Resend no está implementado todavía.");
}

export function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}
