<script lang="ts">
	import { goto } from '$app/navigation';
import { pb } from '$lib';
	import type { PageData } from './$types';

    $: result = []
    async function queryPb() {
        console.log('queryPb');
        result = await pb.collection('posts').getFullList();
        
    }

	export let data: PageData;
</script>


<button class="btn btn-primary" on:click={queryPb}>Query</button>
<button on:click={() => goto('/create')}>Create</button>

{#each result as item}
    <div>{item["field"]} {item["field1"]}</div>
{/each}


