"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleButtonClick = () => {
    setClicking(true);
    setTimeout(() => {
      setClicking(false);
      setShowForm(true);
    }, 280);
  };

  useEffect(() => {
    if (!showForm) return;
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => setFormVisible(true));
    });
    return () => cancelAnimationFrame(t);
  }, [showForm]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || submitting) return;
    setSubmitting(true);
    const form = formRef.current;
    const body = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mojnbwpq", {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
      else throw new Error("Submit failed");
    } catch {
      setSubmitting(false);
    }
  };

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

            <div className="mt-6 min-h-[52px] overflow-hidden transition-all duration-500 ease-out">
              {!showForm ? (
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className={`inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 ease-out hover:bg-zinc-800 ${
                    clicking ? "scale-95 opacity-80" : "scale-100 opacity-100"
                  }`}
                >
                  Get on the list
                </button>
              ) : !submitted ? (
                <div
                  className={`transition-all duration-300 ease-out ${
                    formVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                >
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-2"
                  >
                    <label className="flex flex-1 flex-col gap-1.5 text-sm font-medium text-zinc-700">
                      <span className="sr-only">Your email</span>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="rounded-full border border-[#ebdfd0] bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400/20"
                      />
                    </label>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="shrink-0 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 disabled:opacity-60"
                    >
                      {submitting ? "Sending…" : "Submit"}
                    </button>
                  </form>
                </div>
              ) : (
                <p className="text-base font-medium text-emerald-600">
                  You&apos;re on the list. We&apos;ll be in touch.
                </p>
              )}
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}
