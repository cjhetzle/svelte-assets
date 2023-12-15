<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;

	let id = data.asset.id;
	let name = data.asset.field;
	let field1 = data.asset.field1;
	let loading = false;

	async function submitChanges() {
		loading = true;
		await pb.collection('posts').update(id, {
			field: name,
			field1: field1
		});
		loading = false;
		goto('/');
	}
</script>

<h1>Update</h1>

<p>{JSON.stringify({ data })}</p>

<label class="form-control w-full max-w-xs">
	<div class="label">
		<span class="label-text">Asset Name?</span>
	</div>
	<input
		type="text"
		placeholder="Type here"
		class="input input-bordered w-full max-w-xs"
		bind:value={name}
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
		bind:value={field1}
	/>
	<div class="label"></div>
</label>
<button class="btn btn-active btn-neutral" on:click={submitChanges}
	>Submit<span class:loading class:loading-spinner={loading}></span></button
>
