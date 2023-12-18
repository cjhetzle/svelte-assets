<script lang="ts">
	import { goto } from '$app/navigation';
	import { prisma } from '$lib';
	import { assetId, assets } from '$lib/stores';
	import AssetAccordion from '../components/AssetAccordion.svelte';
	import type { ActionData, PageData } from './$types';
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

	export let data: PageData;
	$: ({ posts } = data);
	$: assets.set(posts);
</script>

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
