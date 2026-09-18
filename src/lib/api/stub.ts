/** Respuesta uniforme para endpoints aún no implementados. */
export function stubJson(resource: string, extra?: Record<string, unknown>) {
  return Response.json(
    {
      ok: false,
      stub: true,
      resource,
      message: "Endpoint pendiente de implementación.",
      ...extra,
    },
    { status: 501 },
  );
}
