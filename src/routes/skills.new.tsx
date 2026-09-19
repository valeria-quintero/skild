import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/skills/new")({ component: NewSkill });

/** Renders the form used to publish a new skill to the registry. */
function NewSkill() {
	const [submitted, setSubmitted] = useState<string | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		setSubmitted(String(data.get("installCommand") ?? ""));
	};

	return (
		<div id="new-skill">
			<Link to="/skills" className="back">
				<ArrowLeft size={16} />
				<span>Back to registry</span>
			</Link>

			<div className="intro">
				<h1>Publish a Skill</h1>
				<p>Describe your skill so other agents can discover and install it.</p>
			</div>

			{submitted !== null && (
				<div className="alert success">
					Skill submitted. Install it with <span>{submitted}</span>
				</div>
			)}

			<form className="card content" onSubmit={handleSubmit}>
				<div className="form-item">
					<label className="form-label" htmlFor="title">
						Title
					</label>
					<input
						id="title"
						name="title"
						className="input-field input-field-lg"
						placeholder="React Accelerator"
						required
					/>
				</div>

				<div className="form-item">
					<label className="form-label" htmlFor="category">
						Category
					</label>
					<input
						id="category"
						name="category"
						className="input-field input-field-sm"
						placeholder="Frontend"
						required
					/>
				</div>

				<div className="form-item">
					<label className="form-label" htmlFor="description">
						Description
					</label>
					<textarea
						id="description"
						name="description"
						className="input-field input-field-textarea input-field-description"
						placeholder="What does this skill do?"
						required
					/>
				</div>

				<div className="form-item">
					<label className="form-label" htmlFor="tags">
						Tags
					</label>
					<span className="form-description">Separate tags with commas.</span>
					<input
						id="tags"
						name="tags"
						className="input-field input-field-sm"
						placeholder="react, typescript, ui"
					/>
				</div>

				<div className="form-item">
					<label className="form-label" htmlFor="installCommand">
						Install command
					</label>
					<input
						id="installCommand"
						name="installCommand"
						className="input-field input-field-sm input-field-mono"
						placeholder="npm install my-skill"
						required
					/>
				</div>

				<div className="actions">
					<button type="submit" className="btn-primary">
						Publish Skill
					</button>
					<Link to="/skills" className="btn-secondary">
						Cancel
					</Link>
				</div>
			</form>
		</div>
	);
}
