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
    <section className="flex min-h-screen flex-col p-4">
      <header className="min-h-10 pb-2">
        {heading && <div className="text-2xl font-semibold">{heading}</div>}
        {subHeading && <div className="text-gray-700">{subHeading}</div>}
      </header>
      <div className={cn("flex-grow rounded-xl bg-card p-4", className)}>
        {children}
      </div>
    </section>
  );
}
