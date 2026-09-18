import { stubJson } from "@/lib/api/stub";

/** Stub Mercado Pago. No procesa pagos. */
export async function POST() {
  return stubJson("pagos");
}
