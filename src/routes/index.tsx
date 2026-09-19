import { createFileRoute, Link } from "@tanstack/react-router";
import { Divide, Terminal } from "lucide-react";
import SkillCard from "#/components/SkillCard";
import dummySkills from "#/lib/skills";

export const Route = createFileRoute("/")({ component: Home });

/** Renders the registry landing page and its latest skills. */
function Home() {
	const recentSkills = [...dummySkills].sort(
		(a, b) =>
			(b.createdAt ? Date.parse(b.createdAt) : 0) -
			(a.createdAt ? Date.parse(a.createdAt) : 0),
	);

	return (
		<div id="home">
			<section className="hero">
				<div className="copy">
					<h1>
						The Registry for <br />
						<span className="text-gradient">Agentic Intelligence</span>
					</h1>
					<p>
						A high-performance registry for procedural agent skills. Discover,
						publish, and operate reusable agent capabilities from a route-driven
						workspace.
					</p>
				</div>

				<div className="actions">
					<Link to="/skills" className="btn-primary">
						<Terminal size={18} />
						<span>Browse Registry</span>
					</Link>
					<Link to="/skills/new" className="btn-secondary">
						Publish Skill
					</Link>
				</div>
			</section>

			<section className="latest">
				<div className="space-y-2">
					<h2>
						Recently Created <span className="text-gradient">Skills</span>
					</h2>
					<p> Latest sample skills in descending creation order. </p>
				</div>

				<div>
					{recentSkills.length > 0 ? (
						<div className="skills-grid">
							{recentSkills.map((skill) => (
								<SkillCard key={skill.id} {...skill} />
							))}
						</div>
					) : (
						<p>No skills have been created yet.</p>
					)}
				</div>
			</section>
		</div>
	);
}
