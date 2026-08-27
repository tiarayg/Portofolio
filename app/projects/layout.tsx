export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.055)_1px,transparent_1px)] bg-[size:12px_12px]"
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
