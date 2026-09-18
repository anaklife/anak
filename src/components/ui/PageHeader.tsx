export function PageHeader({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="space-y-2">
      {kicker ? (
        <p className="text-[11px] font-bold tracking-[0.22em] text-malva uppercase">{kicker}</p>
      ) : null}
      <h1 className="text-3xl font-black tracking-tight text-vino uppercase sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="font-serif max-w-2xl text-base leading-7 text-negro/75">{description}</p>
      ) : null}
    </header>
  );
}
