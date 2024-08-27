import { Projects } from "@/components/pages/Projects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: () => (
    <div>
      <Projects />
    </div>
  ),
});
