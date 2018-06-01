<template>
    <div>
        <v-app>
            <v-navigation-drawer v-if="$auth.check()" v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
                <v-list>
                    <v-list-tile :to="{ name: 'patient.index' }">
                        <v-list-tile-action>
                            <v-icon>person</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ $t('Patients') }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="primary" dark fixed app>
                <v-toolbar-title>
                    <v-toolbar-side-icon v-if="$auth.check()" @click="drawer = !drawer"></v-toolbar-side-icon>
                    <span class="hidden-sm-and-down">medicAR</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-menu v-if="$auth.check()">
                        <v-btn slot="activator" flat>
                            <v-icon left>account_box</v-icon> {{ $auth.user().name }} <v-icon right>arrow_drop_down</v-icon>
                        </v-btn>
                        <v-list>
                            <v-list-tile @click="$router.push({ name: 'user.home' })">
                                <v-list-tile-action>
                                    <v-icon>home</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ $t('Home') }}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile @click="$router.push({ name: 'user.settings' })">
                                <v-list-tile-action>
                                    <v-icon>settings</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ $t('Settings') }}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider></v-divider>
                            <v-list-tile @click="$auth.logout()">
                                <v-list-tile-action>
                                    <v-icon>exit_to_app</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ $t('Logout') }}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                    <v-btn v-else :to="{ name: 'auth.login' }" :loading="!$auth.ready()" flat>
                        <v-icon left>account_box</v-icon> {{ $t('Login') }}
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>

            <v-content>
                <v-container fluid>
                    <div v-if="$auth.ready()">
                        <transition name="fade" mode="out-in" class="mb-2" appear>
                            <v-alert :value="$store.getters.hasAlert" :type="$store.state.alert.type">
                                {{ $store.state.alert.message }}
                            </v-alert>
                        </transition>

                        <transition name="fade" mode="out-in" appear>
                            <router-view></router-view>
                        </transition>
                    </div>
                </v-container>
            </v-content>
            <v-footer app></v-footer>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {
            alert
        },
        data () {
            return {
                drawer: true
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
