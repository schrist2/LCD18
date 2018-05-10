<template>
    <nav class="navbar navbar-expand-md navbar-light">

        <router-link :to="{ name: 'index' }" class="navbar-brand">medicAR</router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav mr-auto">

            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link :to="{ name: 'auth.login' }" class="nav-link">{{ $t('Login') }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'auth.register' }" class="nav-link">{{ $t('Register') }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navbar',
        props: [
            'guest'
        ],
        methods: {
            logout: function () {

            }
        }
    }
</script>

<style scoped>
    .router-link-active {
        font-weight: bold;
    }
</style>
