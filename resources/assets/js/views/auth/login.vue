<template>
    <div>
        <v-container>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>{{ $t('Login') }}</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form @submit.prevent="login" id="loginForm">
                                <v-text-field v-model="username" :label="$t('Username')" required></v-text-field>
                                <v-text-field v-model="password" :label="$t('Password')" type="password" required></v-text-field>
                                <v-checkbox v-model="rememberMe" :label="$t('Remember me')"></v-checkbox>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn :loading="loading" color="primary" form="loginForm" type="submit">
                                {{ $t('Submit') }}
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
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
                            type: 'error',
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