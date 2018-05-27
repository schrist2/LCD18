<template>
    <div class="card">
        <h5 class="card-header">
            {{ $t('Patients') }}
        </h5>
        <div class="card-body">
            <table v-if="$store.state.patient.index != null" class="table">
                <tr>
                    <th>{{ $t('Name') }}</th>
                    <th>{{ $t('Birthdate') }}</th>
                    <th>{{ $t('Gender') }}</th>
                </tr>
                <tr v-for="(patient) in $store.state.patient.index.data">
                    <td><router-link :to="{ name: 'patient.show', params: { id: patient.id } }">{{ patient.first_name }} {{ patient.last_name }}</router-link></td>
                    <td>{{ patient.birthdate }}</td>
                    <td>{{ patient.gender }}</td>
                </tr>
            </table>
            <pagination :data="paginationData"></pagination>
        </div>
    </div>
</template>

<script>
    import Pagination from "../../components/pagination";

    export default {
        name: 'index',
        components: {
            Pagination
        },
        computed: {
            paginationData () {
                return this.$store.state.patient.index != null ? this.$store.state.patient.index.meta : null;
            }
        },
        methods: {
            fetchData () {
                this.$store.dispatch('patient/fetchIndex', { page: this.$route.query.page }).then(() => {

                });
            }
        },
        watch: {
            '$route' (to, from) {
                this.fetchData();
            }
        },
        mounted () {
            this.fetchData();
        }
    };
</script>

<style scoped>

</style>
