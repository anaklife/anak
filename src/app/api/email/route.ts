import { stubJson } from "@/lib/api/stub";

/** Stub Resend. No envía correos. */
export async function POST() {
  return stubJson("email");
}
