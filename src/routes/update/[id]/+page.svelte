<script lang="ts">
	import { goto } from '$app/navigation';
	import { prisma } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;

	let loading = false;

	
</script>

<h1>Update</h1>

<p>{JSON.stringify({ data })}</p>

<form action="?/submitChanges" method="POST">
<label class="form-control w-full max-w-xs">
	<div class="label">
		<span class="label-text">Asset Name?</span>
	</div>
	<input
		type="text"
		placeholder="Type here"
		class="input input-bordered w-full max-w-xs"
		name="field"
	/>
	<div class="label">
		<span class="label-text-alt">Bottom Left label</span>
		<span class="label-text-alt">Bottom Right label</span>
	</div>
</label>
<label class="form-control w-full max-w-xs">
	<div class="label">
		<span class="label-text">Asset Field1?</span>
	</div>
	<input
		type="text"
		placeholder="Type here"
		class="input input-bordered w-full max-w-xs"
		name="field1"
	/>
	<div class="label"></div>
</label>
<button class="btn btn-active btn-neutral"  on:click={() => loading = true}
	>Submit</button
>
<button class="btn btn-active btn-neutral"  formaction="?/deleteAsset" on:click={() => loading = true}
	>Delete</button
><span class:loading class:loading-spinner={loading}></span>
</form>