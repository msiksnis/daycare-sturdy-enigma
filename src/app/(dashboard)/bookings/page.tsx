import Container from "@/components/Container";
import { cn } from "@/lib/utils";

interface BookingsProps {
  className?: string;
}

export default function Bookings({ className }: BookingsProps) {
  return (
    <Container heading="Bookings" subHeading="This will be the bookings page">
      <div className={cn("p-4", className)}>
        <div className="text-2xl">This will be the bookings page</div>
      </div>
    </Container>
  );
}
