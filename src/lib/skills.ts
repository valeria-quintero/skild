const dummySkills: SkillRecord[] = [
	{
		id: "skill-1",
		title: "React Accelerator",
		slug: "react-accelerator",
		description:
			"A curated starter bundle for building faster UI flows with React and TypeScript.",
		category: "Frontend",
		tags: ["react", "typescript", "ui"],
		installCommand: "npx create-vite@latest my-app --template react-ts",
		createdAt: "2026-09-01T12:00:00.000Z",
		authorClerkId: "user_123",
		authorEmail: "alex@example.com",
	},
	{
		id: "skill-2",
		title: "API Starter",
		slug: "api-starter",
		description:
			"Ready-to-use backend scaffolding for REST endpoints and validation patterns.",
		category: "Backend",
		tags: ["api", "node", "express"],
		installCommand: "npm install express zod cors",
		createdAt: "2026-09-03T15:30:00.000Z",
		authorClerkId: "user_456",
		authorEmail: "sam@example.com",
	},
	{
		id: "skill-3",
		title: "Tailwind UI Lab",
		slug: "tailwind-ui-lab",
		description:
			"A set of design system patterns for clean, responsive component surfaces.",
		category: "Design",
		tags: ["tailwind", "css", "design-system"],
		installCommand: "npm install tailwindcss @tailwindcss/vite",
		createdAt: "2026-09-05T09:45:00.000Z",
		authorClerkId: "user_789",
		authorEmail: "mila@example.com",
	},
	{
		id: "skill-4",
		title: "Auth Essentials",
		slug: "auth-essentials",
		description:
			"Secure authentication scaffolding with session handling and protected routes.",
		category: "Security",
		tags: ["auth", "security", "clerk"],
		installCommand: "npm install @clerk/clerk-react",
		createdAt: "2026-09-08T11:15:00.000Z",
		authorClerkId: "user_101",
		authorEmail: "nora@example.com",
	},
	{
		id: "skill-5",
		title: "Data Fetching Pack",
		slug: "data-fetching-pack",
		description:
			"Reusable hooks and utilities for caching, loading, and syncing remote data.",
		category: "Data",
		tags: ["tanstack", "query", "fetching"],
		installCommand: "npm install @tanstack/react-query",
		createdAt: "2026-09-12T18:20:00.000Z",
		authorClerkId: "user_202",
		authorEmail: "leo@example.com",
	},
];

export default dummySkills;
