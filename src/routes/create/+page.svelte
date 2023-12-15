<script lang="ts">
    import { pb } from '$lib';
	import { writable } from 'svelte/store';

    let defaultFormData = {
        field: '',
        field1: ''
    }

    const formData = writable(defaultFormData);


    async function createNewPost(e: Event) {
        console.log($formData.field);
        await pb.collection("posts").create({
            field: $formData.field,
            field1: $formData.field1
        });
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
    <button type="submit" class="btn btn-primary">Submit</button>

</form>