import { EVENTOS_PLACEHOLDER } from "@/lib/eventos";
import { PlaceholderCard } from "@/components/ui/PlaceholderCard";

export function EventosList() {
  if (EVENTOS_PLACEHOLDER.length === 0) {
    return (
      <PlaceholderCard title="Próximos eventos especiales">
        <p>No hay eventos cargados. Distinto a las clases regulares. Registro y pagos después.</p>
      </PlaceholderCard>
    );
  }

  return (
    <ul className="grid gap-3">
      {EVENTOS_PLACEHOLDER.map((evento) => (
        <li key={evento.id}>
          <PlaceholderCard title={evento.titulo}>
            <p>{evento.fecha}</p>
          </PlaceholderCard>
        </li>
      ))}
    </ul>
  );
}
