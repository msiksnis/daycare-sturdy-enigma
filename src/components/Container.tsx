import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
  className?: string;
}

export default function Container({
  children,
  heading,
  subHeading,
  className,
}: ContainerProps) {
  return (
    <section className="flex min-h-[calc(100vh-2rem)] flex-col">
      <header className="pb-2">
        {heading && <div className="text-3xl font-semibold">{heading}</div>}
        {subHeading && <div className="text-gray-700">{subHeading}</div>}
      </header>
      <div className={cn("bg-muted/50 flex-grow rounded-xl", className)}>
        {children}
      </div>
    </section>
  );
}
