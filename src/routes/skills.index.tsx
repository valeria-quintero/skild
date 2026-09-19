import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import SkillCard from "#/components/SkillCard";
import dummySkills from "#/lib/skills";

export const Route = createFileRoute("/skills/")({ component: SkillsRegistry });

/** Renders the full registry of published skills. */
function SkillsRegistry() {
	const skills = [...dummySkills].sort(
		(a, b) =>
			(b.createdAt ? Date.parse(b.createdAt) : 0) -
			(a.createdAt ? Date.parse(a.createdAt) : 0),
	);

	return (
		<div id="skills-page">
			<div className="intro">
				<header>
					<h1>Skill Registry</h1>
					<p>Browse reusable agent skills published to the registry.</p>
				</header>
				<Link to="/skills/new" className="btn-primary">
					<Plus size={18} />
					<span>Publish Skill</span>
				</Link>
			</div>

			<div className="results">
				{skills.length > 0 ? (
					<>
						<p>
							{skills.length} {skills.length === 1 ? "skill" : "skills"}{" "}
							available.
						</p>
						<div className="skills-grid">
							{skills.map((skill) => (
								<SkillCard key={skill.id} {...skill} />
							))}
						</div>
					</>
				) : (
					<p>No skills have been published yet.</p>
				)}
			</div>
		</div>
	);
}
