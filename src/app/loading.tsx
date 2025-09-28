export default function Loading() {
  return (
      <div className="flex min-h-[60vh] w-full items-center justify-center">
        <div
            className="h-8 w-8 animate-spin rounded-full border-2 border-accent-aqua border-t-transparent"
            aria-label="Loading"
            role="status"
            aria-live="polite"
        />
      </div>
  );
}