import Bookings from "./bookings/page";

export default async function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Bookings />
    </div>
  );
}
