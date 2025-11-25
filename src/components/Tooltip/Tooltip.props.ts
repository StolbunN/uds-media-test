import type { HTMLAttributes } from "react";

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  text: string
}