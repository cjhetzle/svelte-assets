import { writable } from 'svelte/store';

export const assets = writable<{ id: bigint, field: string, field1: string }[]>([]);

export const assetId = writable<string>('');
export const loadingStore = writable<boolean>(false);