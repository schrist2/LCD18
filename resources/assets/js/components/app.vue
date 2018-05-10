<template>
    <div>
        <navbar></navbar>

        <transition v-on:enter="enter" name="fade" mode="out-in" appear="">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import navbar from './navbar';

    export default {
        name: 'app',
        components: {
            navbar
        },
        methods: {
            enter: () => {
                $('*').bootstrapMaterialDesign();
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
