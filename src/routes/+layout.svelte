<script>
	import "../global.css";
</script>

<!--<div id="noise" />-->
<slot />

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
