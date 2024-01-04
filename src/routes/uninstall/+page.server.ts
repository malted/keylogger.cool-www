import { redirect } from "@sveltejs/kit";
import { uninstallPath } from "$lib/consts";

export function load() {
	throw redirect(307, uninstallPath);
}
