<script lang="ts">
	import { fly } from "svelte/transition";
	import { shInstall } from "$lib/consts";

	interface IData {
		isMac: boolean;
	}

	export let data: IData;

	$: console.log(data);

	let copied = false;
	const copyInstall = () => {
		navigator.clipboard.writeText(shInstall);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2_500);
	};
</script>

<main>
	<center class="text-red-500" style="text-wrap: balance;"
		>Caution: pre-alpha, in-development software. Do not download until stable. Will probably be a
		week or two. Check GitHub. Message me if you're interested in this!
	</center>

	<header>
		<img src="/logo.svg" alt="logo" width="136" id="logo-main" class="mb-8" />
		<h1>Keylogging for Data Science</h1>
		<h2>Securely collect statistics about how you type, then analyse it à la Spotify wrapped.</h2>
	</header>

	<div class="flex flex-col items-center m-16">
		<p>Install</p>
		<div class="install my-4 px-4 py-2 bg-[#fff1]">
			<code>{shInstall}</code>
			<button class="rounded p-1" onclick={copyInstall}>
				<img src="/clipboard.svg" width="20" alt="clipboard" class="select-none" />
			</button>
		</div>

		<div id="platform">
			<img src="/apple.svg" width="16" alt="apple" class="select-none" />
			<p>Built for Apple Silicon</p>
		</div>
		{#if copied && !data.isMac}
			<p in:fly={{ y: -20 }} out:fly={{ y: 20 }} class="text-sm opacity-50">
				...and only for Apple silicon. Sorry.
			</p>
		{/if}
	</div>
</main>

<style>
	main {
		margin: 1rem;
	}

	header {
		margin-top: 10vh;

		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		text-wrap: balance;
	}

	.install {
		border-radius: 1.3rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;

		transition: all 0.1s ease-in-out;

		box-shadow:
			0 1px 1px #22c55e40,
			inset 0 1px 1px rgba(255, 255, 255, 0.1);
	}
	.install:hover {
		transform: translateY(-2px);
		box-shadow:
			0 3px 1px #22c55e40,
			inset 0 1px 1px rgba(255, 255, 255, 0.2);
	}
	.install:active {
		transform: translateY(2px);
		box-shadow:
			0 0px 1px #22c55e40,
			inset 0 1px 1px rgba(255, 255, 255, 0.05);
	}

	.install button {
		transition: all 0.1s ease-in-out;
	}
	.install button:hover {
		transform: scale(1.1);
	}
	.install button:active {
		transform: scale(0.9);
	}

	.install button img {
		filter: invert(1);
		opacity: 0.5;
	}

	#platform {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1ch;
		opacity: 0.5;
	}
	#platform img {
		filter: invert(1);
	}
</style>
