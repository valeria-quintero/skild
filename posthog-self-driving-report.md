# PostHog Self-driving setup report

## Summary

PostHog Self-driving is configured for this web-based skill registry. Session Replay, Error Tracking, and Support were enabled, and native health, error, and support signal sources were turned on. Findings will begin appearing in the [Self-driving inbox](https://us.posthog.com/project/618014/inbox) within about 30 minutes as activity and recordings arrive.

## AI data processing

Approved by the wizard's organization-level gate before this setup began.

## GitHub

Connected before this run through the PostHog GitHub App; no GitHub Issues responder was enabled because no connected tools were selected.

## Products enabled

| Product | Result | Notes |
|---|---|---|
| Session Replay | enabled | Web client configuration is clean: the PostHog provider does not disable session recording. No recordings existed at setup time. |
| Error Tracking | enabled | Web client configuration is clean: exception capture is enabled. |
| Support (Conversations) | enabled | Connect an inbound email, inbox, or Slack channel in PostHog before support tickets can arrive. |

## Signal sources

| source_product | source_type | Action | Notes |
|---|---|---|---|
| health_checks | health_issue | enabled | Source config `01a0ba89-c075-7027-9a96-1c2575d03925`. |
| error_tracking | issue_created | enabled | Source config `01a0ba89-c19a-7945-811f-1c042d513951`. |
| error_tracking | issue_reopened | enabled | Source config `01a0ba89-c1a3-7b20-9fc7-ef3f79d5dd00`. |
| error_tracking | issue_spiking | enabled | Source config `01a0ba89-c1ef-74ad-b951-b28f9c6f496b`. |
| conversations | ticket | enabled | Source config `01a0ba89-c19f-7644-a9f3-a6901ae4c920`; idle until an inbound channel is connected. |
| signals_scout | cross_source_issue | skipped | On by default; no opt-out row existed. |
| session_replay | session_analysis_cluster | skipped | Retired responder; replay coverage is provided by Replay Vision scanners below. |
| replay_vision | scanner_finding | skipped | Scanners are self-authorizing through `emits_signals: true`; no source-config row is needed. |

## Connected tools

No external tools were selected. GitHub Issues, Linear, Jira, Sentry, and Zendesk were not used, so no connected-tool responder or warehouse source was added.

## Scout troop

**Run budget:** 100 runs/day maximum, 0 used today, 100 remaining. Announcement: “Scouts are in early access. Each project gets up to 100 scout runs a day. Contact team-self-driving@posthog.com if you need more.”

### Enabled (5)

| Scout | Why it is enabled |
|---|---|
| General | Cross-product correlations and otherwise uncovered surfaces. |
| Product analytics | Core user journey and engagement regression coverage. |
| Web analytics | Browser traffic and landing-page health coverage. |
| Health checks | Actionable instrumentation and PostHog setup issues. |
| Observability gaps | Important event activity lacking insight or alert coverage. |

### Disabled (22)

| Scout(s) | Reason |
|---|---|
| AI observability, APM, Logs, MCP tool calls | No evidence these product surfaces are in use. |
| Anomaly detection, Insight alerts | No current saved analytic or alert surface was identified; the selected scouts are a more useful fresh-project baseline. |
| Conversations | Support has no inbound channel yet; native ticket source is enabled for when one is connected. |
| CSP violations | No CSP reporting configuration was found. |
| Customer analytics | No account/group analytics evidence was found. |
| Data pipelines, Data warehouse | No pipelines or warehouse sources were selected. |
| Error tracking | Covered by the enabled native error-tracking responder. |
| Experiments, Feature flags, Surveys | No active use was found. |
| Inbox validation | The new inbox has no resolved fixes to validate yet. |
| Replay vision | No earlier Replay Vision observations exist; two scanners were created in this run. |
| Revenue analytics | No payment or revenue integration was found. |
| Session replay | Covered by the Replay Vision scanners below. |
| Skills store | Not a product surface evidenced by this repository. |
| Tasks | No PostHog Tasks surface was evidenced. |
| Web vitals | No Core Web Vitals usage or dedicated monitoring requirement was found. |

## Custom scouts

No custom scouts were created. A focused skill discovery-to-install journey scout was proposed because it would watch registry browsing, skill opening, and install-command copying; it was declined.

Surfaces ruled out: error tracking and session replay already have dedicated routes; publishing completion and authentication lack a complete success/failure event pair in this repository; revenue, AI, survey, and support workflows are not evidenced. If a future custom scout becomes noisy, set `emit: false` on its PostHog config to switch it to dry-run.

## Replay Vision scanners

A scanner is an LLM that watches individual session recordings on a schedule and pushes validated findings to the inbox. These are the only items in this setup that spend Replay Vision quota. Findings arrive at half weight and require corroboration before promotion into a report.

| Brief | Scanner | Status | Scope | Sampling | Estimate |
|---|---|---|---|---:|---|
| Breakage monitor | Skill registry breakage | created | Recordings that visited `/skills`, the registry browsing, skill-opening, install, and publish-entry flow. | 0.5 | 0 observations / 0 credits per month (no recordings yet). |
| Frustration monitor | Skill registry frustration | created | Recordings containing a rage click; no URL filter was added. | 1.0 | 0 observations / 0 credits per month (no recordings yet). |

Both scanners are enabled with `emits_signals: true`. The organization has 2,500 Replay Vision credits remaining for the current period and is not exhausted. There were no recordings at setup time, so these monitors are armed and begin working when recorded sessions arrive.

## Follow-ups

- [ ] Connect an inbound Support channel (email, inbox, or Slack) in PostHog so the enabled Conversations responder can receive tickets.
- [ ] Generate real browser activity and recordings; both Replay Vision scanners are armed but have no recordings to inspect yet.
- [ ] Review early scanner observations and rate them in the Replay Vision UI to receive tuning recommendations.

## Files created

- `posthog-self-driving-report.md` — this setup record.

No existing repository source files were modified.

## What happens next

The scout coordinator picks up fresh configurations within about 30 minutes. Scout runs draw from the verified 100-runs-per-day project budget; findings cluster into reports in the [Self-driving inbox](https://us.posthog.com/project/618014/inbox), where immediately actionable reports can start coding tasks.
