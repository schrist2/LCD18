<template>
    <div v-bind:class="'alert-'+type" class="alert alert-dismissible fade show" role="alert">
        <button v-on:click="$store.commit('clearAlert')" type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>

        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'alert',
        props: [
            'type',
            'message'
        ]
    }
</script>

<style scoped>
    .alert {
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 0.125rem;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }
</style>
