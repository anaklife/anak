import { stubJson } from "@/lib/api/stub";

export async function GET() {
  return stubJson("admin");
}

export async function POST() {
  return stubJson("admin");
}
