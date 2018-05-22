<template>
    <div>
        <navbar></navbar>

        <div class="container py-4">
            <div class="row">
                <div class="col">
                    <transition name="fade" mode="out-in" class="mb-2" appear>
                        <alert v-if="$store.getters.hasAlert" v-bind:type="$store.state.alert.type">
                            <span v-html="$store.state.alert.message"></span>
                        </alert>
                    </transition>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col">
                    <div v-if="$auth.ready()">
                        <transition v-on:enter="enter" name="fade" mode="out-in" appear>
                            <router-view></router-view>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navbar from './navbar';
    import alert from './alert';

    export default {
        name: 'app',
        components: {
            navbar,
            alert
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
