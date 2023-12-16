<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib';
	import { assetId, assets } from '$lib/stores';
	import AssetAccordion from '../components/AssetAccordion.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});

	let assetIdValue = '';
	assetId.subscribe((value) => {
		assetIdValue = value;
		console.log('assetId.subscribe');
		console.log(assetIdValue);
	});

	async function queryPb() {
		console.log('queryPb');
		const result = await pb.collection('posts').getFullList();

		const assetList = result.map((item) => {
			return {
				id: item.id,
				field: item.field,
				field1: item.field1
			};
		});

		console.log(assetList);

		assets.update(() => assetList);

		console.log($assets);
	}

	export let data: PageData;

	queryPb();
</script>

<button class="btn mx-2" on:click={queryPb}>Refresh</button>
<button class="btn mx-2 btn-accent" on:click={() => goto('/create')}>Create</button>
<button
	class="btn btn-primary mx-2"
	on:click={() => {
		if (assetIdValue) goto(`/update/${assetIdValue}`);
	}}>Update</button
>

<div
	class="my-5 grid grid-cols-2 justify-items-center align-items-center items-start sm:w-2/3 w-full max-w-max"
>
	<AssetAccordion />
</div>
