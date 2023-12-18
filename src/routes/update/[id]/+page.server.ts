import { prisma } from '$lib';
import { loadingStore } from '$lib/stores';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const asset = await prisma.posts
		.findUnique({
			where: { id: parseInt(params.id) }
		})
		.then((asset) => {
			return asset;
		});
	console.log(asset);
	return { id: params.id, field: asset?.field, field1: asset?.field1 };
}) satisfies PageServerLoad;

export const actions = {
	submitChanges: async ({ request, params }) => {
		const formData = await request.formData();
        console.log(formData, 'submitChanges')
		await prisma.posts.update({
			where: {
				id: parseInt(params.id)
			},
			data: {
				field: formData.get('field')?.toString(),
				field1: formData.get('field1')?.toString()
			}
		});
		loadingStore.set(false);
	},

    deleteAsset: async ({ request, params }) => {
		const formData = await request.formData();
        console.log(formData, 'submitChanges')
		await prisma.posts.delete({
			where: {
				id: parseInt(params.id)
			},
		});
		loadingStore.set(false);
	}
};
