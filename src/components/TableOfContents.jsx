import React from 'react';

const sections = [
  { id: 'executive-summary', title: '1. Executive summary' },
  { id: 'core-features', title: '2. Core features' },
  { id: 'ai-behavior', title: '3. AI behavior & prompts' },
  { id: 'user-flows', title: '4. User flows' },
  { id: 'ui-ux', title: '5. UI/UX requirements' },
  { id: 'data-model', title: '6. Data model' },
  { id: 'api-endpoints', title: '7. API endpoints' },
  { id: 'architecture', title: '8. Architecture & tech stack' },
  { id: 'security', title: '9. Security & privacy' },
  { id: 'monetization', title: '10. Monetization' },
  { id: 'roadmap', title: '11. Roadmap & milestones' },
  { id: 'growth', title: '12. Growth & marketing' },
  { id: 'kpis', title: '13. KPIs & monitoring' },
  { id: 'edge-cases', title: '14. Edge cases & errors' },
  { id: 'sample-outputs', title: '15. Sample outputs' },
];

export default function TableOfContents() {
  return (
    <aside className="hidden lg:block lg:sticky lg:top-6 lg:h-[calc(100vh-1.5rem)]">
      <nav className="w-72 rounded-xl border border-zinc-200 bg-white/70 backdrop-blur p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-zinc-700">Contents</h2>
        <ul className="mt-3 space-y-1 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block rounded px-2 py-1 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
