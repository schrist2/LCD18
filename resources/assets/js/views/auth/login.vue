<template>
    <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col">
                <div class="card">
                    <h5 class="card-header">
                        {{ $t('Login') }}
                    </h5>
                    <div class="card-body">
                        <form v-on:submit.prevent="login">
                            <div class="form-group">
                                <label for="email" class="bmd-label-floating">{{ $t('E-Mail address') }}</label>
                                <input type="email" class="form-control" id="email" name="email">
                            </div>
                            <div class="form-group">
                                <label for="password" class="bmd-label-floating">{{ $t('Password') }}</label>
                                <input type="password" class="form-control" id="password" name="password">
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="rememberMe"> {{ $t('Remember me') }}
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary btn-raised">{{ $t('Submit') }}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        methods: {
            login: () => {

            }
        }
    }
</script>

<style scoped>

</style>