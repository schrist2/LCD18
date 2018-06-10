<template>
    <div style="margin: -16px;">
        <v-toolbar color="primary lighten-1" dark flat>
            <v-toolbar-title>
                {{ patient.first_name }} {{ patient.last_name }}<br>
            </v-toolbar-title>
        </v-toolbar>

        <v-tabs v-model="activeTab">
            <v-tab :key="0">
                {{ $t('Vitals' ) }}
            </v-tab>
            <v-tab-item :key="0">
                <canvas class="d-block" id="vitalsChart"></canvas>
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'show',
        data () {
            return {
                activeTab: 0
            }
        },
        computed: {
            ...mapGetters({
                patient: 'patients/current'
            })
        },
        methods: {
            getChartData (propertyName, color) {
                let data = [];
                for (let key in this.patient.properties) {
                    let patientProperty = this.patient.properties[key];

                    if (patientProperty.name !== propertyName) {
                        continue;
                    }

                    data.push({
                        x: new Date(patientProperty.pivot.time),
                        y: patientProperty.pivot.value,
                    });
                }

                return {
                    label: propertyName,
                    fill: false,
                    backgroundColor: color,
                    borderColor: color,
                    borderWidth: 1,
                    xValueType: 'dateTime',
                    data
                };
            },

            createVitalsChart () {
                let ctx = document.getElementById('vitalsChart').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        datasets: [
                            this.getChartData('Temperatur', 'Red'),
                            this.getChartData('Puls', 'Green'),
                            this.getChartData('Atmung', 'Purple'),
                            this.getChartData('O2', 'Blue')
                        ]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                type: 'time',
                                position: 'bottom',
                                time: {
                                    unit: 'day'
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: this.$t('Time')
                                }
                            }],
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: this.$t('Value')
                                }
                            }]
                        }
                    }
                });
            }
        },
        mounted () {
            this.$store.dispatch('patients/fetchCurrent', this.$route.params.id).then(() => {
                this.createVitalsChart();
            });
        }
    }
</script>

<style scoped>

</style>
