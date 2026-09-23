# volt-exchange

<!-- Starter from bwe-arsenal/quality-rig. Keep this file under ~200 lines:
     it loads into every session. Put reference material in .claude/skills/
     and folder-specific rules in .claude/rules/ (with `paths:` frontmatter).
     Every line should pass: "would removing this cause a mistake?" -->

## What this is
TODO: one or two sentences on what this product is and who uses it.
Stack: Next.js, Tailwind.

## Commands
- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`

## Rules that aren't obvious from the code
- None recorded yet. Add a rule the second time Claude gets something wrong here.

## Never
- Never commit or push with `--no-verify` (the bwe-core guard blocks it).
- Never put secrets in code, prompts or commit messages; use the platform's secret store.
- Never hand-edit generated files (e.g. Supabase types); regenerate them.

## House layer
This repo installs the BWE arsenal (see `.claude/settings.json`): `bwe-core` (guards,
memory, context discipline), `bwe-build` (ship gate, QA and security reviewers),
`bwe-design` (UI standards). Third-party craft packs (impeccable, emil-skills,
gsap-skills…) come from `bwe-arsenal/third-party/install.sh`.
