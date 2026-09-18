import { stubJson } from "@/lib/api/stub";

export async function GET() {
  return stubJson("eventos");
}

export async function POST() {
  return stubJson("eventos");
}
