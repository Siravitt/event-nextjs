import { useRouter } from "next/router";
import { getEventById } from "@/dummy-data";

export default function EventDetailPage() {
  const router = useRouter();
  const event = getEventById(router.query.id)

  if (!event) {
    return <h1>Error</h1>
  }
  return (
    <div>
      <h1>Event Detail</h1>
      <p>{event.title}</p>
    </div>
  );
}
