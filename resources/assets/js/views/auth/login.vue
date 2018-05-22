<template>
    <div class="card">
        <h5 class="card-header">
            {{ $t('Login') }}
        </h5>
        <div class="card-body">
            <form v-on:submit.prevent="login">
                <div class="form-group">
                    <label for="username" class="bmd-label-floating">{{ $t('Username') }}</label>
                    <input v-model="username" type="text" class="form-control" id="username" required>
                </div>
                <div class="form-group">
                    <label for="password" class="bmd-label-floating">{{ $t('Password') }}</label>
                    <input v-model="password" type="password" class="form-control" id="password" required>
                </div>
                <div class="checkbox">
                    <label>
                        <input v-model="rememberMe" type="checkbox"> {{ $t('Remember me') }}
                    </label>
                </div>
                <button v-bind:disabled="loading" type="submit" class="btn btn-primary btn-raised">
                    <span v-if="loading"><i class="fa fa-spinner fa-spin"></i></span>
                    <span v-else>{{ $t('Submit') }}</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                username: '',
                password: '',
                rememberMe: false,

                loading: false
            };
        },
        methods: {
            login () {
                this.loading = true;

                this.$auth.login({
                    data: { username: this.username, password: this.password },
                    success () {
                        this.loading = false;

                        this.$store.commit('setAlert', {
                            type: 'success',
                            message: this.$t('Login successful')
                        })
                    },
                    error () {
                        this.loading = false;

                        this.$store.commit('setAlert', {
                            type: 'danger',
                            message: this.$t('Login failed')
                        })
                    },
                    rememberMe: this.rememberMe,
                    redirect: { name: 'user.home' },
                });
            }
        }
    }
</script>

<style scoped>

</style>