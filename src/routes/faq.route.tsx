import { Faq } from "@/components/pages/Faq";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  component: () => (
    <div>
      <Faq />
    </div>
  ),
});