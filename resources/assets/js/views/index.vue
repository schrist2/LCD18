<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: 'index',
        mounted () {
            if (this.$auth.check()) {
                this.$router.push({ name: 'user.home' });
            } else {
                this.$router.push({ name: 'auth.login' });
            }
        }
    }
</script>

<style scoped>

</style>
