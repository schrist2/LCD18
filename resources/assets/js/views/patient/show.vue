<template>
    <div class="card">
        <h5 class="card-header">
            {{ $t('Patient') }}
        </h5>
        <div class="card-body">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'show',
        mounted () {
            this.$store.dispatch('patient/fetchShow', this.$route.params.id).then(() => {

            });
        }
    }
</script>

<style scoped>

</style>
