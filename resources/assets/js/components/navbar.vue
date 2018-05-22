<template>
    <nav class="navbar navbar-expand-md navbar-light">
        <div class="container">
            <router-link :to="{ name: 'index' }" class="navbar-brand">medicAR</router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav mr-auto">

                </ul>
                <ul class="navbar-nav ml-auto">
                    <template v-if="$auth.ready()">
                        <li v-if="!$auth.check()" class="nav-item">
                            <router-link :to="{ name: 'auth.login' }" class="nav-link"><i class="fa fa-sign-in"></i> {{ $t('Login') }}</router-link>
                        </li>
                        <li v-else class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <span><i class="fa fa-user"></i> {{ $auth.user().name }}</span>
                            </a>
                            <div class="dropdown-menu">
                                <router-link :to="{ name: 'user.home' }" class="dropdown-item"><span><i class="fa fa-home"></i> {{ $t('Home') }}</span></router-link>
                                <div class="dropdown-divider"></div>
                                <a v-on:click.prevent="logout" class="dropdown-item" href="#"><span><i class="fa fa-sign-out"></i> {{ $t('Logout') }}</span></a>
                            </div>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item"><i class="fa fa-spinner fa-spin"></i></li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navbar',
        methods: {
            logout: function () {
                this.$auth.logout();
            }
        }
    }
</script>

<style scoped>
    .router-link-active {
        font-weight: bold;
    }
</style>
