import Container from "@/components/Container";
import { cn } from "@/lib/utils";

interface pageProps {
  className?: string;
}

export default function Bookings({ className }: pageProps) {
  return (
    <Container heading="Bookings" subHeading="This will be the bookings page">
      <div className={cn("p-4", className)}>
        <div className="text-2xl">This will be the bookings page</div>
      </div>
    </Container>
  );
}
