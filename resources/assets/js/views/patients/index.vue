<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="items"
                :loading="loading"
                :no-data-text="''"
                :no-results-text="''"
                class="elevation-1"
                hide-actions
        >
            <template slot="items" slot-scope="props">
                <td><router-link :to="{ name: 'patient.show', params: { id: props.item.id } }">{{ props.item.name }}</router-link></td>
                <td>{{ props.item.birthdate }}</td>
                <td>{{ props.item.gender }}</td>
            </template>

            <v-pagination v-model="paginationPage" :length="patientList.meta.last_page" slot="footer"></v-pagination>
        </v-data-table>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'index',
        data () {
            return {
                loading: false,
                paginationPage: this.$route.query.page ? parseInt(this.$route.query.page) : 1
            };
        },
        computed: {
            ...mapGetters({
                patientList: 'patients/list'
            }),
            headers () {
                return [
                    { text: this.$t('Name'), value: 'name', sortable: true, align: 'left' },
                    { text: this.$t('Birthdate'), value: 'birthdate', sortable: false },
                    { text: this.$t('Gender'), value: 'gender', sortable: false },
                ]
            },

            items () {
                return this.patientList.items.map(x => {
                    let genderNames = {
                        ['m']: this.$t('Male'),
                        ['f']: this.$t('Female'),
                        ['x']: this.$t('N/A')
                    };

                    return {
                        id: x.id,
                        name: x.first_name + ' ' + x.last_name,
                        birthdate: (new Date(x.birthdate)).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }),
                        gender: genderNames[x.gender]
                    };
                })
            },
        },
        methods: {
            fetchData () {
                this.loading = true;

                this.$store.dispatch('patients/fetchList', { page: this.$route.query.page }).then(() => {
                    this.loading = false;
                });
            }
        },
        watch: {
            '$route.query.page' (to, from) {
                this.fetchData();
            },

            'paginationPage' (to, from) {
                this.$router.push({ name: 'patient.index', query: { page: to } });
            }
        },
        mounted () {
            this.fetchData();
        }
    };
</script>

<style scoped>

</style>
