<script lang="ts">
	import { Tabs } from 'radix-svelte';
	import '../app.css';

	let rootActivationOn = 'focus';
	let rootOrientation = 'horizontal';
	let rootDir = 'ltr';
</script>

<div class="navbar bg-base-100">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost dropdown">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path></svg
			>
			<ul class="p-4 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
				<li><a href="/">Home</a></li>
				<li><a href="/create">Create</a></li>
			</ul>
		</button>
	</div>
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/">Asset Manager</a>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost dropdown dropdown-end">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
				></path></svg>
			<ul class="p-4 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
				<li>
					<button data-toggle-theme="dark,retro" data-act-class="ACTIVECLASS">
						<input type="checkbox" class="toggle" checked />Theme</button
					>
				</li>
			</ul>
		</button>
	</div>
</div>
<div class="p-3">
	<slot />
</div>
