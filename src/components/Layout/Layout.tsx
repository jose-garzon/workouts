import { ReactNode } from "react";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export function Layout({ title, children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] p-layout">
      <h1 className="mb-10">{title}</h1>
      {children}
    </div>
  );
}
