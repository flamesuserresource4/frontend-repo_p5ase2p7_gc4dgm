import React from 'react';

export default function HeaderHero() {
  return (
    <header className="relative bg-gradient-to-b from-indigo-600 via-indigo-600/90 to-indigo-700 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center w-fit rounded-full bg-white/10 px-4 py-1 text-xs font-medium ring-1 ring-white/20 backdrop-blur">
            Product Strategy • Structured Specification
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Smarttingo</h1>
          <p className="max-w-3xl text-base sm:text-lg text-indigo-100">
            An AI‑first productivity app that converts a single written goal into a complete, actionable plan—stages, tasks, schedule, reminders—then tracks progress and adapts over time.
          </p>
        </div>
      </div>
    </header>
  );
}
