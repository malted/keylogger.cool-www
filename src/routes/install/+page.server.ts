import { redirect } from "@sveltejs/kit";
import { installPath } from "$lib/consts";

export function load() {
	throw redirect(307, installPath);
}
