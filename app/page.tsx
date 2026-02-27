export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f6f3ee] px-4 py-10 text-zinc-900">
      <main className="w-full max-w-5xl rounded-[32px] border border-[#f0e6db] bg-[#fdfaf5] px-6 py-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:px-10 sm:py-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr,1.2fr] md:items-start">
          <section>
            <div className="font-serif mb-6 text-2xl font-semibold italic tracking-tight text-zinc-800 sm:text-3xl">
              Greenlight for Screenwriters & Creatives
              <span className="block text-lg font-normal not-italic text-zinc-500">
                Early access
              </span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-[2.4rem] sm:leading-tight">
              Budget your story, 
              <span className="pl-2 font-normal text-zinc-800">
                  before you step on set.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg">
              Greenlight for Screenwriters & Creatives reads your screenplay and estimates production costs
              for locations, cast, stunts, VFX, and more, giving you a grounded
              budget for every pitch meeting.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="mailto:info@greenlight.ai?subject=Greenlight%20AI%20early%20access"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white shadow-sm transition hover:bg-zinc-800"
              >
                Get on the list
              </a>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}
