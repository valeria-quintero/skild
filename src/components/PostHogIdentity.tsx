import { useUser } from "@clerk/tanstack-react-start";
import { usePostHog } from "@posthog/react";
import { useEffect, useRef } from "react";

const PostHogIdentity = () => {
	const { isLoaded, isSignedIn, user } = useUser();
	const posthog = usePostHog();
	const previousUserId = useRef<string | null>();

	useEffect(() => {
		if (!isLoaded) return;

		const userId = isSignedIn ? user.id : null;

		if (userId) {
			if (previousUserId.current && previousUserId.current !== userId) {
				posthog.reset();
			}

			posthog.identify(userId, {
				email: user.primaryEmailAddress?.emailAddress,
				name: user.fullName ?? undefined,
			});
		} else if (previousUserId.current) {
			posthog.reset();
		}

		previousUserId.current = userId;
	}, [isLoaded, isSignedIn, posthog, user]);

	return null;
};

export default PostHogIdentity;
