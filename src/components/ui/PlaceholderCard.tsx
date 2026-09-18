import type { ReactNode } from "react";

export function PlaceholderCard({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-arena/50 bg-blanco p-5">
      <h2 className="text-base font-medium text-vino">{title}</h2>
      {children ? (
        <div className="mt-2 text-sm leading-6 text-cacao">{children}</div>
      ) : null}
    </section>
  );
}
