<template>
    <div>
        <div class="statistics-container">
            <div class="chart-content" v-for="field in fields" :key="field.letter">
                <canvas :id="field.letter + '-chart' "></canvas>
            </div>
        </div>

        <div class="back-to-top" @click="scrollToTop()">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
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
                            backgroundColor: ['rgba(71, 183,132,.5)'],
                            borderColor: ['#36495d'],
                            borderWidth: 3,
                            pointBorderColor: ['#36495d'],
                            pointRadius: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    legend: {
                        labels: {
                            fontColor: 'black',
                            fontSize: 13
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                padding: 25,
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'values'
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'seconds'
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
                                backgroundColor: ['rgba(71, 183,132,.5)'],
                                borderColor: ['#36495d'],
                                borderWidth: 2,
                                pointBorderColor: this.setPointBorderColor(field),
                                pointRadius: 2
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
        },
        setPointBorderColor(field) {
            var colors = [];
            var color = '#36495d';
            var times = field.seconds.length;

            for (var i = 0; i < times; i++) {
                colors.push(color)
            }
            return colors;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style lang="scss">
@import 'src/scss/variables';
@import 'src/scss/mixins';

.statistics-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .chart-content {
        position: relative;
        width: 40%;
        height: 40%;
        margin: 0 40px 30px 0;
    }

}

.back-to-top {
    width: 50px;
    height: 50px;
    background-color: $main-color;
    border-radius: 50%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 22px;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
    z-index: 10;
    @include box-shadow(0 0 10px 0 rgba(63, 66, 87, 0.4));
}

@media only screen and (max-width: 992px) {
    .statistics-container {

        .chart-content {
            width: 80%;
            height: 80%;
        }

    }
}

@media only screen and (max-width: 600px) {
    .back-to-top {
        width: 45px;
        height: 45px;
        font-size: 20px;
        right: 12px;
    }
}

@media only screen and (max-width: 420px) {
    .back-to-top {
        width: 40px;
        height: 40px;
        font-size: 18px;
        right: 10px;
    }
}
</style>
