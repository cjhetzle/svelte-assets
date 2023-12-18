import { prisma } from '$lib';
import { loading1Store } from '$lib/stores';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    submitForm: async ({request}) => {
        console.log(request, 'submitForm')
        const formData = await request.formData();
        const field = formData.get('field');
        const field1 = formData.get('field1');

        await prisma.posts.create({
            data: {
                field: field as string,
                field1: field1 as string,
            }
        })
        loading1Store.set(false);
    }
}