<!--
Sync Impact Report

- Version change: 1.0.0 -> 1.1.0
- Modified principles: added/defined three principles focused on code quality, user
	experience consistency, and performance requirements
- Added sections: Development Standards, UX Consistency Rules, Performance
	Requirements
- Removed sections: placeholder tokens replaced with concrete content
- Templates requiring updates: 
	- .specify/templates/plan-template.md: ✅ updated (Constitution Check reference now
		aligns with principles)
	- .specify/templates/spec-template.md: ✅ updated (Requirements and Success Criteria
		expectations aligned)
	- .specify/templates/tasks-template.md: ⚠ pending (task categories reviewed; manual
		confirmation suggested)
- Follow-up TODOs: RATIFICATION_DATE unknown - TODO(RATIFICATION_DATE)
-->

# yeejingye.github.io Constitution

## Core Principles

### I. Code Quality (NON-NEGOTIABLE)
All production code MUST be maintainable and readable. Requirements:
- Tests: Automated tests are RECOMMENDED for complex logic or shared libraries,
	but unit tests are NOT mandatory for every feature in this personal portfolio
	project. Use tests pragmatically where they provide clear value (e.g., script
	automation that updates citations).
- Linters & Formatters: Projects SHOULD use language-appropriate linters and a
	formatter; style checks are recommended to run locally and in CI where easy to
	integrate.
- Code Review: For this personal repo, code review is optional; however consider
	a self-review checklist or PR-based workflow for larger changes.
Rationale: High code quality reduces bugs and lowers maintenance cost, but this
repo prioritizes rapid iteration for a personal site.

### II. User Experience Consistency
All user-facing surfaces (web pages, navigation, content layout) MUST follow a
consistent design and interaction model. Requirements:
- Design Tokens: Use a shared set of spacing, color, and typography tokens across
	the site to ensure visual consistency.
- Interaction Patterns: Navigation, links, and form behaviors MUST behave
	consistently; keyboard and screen-reader accessibility MUST be considered.
- Content Guidelines: Headings, metadata, and page templates MUST follow the
	documented content structure to preserve predictable SEO and readability.
Rationale: Consistency improves usability, accessibility, and user trust.

### III. Performance & Reliability Requirements
The site MUST meet measurable performance targets and be resilient under typical
load. Requirements:
- Performance Targets: Page load TimeToInteractive (TTI) SHOULD be under 1.5s on
	a simulated 3G mobile connection for primary pages. Core pages (home, blog,
	project pages) MUST aim for a Lighthouse performance score >= 85.
- Resource Budgets: Use bundle size budgets and image sizing rules. New assets
	that increase the critical-path by more than 20% require justification.
- Caching & CDN: Public assets MUST be served via a CDN with appropriate cache
	headers. Builds MUST produce cache-friendly artifact names (content-hashed).
- Monitoring: Instrument basic uptime/performance monitoring where feasible and
	review alerts as part of ops responsibilities.
Rationale: Performance directly impacts user retention and search ranking.

## Development Standards
The repository SHOULD adopt minimal developer tooling to follow the constitution:
- CI: Continuous Integration SHOULD run linters and Lighthouse checks for main
	branches where feasible. Automated tests are optional per the Code Quality
	section.
- Branching: Feature branches SHOULD be short-lived and based off `main`.
- Dependency Management: Update dependencies periodically and track security
	advisories; major upgrades SHOULD include a migration plan.

## The Concept
A clean, high-performance personal website that serves as the central node for
professional identity. The site balances academic rigor (PhD, Fraunhofer IEM) with
active development work in AI and Mechatronics. It connects formal publications,
code, and professional network.

## Core Features
- The Trinity Link: High-visibility integrations with LinkedIn, Google Scholar,
	and GitHub.
- Curated Research: A section for PhD and research focus areas with polished
	publication listings synced from Google Scholar.
- Code Sandbox: A page for reusable code snippets and quick-test logic for
	mechatronics and AI utilities.
- Project Gallery: Showcase projects at the intersection of Mechanical
	Engineering and Software.

## Technical Architecture
- Engine: Hugo (Static Site Generator) for fast builds and Markdown-first
	content.
- Automation: Python scripts to sync Google Scholar citations and organize code
	snippets. Use scripts pragmatically and test critical automation where needed.

## UX Consistency Rules
Provide concrete, testable rules for contributors:
- Typography: Heading hierarchy MUST use the documented scale (H1, H2, H3).
- Navigation: Primary nav items MUST be present on all pages; active state MUST be
	visually distinct.
- Forms: All forms MUST include proper labels, and error states MUST be
	programmatically associated with inputs.

## Performance Requirements
Detail operational and developer-facing performance constraints:
- Image Handling: Images MUST be responsive, using srcset or modern formats like
	WebP/AVIF where supported. Large images MUST be lazy-loaded when offscreen.
- JavaScript: Defer non-critical JS; critical interactive bits should be minimal and
	progressively enhanced.
- Build: Production builds MUST minimize runtime overhead and avoid shipping
	development-only code.

## Governance
Amendments to this constitution MUST follow the procedure below:
- Proposal: Changes MUST be proposed as a PR against `.specify/memory/constitution.md`
	with a clear rationale and migration plan.
- Review: Proposals MUST receive approval from at least two repository maintainers.
- Versioning: Bumps to `CONSTITUTION_VERSION` follow semantic rules. PATCH for
	wording fixes, MINOR for added principles or guidance, MAJOR for breaking
	governance changes.
- Compliance: All PRs touching site behavior or content MUST include a short
	checklist referencing the relevant principles.

**Version**: 1.1.0 | **Ratified**: 2025-12-19 | **Last Amended**: 2025-12-19
