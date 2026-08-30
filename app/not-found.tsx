import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";



export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100dvh-80px)] items-center justify-center overflow-hidden bg-primary/5 px-6 py-20">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        {/* Small icon */}
        <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-background text-primary shadow-sm">
          <Sparkles size={24} strokeWidth={1.6} />
        </div>

        {/* 404 */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          404
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          This path seems to have shifted.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
          The page you are looking for could not be found. It may have moved,
          been removed, or perhaps the universe simply has another direction
          in mind for you.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            <Home size={17} strokeWidth={1.8} />
            Back to Home
          </Link>

          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-background-soft"
          >
            <ArrowLeft size={17} strokeWidth={1.8} />
            Explore Life Siddhi
          </Link>
        </div>

        {/* Bottom message */}
        <div className="mx-auto mt-14 h-px w-24 bg-primary/20" />

        <p className="mt-5 text-sm text-muted-foreground">
          Sometimes a wrong turn leads to the right place.
        </p>
      </div>
    </main>
  );
}
