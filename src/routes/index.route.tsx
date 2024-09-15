import { Home } from "@/UI/pages/Home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div>
      <Home />
    </div>
  ),
});
