import { prisma } from '$lib';
import { assets } from '$lib/stores';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    console.log('load')
    const posts = await prisma.posts.findMany({
        take: 10,
    })
    console.log(posts, 'load')
    return { posts };
}) satisfies PageServerLoad;

export const actions = {
    refreshList: async ({request}) => {
        console.log(request, 'refreshList')

        const posts = await prisma.posts.findMany({
            take: 10,
        })

        console.log(posts, 'refreshList')
        assets.set(posts);
        return posts;
    }
}