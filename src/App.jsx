import React from 'react';
import HeaderHero from './components/HeaderHero';
import TableOfContents from './components/TableOfContents';
import DocumentSection from './components/DocumentSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800">
      <HeaderHero />

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[18rem,1fr] gap-8">
          <TableOfContents />

          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
            <DocumentSection id="executive-summary" title="1. Executive summary">
              <p>
                Smarttingo is an AI‑first productivity app that transforms any single written goal
                into a complete, actionable plan. It breaks the goal into logical phases, tasks, and
                subtasks, aligns work to a realistic timeline, schedules sessions on the calendar,
                and sets smart reminders. It tracks progress, learns from user behavior, and adapts
                plans over time—keeping users focused on outcomes rather than task orchestration.
              </p>
            </DocumentSection>

            <DocumentSection id="core-features" title="2. Core features">
              <ul>
                <li>
                  <strong>Goal input:</strong> Single text field with support for natural language and quick actions (priority, due date, tags).
                </li>
                <li>
                  <strong>AI goal analysis:</strong> Intent detection, scope/complexity estimation, risk factors, and internal metadata such as required skill sets; never surfaces or recommends external resources.
                </li>
                <li>
                  <strong>Automatic plan generation:</strong> Phases → tasks → subtasks with clear outcomes and acceptance criteria. Includes dependencies and effort estimates.
                </li>
                <li>
                  <strong>Timeline and scheduling:</strong> Auto‑builds a calendar timeline from estimates, work hours, and preferences. Supports due dates, buffers, and rescheduling.
                </li>
                <li>
                  <strong>Smart reminders:</strong> Time‑based, progress‑based, and context‑based reminders that adapt to completion patterns.
                </li>
                <li>
                  <strong>Progress tracking:</strong> Daily check‑ins, completion rates, burndown, streaks, velocity and forecasted completion date.
                </li>
                <li>
                  <strong>Habit integration:</strong> Convert recurring tasks to habits with streaks and flexible cadence.
                </li>
                <li>
                  <strong>Sharing/export:</strong> Share read‑only links and export to PDF/CSV. No external resource recommendations.
                </li>
                <li>
                  <strong>Collaboration:</strong> Assign tasks to teammates, track ownership, and comment threads on tasks.
                </li>
                <li>
                  <strong>Quick add:</strong> Command palette to add tasks, set due dates, and tag items anywhere in the app.
                </li>
                <li>
                  <strong>Search, tags, lists, priority:</strong> Full‑text search with filters; tags and custom lists; P0/P1/P2 priority.
                </li>
                <li>
                  <strong>Recurring tasks:</strong> Flexible rules (daily/weekly/weekly‑N, monthly by date/weekday) with skip and catch‑up options.
                </li>
                <li>
                  <strong>Offline mode:</strong> Local cache with conflict resolution and queued sync.
                </li>
                <li>
                  <strong>Localization (i18n):</strong> Multi‑language UI with number/date locale support.
                </li>
                <li>
                  <strong>Themes:</strong> Light/dark and high‑contrast; theme follows system or user override.
                </li>
              </ul>
            </DocumentSection>

            <DocumentSection id="ai-behavior" title="3. AI behavior and prompts">
              <h3 className="text-lg font-semibold mt-4">Analysis procedure</h3>
              <ul>
                <li><strong>Intent detection:</strong> Classify the core objective and success criteria.</li>
                <li><strong>Size/complexity estimation:</strong> Rough effort range (S/M/L/XL) and estimated hours.</li>
                <li><strong>Risk factors:</strong> Ambiguity, timeline pressure, prerequisite gaps.</li>
                <li><strong>Internal metadata:</strong> Required skill sets, suggested milestones, dependencies. Stored but not exposed as external recommendations.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Prompt template (planning)</h3>
              <pre className="whitespace-pre-wrap rounded-md bg-zinc-50 p-3 text-sm text-zinc-800 border">
{`SYSTEM: You are a planning assistant that converts one goal into phases, tasks, and subtasks. No external resources.
INPUT:
- Goal (one sentence)
- Constraints (time window, work hours)
- Preferences (work days, session length)
RESPONSE (JSON): { phases: [ { name, outcome, tasks: [ { name, done_when, estimate_hours, priority, deps, subtasks: [name] } ] } ], summary: { total_hours, risks } }`}
              </pre>
              <h3 className="text-lg font-semibold mt-4">Re‑generation</h3>
              <ul>
                <li>Allow regenerate per phase or entire plan; preserve user edits unless explicitly replaced.</li>
                <li>Always reconcile estimates with remaining calendar availability.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Personalization</h3>
              <ul>
                <li>Learn preferred work windows, average task velocity, and deferral patterns.</li>
                <li>Adjust estimates, reminders, and scheduling accordingly.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Fallbacks</h3>
              <ul>
                <li>When uncertain, ask a single clarifying question and generate a conservative draft.</li>
                <li>Default to smaller chunks (max 90‑minute tasks) and extend timeline instead of guessing.</li>
              </ul>
            </DocumentSection>

            <DocumentSection id="user-flows" title="4. User flows">
              <h3 className="text-lg font-semibold mt-4">First‑time onboarding</h3>
              <ul>
                <li>Welcome → pick theme & time zone → work hours → notification opt‑in → create first goal.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Entering a goal</h3>
              <ul>
                <li>Single field → optional due date/tags/priority → submit → AI processes.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Reviewing generated plan</h3>
              <ul>
                <li>See phases with estimates and risks → expand tasks → accept all or customize.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Editing plan</h3>
              <ul>
                <li>Add/rename tasks, drag to reorder, set dependencies, change estimates; instant reschedule.
                </li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Scheduling tasks</h3>
              <ul>
                <li>Auto‑scheduled based on preferences; manual drag‑and‑drop on calendar; conflicts highlighted.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Tracking daily progress</h3>
              <ul>
                <li>Daily view shows today’s sessions; start/pause/complete; quick notes; streaks.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Sharing a plan</h3>
              <ul>
                <li>Create a read‑only share link; optionally invite collaborators with task assignment.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Convert a plan to a template</h3>
              <ul>
                <li>Save cleaned version as template with variables (dates, scope) for reuse.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Error states</h3>
              <ul>
                <li>AI uncertainty → clarifying question; network issues → offline queue; scheduling conflicts → suggestions to resolve.</li>
              </ul>
            </DocumentSection>

            <DocumentSection id="ui-ux" title="5. UI/UX requirements">
              <ul>
                <li><strong>Screens:</strong> Goal Input, AI Processing, Plan Breakdown, Task List, Task Details modal, Calendar, Dashboard, Settings.</li>
                <li><strong>Components:</strong> Editor field, phase/task cards, progress bars, calendar grid, filters, command palette, badges, toasts.</li>
                <li><strong>Wireframe notes:</strong> Primary actions top‑right; keyboard shortcuts; empty states explain next step and show example goal.</li>
                <li><strong>Microcopy:</strong> “Describe your goal in one sentence.” “We built a draft plan—review or accept to schedule.”</li>
                <li><strong>Accessibility:</strong> WCAG AA color contrast, focus states, screen reader labels, reduced motion option.</li>
              </ul>
            </DocumentSection>

            <DocumentSection id="data-model" title="6. Data model">
              <ul>
                <li><strong>User</strong> { id, email, name, timezone, locale, work_hours, prefs, created_at }</li>
                <li><strong>Goal</strong> { id, user_id, title, description, priority, tags[], due_date, status, created_at }</li>
                <li><strong>Plan</strong> { id, goal_id, summary, total_hours, risk_notes, version, created_at }</li>
                <li><strong>Phase</strong> { id, plan_id, name, outcome, order, estimate_hours }</li>
                <li><strong>Task</strong> { id, phase_id, name, done_when, estimate_hours, priority, deps[], assignee_id, status, tags[] }</li>
                <li><strong>Subtask</strong> { id, task_id, name, done, order }</li>
                <li><strong>Schedule</strong> { id, task_id, start, end, recurrence?, location?, source }</li>
                <li><strong>Notification</strong> { id, user_id, type, payload, send_at, status }</li>
                <li><strong>ActivityLog</strong> { id, user_id, entity, entity_id, action, meta, created_at }</li>
                <li><strong>Template</strong> { id, user_id, title, variables, structure_json, created_at }</li>
                <li><strong>Team</strong> { id, name, owner_id, members[], created_at }</li>
              </ul>
            </DocumentSection>

            <DocumentSection id="api-endpoints" title="7. API endpoints">
              <ul>
                <li>Auth: POST /auth/signup, POST /auth/login, POST /auth/logout, GET /auth/me</li>
                <li>Goals: POST /goals, GET /goals, GET /goals/:id, PATCH /goals/:id, DELETE /goals/:id</li>
                <li>Analyze: POST /goals/:id/analyze → returns plan JSON (phases/tasks/subtasks + estimates)</li>
                <li>Plans: GET /plans/:id, POST /plans/:id/regenerate, POST /plans/:id/apply-schedule</li>
                <li>Tasks: PATCH /tasks/:id, POST /tasks/:id/schedule, POST /tasks/:id/complete</li>
                <li>Dashboard: GET /dashboard → upcoming, overdue, progress, velocity</li>
                <li>Share: POST /plans/:id/share, GET /share/:token</li>
                <li>Export: GET /plans/:id/export?format=pdf|csv</li>
                <li>Templates: POST /templates, GET /templates, POST /goals/from-template</li>
                <li>Teams: POST /teams, POST /teams/:id/invite, PATCH /tasks/:id/assign</li>
              </ul>
              <p className="mt-2 text-sm text-zinc-600">All endpoints use JSON; pagination via cursor; idempotent updates where applicable.</p>
            </DocumentSection>

            <DocumentSection id="architecture" title="8. Architecture & tech stack recommendations">
              <ul>
                <li><strong>Frontend:</strong> React + Vite, Tailwind, offline cache with IndexedDB; service worker for sync.</li>
                <li><strong>Backend:</strong> FastAPI, async endpoints, background workers for AI jobs.</li>
                <li><strong>AI layer:</strong> Prompt‑based planner with deterministic schema; guardrails and validations.</li>
                <li><strong>DB:</strong> Document DB for plans/tasks (e.g., MongoDB). Pros: flexible schema; Cons: relational joins via app logic.</li>
                <li><strong>Queues:</strong> Redis/Cloud queue for scheduling, reminders, and AI job orchestration.</li>
                <li><strong>Caching:</strong> Read‑heavy dashboards via Redis; cache bust on write.</li>
                <li><strong>Offline sync:</strong> CRDT/last‑write‑wins with per‑field timestamps and merge previews.</li>
                <li><strong>Hosting:</strong> Containerized services with autoscaling; separate worker pool for AI and notifications.</li>
              </ul>
            </DocumentSection>

            <DocumentSection id="security" title="9. Security, privacy & compliance">
              <ul>
                <li>Encrypt in transit (TLS 1.2+) and at rest (managed KMS).</li>
                <li>Scoped tokens (short‑lived access + refresh) and role‑based permissions.</li>
                <li>Per‑workspace privacy controls; share links are signed, time‑limited, revocable.</li>
                <li>GDPR: DSR endpoints (export/delete), data minimization, purpose limitation, audit log.</li>
                <li>Rate limits per IP/user and anomaly detection to protect AI endpoints.</li>
              </ul>
            </DocumentSection>

            <DocumentSection id="monetization" title="10. Monetization">
              <ul>
                <li><strong>Freemium:</strong> 3 active goals, basic exports, single user.</li>
                <li><strong>Premium:</strong> Unlimited goals, advanced scheduling, custom templates, automations, priority support.</li>
                <li><strong>Team plan:</strong> SSO, roles, advanced sharing, activity reports.</li>
                <li><strong>Pricing ideas:</strong> Free; Pro $10–$15/user/mo; Team $18–$25/user/mo; Annual discounts.</li>
              </ul>
            </DocumentSection>

            <DocumentSection id="roadmap" title="11. Roadmap & milestones">
              <h4 className="text-base font-semibold">0–3 months (MVP)</h4>
              <ul>
                <li>Goal input → AI plan → scheduling → reminders → progress tracking.</li>
                <li>Export to PDF/CSV; basic sharing; light/dark themes.</li>
                <li>Metrics: activation rate, week‑1 retention, plan acceptance rate, schedule adherence.</li>
              </ul>
              <h4 className="text-base font-semibold mt-4">3–9 months (Core + AI)</h4>
              <ul>
                <li>Personalized estimates, recurring tasks, templates, offline sync.</li>
                <li>Metrics: DAU/MAU, task completion velocity, NPS, churn.</li>
              </ul>
              <h4 className="text-base font-semibold mt-4">9–18 months (Teams + mobile + i18n)</h4>
              <ul>
                <li>Team collaboration, roles, mobile apps, localization, advanced analytics.</li>
                <li>Metrics: workspace expansion, team retention, ARPU, LTV.</li>
              </ul>
            </DocumentSection>

            <DocumentSection id="growth" title="12. Growth & marketing ideas">
              <ul>
                <li>Viral hooks: shareable read‑only plans with branding; progress badges.</li>
                <li>Channels: Product Hunt launch, Reddit communities, creator partnerships, YouTube explainers.</li>
                <li>Onboarding experiments: example goals, one‑click accept plan, micro‑wins in first 5 minutes.</li>
                <li>Template marketplace (optional): curated goal templates with variables.</li>
              </ul>
            </DocumentSection>

            <DocumentSection id="kpis" title="13. KPIs & monitoring">
              <ul>
                <li>Activation (first plan accepted), D1/D7/D30 retention, DAU/MAU.</li>
                <li>Task completion velocity, schedule adherence, reminder effectiveness.</li>
                <li>Conversion to paid, ARPU, churn, LTV.</li>
                <li>Monitoring: app analytics, performance traces, error budgets, alerting for queue lag.</li>
              </ul>
            </DocumentSection>

            <DocumentSection id="edge-cases" title="14. Edge cases & error handling">
              <ul>
                <li>AI fails to parse: show clarifying options (choose scope, due date) and create minimal scaffold.</li>
                <li>Ambiguous text: request a single clarifying detail; avoid hallucinated specifics.</li>
                <li>Offline conflicts: field‑level merges with preview; user picks winner; keep both history.</li>
                <li>Scheduling conflicts: highlight overlaps; offer auto‑resolve (push, split, reassign).</li>
                <li>Time zones: store in UTC; render in user TZ; handle DST with calendar library.</li>
              </ul>
            </DocumentSection>

            <DocumentSection id="sample-outputs" title="15. Sample outputs">
              <h4 className="text-base font-semibold">Example 1: “Launch a personal portfolio website in 4 weeks.”</h4>
              <ul>
                <li><strong>Phase 1:</strong> Define scope (4h) — tasks: goals & content outline; accept when pages list finalized.</li>
                <li><strong>Phase 2:</strong> Design (8h) — tasks: choose layout, color/typography; subtasks: hero, about, projects.</li>
                <li><strong>Phase 3:</strong> Build (14h) — tasks: implement pages, responsive pass, contact form.</li>
                <li><strong>Phase 4:</strong> Polish & launch (6h) — tasks: QA, performance check, deploy, announce.</li>
                <li><strong>Schedule:</strong> 90‑min sessions on Tue/Thu evenings + Sat morning; reminders 15m before.</li>
              </ul>
              <h4 className="text-base font-semibold mt-4">Example 2: “Prepare for a 10K run in 8 weeks.”</h4>
              <ul>
                <li><strong>Phase 1:</strong> Baseline & plan (3h) — tasks: test run, set pace targets, plan weeks.</li>
                <li><strong>Phase 2:</strong> Build endurance (20h) — tasks: 3 runs/week; subtasks: long run, intervals, recovery.</li>
                <li><strong>Phase 3:</strong> Speed work (16h) — tasks: tempo runs, hill repeats; cross‑training.</li>
                <li><strong>Phase 4:</strong> Taper & race (5h) — tasks: reduce volume, sleep focus, race day prep.</li>
                <li><strong>Schedule:</strong> Mon/Wed/Fri mornings; reminders night before + 30m before.</li>
              </ul>
              <h4 className="text-base font-semibold mt-4">Example 3: “Learn basic Spanish in 6 weeks.”</h4>
              <ul>
                <li><strong>Phase 1:</strong> Foundations (10h) — tasks: alphabet, common phrases, numbers.</li>
                <li><strong>Phase 2:</strong> Grammar basics (12h) — tasks: present tense, adjectives, question forms.</li>
                <li><strong>Phase 3:</strong> Practical vocab (12h) — tasks: travel, food, directions; daily speaking drills.</li>
                <li><strong>Phase 4:</strong> Conversation (8h) — tasks: dialogues, role‑play, review.</li>
                <li><strong>Schedule:</strong> 30‑minute daily sessions; streak reminders at user’s preferred time.</li>
              </ul>
            </DocumentSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
