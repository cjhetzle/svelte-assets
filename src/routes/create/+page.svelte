<script lang="ts">
	import { goto } from '$app/navigation';
    import { pb } from '$lib';
	import { writable } from 'svelte/store';

    let defaultFormData = {
        field: '',
        field1: ''
    }
    let loading = false;

    const formData = writable(defaultFormData);


    async function createNewPost(e: Event) {
        if ($formData.field === '' || $formData.field1 === '') {
            alert('Please fill out both fields');
            return;
        }
        loading = true;
        console.log($formData.field);
        await pb.collection("posts").create({
            field: $formData.field,
            field1: $formData.field1
        });
        formData.set({
            field: '',
            field1: ''
        });
        loading = false;
        goto('/');
    }

</script>

<form on:submit={createNewPost}>
    
    <div class="form-group">
        <label for="field">Field</label>
        <input type="text" class="form-control" id="field" bind:value={$formData.field}>
    </div>
    <div class="form-group">
        <label for="field1">Field1</label>
        <input type="text" class="form-control" id="field1" bind:value={$formData.field1}>
    </div>
    <button type="submit" class="btn btn-primary">Submit<span class:loading class:loading-spinner={loading}></span></button>

</form>