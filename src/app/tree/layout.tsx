import type { ReactNode } from "react";

export default function TreeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-svh w-full overflow-x-hidden overflow-y-auto bg-[#faf8f9]">
      {children}
    </div>
  );
}
