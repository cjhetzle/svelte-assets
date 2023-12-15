import { writable } from 'svelte/store';

export const assets = writable<{ id: string, field: string, field1: string }[]>([]);

export const assetId = writable<string>('');