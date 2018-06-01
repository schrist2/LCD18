<template>
    <canvas class="d-block" id="vitalsChart"></canvas>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'show',
        computed: {
            ...mapGetters({
                patientProperties: 'patient/showProperties'
            })
        },
        methods: {
            getChartData (propertyName, color) {
                let data = [];
                for (let key in this.patientProperties) {
                    let patientProperty = this.patientProperties[key];

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
                        //responsive: true,
                        title: {
                            display: true,
                            text: this.$t('Vitals')
                        },
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
            this.$store.dispatch('patient/fetchShow', this.$route.params.id).then(() => {
                this.createVitalsChart();
            });
        }
    }
</script>

<style scoped>

</style>
