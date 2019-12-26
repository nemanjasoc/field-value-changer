<template>
<div>
    <router-link tag="button" class="back-button" :to="{ name: 'Home' }">Back</router-link>

    <div class="statistics-container">
        <div class="chart-container" v-for="field in fields" :key="field.letter">
            <canvas :id="field.letter + '-chart' "></canvas>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Chart from 'chart.js';

export default {
    computed: {
        ...mapGetters([
            'fields'
        ])
    },
    data() {
        return {
            dataChart: {
                type: 'line',
                data: {
                    labels: [], 
                    datasets: [
                        { 
                            label: 'Value changes in time',
                            data: [],
                            backgroundColor: [
                                'rgba(71, 183,132,.5)'
                            ],
                            borderColor: [
                                '#36495d'
                            ],
                            borderWidth: 3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                padding: 25,
                            }
                        }]
                    }
                }
            }
        }
    },
    mounted() {
        this.fields.forEach((field) => {
            var newDataChart = Object.assign(
                this.dataChart, { 
                    data: { 
                        labels: field.seconds,
                        datasets: [
                            { 
                                label: field.letter + ' ' + '- chart value changes in time',
                                data: field.values,
                                backgroundColor: [
                                    'rgba(71, 183,132,.5)'
                                ],
                                borderColor: [
                                    '#36495d'
                                ],
                                borderWidth: 2
                            }
                        ]
                    }
                }
            );
            this.createChart(field.letter + '-chart', newDataChart);
        });
    },
    methods: {
        createChart(fieldId, dataChart) {
            const ctx = document.getElementById(fieldId);
            const myChart = new Chart(ctx, {
                type: dataChart.type,
                data: dataChart.data,
                options: dataChart.options
            });
        }
    }
}
</script>

<style lang="scss">
.back-button {
    width: 110px;
    height: 25px;
    margin: 15px;
    cursor: pointer;
    border-radius: 4px;
}

.statistics-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .chart-container {
        position: relative;
        width: 40%;
        height: 40%;
        margin: 0 40px 30px 0;
    }
}

/*media query*/

@media only screen and (max-width: 992px) {
    .statistics-container {
        .chart-container {
            width: 80%;
            height: 80%;
        }
    }
}
</style>
