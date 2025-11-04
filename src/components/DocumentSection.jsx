import React from 'react';

export default function DocumentSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight">{title}</h2>
      <div className="mt-3 prose prose-zinc max-w-none prose-ul:my-1 prose-li:my-0.5">
        {children}
      </div>
      <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </section>
  );
}
