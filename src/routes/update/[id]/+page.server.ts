import { pb } from '$lib';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    const asset = await pb.collection('posts').getOne(`${params.id}`).then((asset) => { return asset; });
    console.log(asset);
    return {asset};
}) satisfies PageServerLoad;