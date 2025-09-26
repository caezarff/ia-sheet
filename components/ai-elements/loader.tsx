import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export type LoaderProps = HTMLAttributes<HTMLDivElement> & {
  size?: number;
};

export const Loader = ({ className, size = 16, ...props }: LoaderProps) => (
  <div
    className={cn(
      "inline-flex items-center justify-center",
      className
    )}
    {...props}
  >
    <div
      className="bg-current rounded-sm animate-spin transition duration-700"
      style={{ 
        width: size, 
        height: size,
        animationDuration: "2s"
      }}
    />
  </div>
);
