import { ClerkProvider } from "@clerk/tanstack-react-start";
import { PostHogProvider } from "@posthog/react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Crosshair } from "lucide-react";
import Navbar from "#/components/Navbar";
import PostHogIdentity from "#/components/PostHogIdentity";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Skild - The Registry for Agentic Intelligence",
			},
			{
				name: "description",
				content:
					"Discover, publish, and operate reusable agent capabilities from a route-driven workspace.",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const posthogToken = import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN;
	const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;

	if (import.meta.env.DEV && !posthogToken) {
		throw new Error(
			"VITE_PUBLIC_POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once VITE_PUBLIC_POSTHOG_PROJECT_TOKEN is configured",
		);
	}
	if (import.meta.env.DEV && !posthogHost) {
		throw new Error(
			"VITE_PUBLIC_POSTHOG_HOST variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once VITE_PUBLIC_POSTHOG_HOST is configured",
		);
	}

	const app = <AppContent>{children}</AppContent>;

	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="font-sans antialiased wrap-anywhere">
				{posthogToken && posthogHost ? (
					<PostHogProvider
						apiKey={posthogToken}
						options={{
							api_host: posthogHost,
							defaults: "2026-05-30",
							capture_exceptions: true,
							debug: import.meta.env.DEV,
						}}
					>
						{app}
					</PostHogProvider>
				) : (
					app
				)}
				<Scripts />
			</body>
		</html>
	);
}

function AppContent({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<PostHogIdentity />
			<div id="root-layout">
				<header>
					<div className="frame">
						<Navbar />
						<Crosshair />
						<Crosshair />
					</div>
				</header>

				<main>
					<div className="frame">{children}</div>
				</main>
			</div>

			<TanStackDevtools
				config={{
					position: "bottom-right",
				}}
				plugins={[
					{
						name: "Tanstack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
					TanStackQueryDevtools,
				]}
			/>
		</ClerkProvider>
	);
}
