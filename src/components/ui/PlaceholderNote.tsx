export function PlaceholderNote({ children }: { children: string }) {
  return (
    <p className="rounded-md border border-dashed border-malva bg-blanco/60 px-3 py-2 text-xs leading-5 text-cacao">
      {children}
    </p>
  );
}
