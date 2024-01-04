<script>
	import "../global.css";
	import Footer from "$lib/components/Footer.svelte";
</script>

<!--<div id="noise" />-->
<slot />
<Footer />

<style>
	#noise {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		background-image: url("/noise.webp");
		background-repeat: repeat;
		opacity: 0.08;
		z-index: -100;
	}
</style>
