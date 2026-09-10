\# NodiAI Frontend Development Instructions

\#\# Objective

Build the frontend UI/UX only.

No backend integration.

Use modular architecture from day one.

\---

\# Tech Stack

\- Next.js 15  
\- TypeScript  
\- Tailwind CSS  
\- Shadcn UI  
\- Framer Motion

\---

\# Folder Structure

src/

├── app/  
│   ├── page.tsx  
│   ├── about/  
│   ├── product/  
│   ├── solutions/  
│   ├── pricing/  
│   └── contact/  
│  
├── components/  
│   ├── layout/  
│   │   ├── Navbar.tsx  
│   │   ├── Footer.tsx  
│   │   └── Container.tsx  
│   │  
│   ├── sections/  
│   │   ├── HeroSection.tsx  
│   │   ├── ProblemSection.tsx  
│   │   ├── SolutionSection.tsx  
│   │   ├── FeaturesSection.tsx  
│   │   ├── UseCasesSection.tsx  
│   │   ├── DeploymentSection.tsx  
│   │   ├── TechnologySection.tsx  
│   │   ├── PilotProgramSection.tsx  
│   │   └── ContactSection.tsx  
│   │  
│   └── ui/  
│  
├── data/  
│   ├── features.ts  
│   ├── useCases.ts  
│   └── navigation.ts  
│  
├── lib/  
│  
├── types/  
│  
└── assets/

\---

\# Development Rules

\#\# Rule 1

Each section must be an independent component.

Never create one giant page file.

\---

\#\# Rule 2

All content should come from data files.

Example:

features.ts

useCases.ts

navigation.ts

\---

\#\# Rule 3

Keep components reusable.

No hardcoded content inside UI components.

\---

\#\# Rule 4

Use responsive-first design.

Mobile → Tablet → Desktop

\---

\#\# Rule 5

Maintain consistent spacing:

py-20

max-w-7xl

mx-auto

\---

\# Initial Deliverables

Phase 1

\- Navbar  
\- Hero  
\- Problem  
\- Solution  
\- Features  
\- Use Cases  
\- Footer

Phase 2

\- About Page  
\- Product Page  
\- Contact Page

Phase 3

\- Animations  
\- Dark Mode  
\- Lead Capture Forms

\---

\# Design Principles

\- Clarity over complexity  
\- Trust over hype  
\- Enterprise over consumer  
\- Explain value in 5 seconds

Website should feel like:

Linear  
Vercel  
Retool  
Notion

Not like a crypto project.  
