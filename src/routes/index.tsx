import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <iframe
        title="Inconstância Mental"
        src="/inconstancia-mental.html"
        className="block h-screen min-h-screen w-full border-0"
      />
    </main>
  );
}
