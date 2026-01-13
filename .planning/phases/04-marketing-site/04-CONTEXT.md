# Phase 4: Marketing Site - Context

**Gathered:** 2026-01-13
**Status:** Ready for planning

<vision>
## How This Should Work

A combination site that serves multiple purposes: marketing landing page, component documentation with examples, getting started guide, and eventually premium signups. The overall layout and aesthetics should mirror shadcn/ui — clean minimal design with lots of whitespace, live component previews with code tabs, and sidebar navigation for docs.

Built with Next.js and dogfooding the Paradigm UI component library itself. When someone lands on the site, the first impression should hook them immediately — a professional, polished look that makes them want to explore further.

</vision>

<essential>
## What Must Be Nailed

- **First impression** - The landing/hero needs to immediately communicate "this is production-quality, not a toy"
- **Hero with live demo** - An interactive component demo right in the hero section that shows the library in action
- **Dogfooding** - The site itself should be built with Paradigm UI components, proving they work in real applications

</essential>

<boundaries>
## What's Out of Scope

- Full component docs for every component — just key examples for now
- Actual premium purchase/checkout flow — just showcase what premium offers
- User accounts, login, license management — that's a future milestone
- Payment integration (Stripe/Lemon Squeezy) — deferred

</boundaries>

<specifics>
## Specific Ideas

- Follow shadcn/ui aesthetic: clean, minimal, typography-focused with whitespace
- Live component previews with code tabs and copy buttons
- Sidebar docs navigation structure
- Hero section with interactive component demo

**Tiering Strategy (adjustment from Phase 2):**
- Most components should be free tier — building blocks like flex/grid, typography components
- Premium reserved for complex components — social links, hero, etc.
- Value prop: "Start free, upgrade when you need the fancy stuff"

</specifics>

<notes>
## Additional Context

The tiering decision affects how the site presents free vs premium. Lead with generous free value to get developers using the library, with premium as the "extra polish" for those who want the fancier components.

This is the final phase of the current milestone — the culmination of registry infrastructure, component organization, and documentation work.

</notes>

---

*Phase: 04-marketing-site*
*Context gathered: 2026-01-13*
