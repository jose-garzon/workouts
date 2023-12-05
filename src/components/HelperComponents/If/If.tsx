import { ReactNode } from "react";

interface IfProps {
  condition: boolean;
  children: ReactNode;
}

export function If({ condition, children }: IfProps) {
  if (!condition) return null;
  return children;
}
