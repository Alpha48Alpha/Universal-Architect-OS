export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-12 px-8 py-24 sm:px-16">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Universal Architect OS
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Governance, innovation, and infrastructure for the intelligence age.
          </p>
        </header>

        <section>
          <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
            Built for AI researchers, technology founders, policy leaders,
            philanthropic funders, and research institutions working at the
            frontier of intelligence-era challenges.
          </p>
        </section>

        <section className="flex flex-col gap-4 sm:flex-row">
          <a
            className="flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy to Vercel
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
            href="https://replit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Replit
          </a>
        </section>
      </main>
    </div>
  );
}
