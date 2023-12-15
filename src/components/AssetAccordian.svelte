<script>
	import { assetId, assets } from '$lib/stores';
	import { stringify } from 'postcss';

	/**
	 * @type {any[]}
	 */
	let assetList = [];
	assets.subscribe((value) => {
		console.log('assets.subscribe');
		assetList = value;
		console.log(assetList);
	});
</script>



{#each assetList as item}
<div class="collapse collapse-plus bg-base-200">
	<input type="radio" name="my-accordion-3" value={item.id} bind:group={$assetId} />
	<div class="collapse-title text-xl font-medium">{item["field"]}</div>
	<div class="collapse-content">
		<p>{item["field1"]}</p>
	</div>
</div>
{/each}
