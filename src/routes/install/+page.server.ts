import { redirect } from "@sveltejs/kit";

export function load() {
	throw redirect(307, "https://raw.githubusercontent.com/malted/keylogger.cool/main/install.sh");
}
