<template>
    <div class="card">
        <h5 class="card-header">
            {{ $t('Home') }}
        </h5>

        <div class="card-body">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <router-link :to="{ name: 'patient.index' }" class="btn btn-block">
                            <i class="fa fa-medkit fa-5x"></i>
                            <p>{{ $t('Patients') }}</p>
                        </router-link>
                    </div>
                    <div class="col-6">
                        <router-link :to="{ name: 'user.settings' }" class="btn btn-block">
                            <i class="fa fa-gear fa-5x"></i>
                            <p>{{ $t('Settings') }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home'
    }
</script>

<style scoped>

</style>