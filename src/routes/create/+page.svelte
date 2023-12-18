<script lang="ts">
	import { loadingStore } from '$lib/stores';
	import type { ActionData, PageData } from './$types';

	let loading: Boolean;
	loadingStore.subscribe((value) => {
		loading = value;
	});
	export let form: ActionData;
</script>

<form method="POST" action="?/submitForm">
	<div class="form-group my-2">
		<label for="field">Field</label>
		<input
			type="text"
			class="form-control input input-bordered w-full max-w-xs"
			id="field"
			name="field"
		/>
	</div>
	<div class="form-group my-2">
		<label for="field1">Field1</label>
		<input
			type="text"
			class="form-control input input-bordered w-full max-w-xs"
			id="field1"
			name="field1"
		/>
	</div>
	<button formaction="?/submitForm" type="submit" on:click={() => loadingStore.set(true)} class="btn btn-accent m-5"
		>Submit<span class:loading class:loading-spinner={loading}></span></button
	>
</form>
