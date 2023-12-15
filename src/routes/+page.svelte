<script lang="ts">
	import { goto } from '$app/navigation';
import { pb } from '$lib';
	import { assetId, assets } from '$lib/stores';
	import AssetList from '../components/AssetAccordian.svelte';
	import type { PageData } from './$types';

    let assetIdValue = '';
    assetId.subscribe((value) => {
        assetIdValue = value;
        console.log('assetId.subscribe');
        console.log(assetIdValue)
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

        console.log(assetList)

        assets.update(() => assetList)
        
        console.log($assets);
    }

	export let data: PageData;

    queryPb();
</script>


<button class="btn btn-primary" on:click={queryPb}>Query</button>
<button class='btn' on:click={() => goto('/create')}>Create</button>
<button class='btn' on:click={() => {if (assetIdValue)goto(`/update/${assetIdValue}`)}}>Update</button>


<AssetList />

