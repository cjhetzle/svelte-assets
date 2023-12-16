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
	<div class="mb-5 mx-2">
		<div class="collapse collapse-plus bg-base-200 w-40 sm:w-60">
			<input type="radio" name="" value={item.id} bind:group={$assetId} />
			<div class="collapse-title text-xl font-medium">{item['field']}</div>
			<div class="collapse-content">
				<p>{item['field1']}</p>
			</div>
		</div>
	</div>
{/each}
