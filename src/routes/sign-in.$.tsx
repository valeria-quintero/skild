import { SignIn } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-in/$")({ component: SignInPage });

/** Hosts Clerk's sign-in flow, including its nested verification steps. */
function SignInPage() {
	return (
		<div id="sign-in">
			<SignIn routing="path" path="/sign-in" />
		</div>
	);
}
