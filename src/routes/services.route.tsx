import { Services } from "@/UI/pages/Services";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: () => (
    <div>
      <Services />
    </div>
  ),
});
