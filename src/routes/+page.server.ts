import { redirect } from "@sveltejs/kit";
import { installPath } from "$lib/consts";

export function load({ request }: { request: Request }) {
	const userAgent = request.headers.get("user-agent");
	if (!userAgent) return;

	console.log(userAgent);

	const terminalAgents = ["curl", "Wget"];
	if (terminalAgents.some((agent) => userAgent.includes(agent))) {
		// This is a terminal, so we can redirect to the raw file
		throw redirect(307, installPath);
	}

	const isMac = userAgent.includes("Macintosh");

	return { isMac };
}
