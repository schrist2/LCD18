<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="items"
                :loading="loading"
                :no-data-text="''"
                :rows-per-page-items="[5, 10, 25, { text: $t('All'), value:-1 }]"
                :rows-per-page-text="$t('Rows per page')"
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td><router-link :to="{ name: 'patient.show', params: { id: props.item.id } }">{{ props.item.name }}</router-link></td>
                <td>{{ props.item.birthdate }}</td>
                <td>{{ props.item.gender }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
                loading: false
            };
        },
        computed: {
            headers () {
                return [
                    { text: this.$t('Name'), value: 'name', sortable: true, align: 'left' },
                    { text: this.$t('Birthdate'), value: 'birthdate', sortable: false },
                    { text: this.$t('Gender'), value: 'gender', sortable: false },
                ]
            },

            items () {
                if (this.$store.state.patient.index == null) {
                    return [];
                }

                return this.$store.state.patient.index.data.map(x => {
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

            paginationData () {
                return this.$store.state.patient.index != null ? this.$store.state.patient.index.meta : null;
            }
        },
        methods: {
            fetchData () {
                this.loading = true;

                this.$store.dispatch('patient/fetchIndex', { page: this.$route.query.page }).then(() => {
                    this.loading = false;
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
