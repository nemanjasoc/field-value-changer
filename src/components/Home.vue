<template>
    <div class="container">
        <div class="fields-wrapper">
            <div class="field-container" v-for="field in fields" :key="field.letter">
                <div class="field" :class="{ inactive: !field.enable }">
                    <span class="field-letter">{{ field.letter }}</span>
                    <div class="value-arrow-container">
                        <span class="field-value">value: {{ field.currentValue }}</span>
                        <span class="arrow-up" v-if="field.condition === '+'"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>
                        <span class="arrow-down" v-if="field.condition === '-'"><i class="fa fa-arrow-down" aria-hidden="true"></i></span>
                    </div>
                </div>
    
                <button class="field-button" @click="switchEnableDisable(field)">Disable / Enable change</button>
            </div>
        </div>

        <button class="next-page-button" @click="goToStatistics()">Go to Statistics</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'fields'
        ])
    },
    data() {
        return {
            red: false,
            interval: null 
        }
    },
    mounted() {
        this.changeValue();
    },
    methods: {
        changeValue() {  
            this.interval = setInterval(() => {
                if (this.$route.path === '/statistics') {
                    clearInterval(this.interval);
                }

                var possibleValues = [-2, -1, 1, 2];
                var newFieldsValues = [];
                
                for (var i = 0; i < this.fields.length; i++) {
                    var currentObject = this.fields[i];
                    var randomNum = possibleValues[Math.floor(Math.random() * possibleValues.length)];

                    if (currentObject.enable) {
                        var fieldCurrentValue = currentObject.currentValue += randomNum;
                        currentObject.values.push(fieldCurrentValue);
                    
                        var currentSecond = (currentObject.values.length - 1) * 2;
                        currentObject.seconds.push(currentSecond);
                        
                        if (randomNum > 0) {
                            currentObject.condition = '+';
                        } 
                        else if (randomNum < 0) {
                            currentObject.condition = '-';
                        }
                    }
                    newFieldsValues.push(currentObject);
                }
                this.$store.commit('setCurrentField', newFieldsValues);
            },2000); 
        },
        switchEnableDisable(field) {
            field.enable = !field.enable;
        },
        goToStatistics() {
            this.$router.push('/statistics');
            clearInterval(this.interval);
        }
    }
}
</script>

<style lang="scss">
.fields-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.field-container {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(20% - 20px);
    padding-top: 3%;
    padding-bottom: 3%;
    position: relative;
   
    .field {     
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        padding-top: calc(56.25% - 20px);
        margin-bottom: 15px;
        border: 2px solid #9bfe9e;
        box-shadow: 0 1px 7px 0px #9bfe9e;
        -webkit-box-shadow: 0 1px 7px 0px #9bfe9e;
        -moz-box-shadow: 0 1px 7px 0px #9bfe9e;
        -o-box-shadow: 0 1px 7px 0px #9bfe9e;

        .field-letter {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .value-arrow-container {
            display: flex;
            justify-content: space-around;

            .field-value {
                margin: 0 20px 20px 0;
            }

            .arrow-up,
            .arrow-down {
                margin-bottom: 20px;
            }
        }
    }

    .field.inactive { 
        border: 2px solid red;
        box-shadow: 0 1px 7px 0px red;
        -webkit-box-shadow: 0 1px 7px 0px red;
        -moz-box-shadow: 0 1px 7px 0px red;
        -o-box-shadow: 0 1px 7px 0px red;
    }

    .field-button {
        width: 100%;
        height: 32px;
        cursor: pointer;
        border-radius: 4px;
        font-size: 12px;
        text-align: center;
        outline: none;
    }
}

.next-page-button {
    width: 110px;
    height: 25px;
    margin: 15px;
    cursor: pointer;
    border-radius: 4px;
}

/*media query*/

@media only screen and (max-width: 992px) {
    .field-container {
        width: calc(25% - 20px);
    }
}

@media only screen and (max-width: 768px) {
    .field-container {
        width: calc(33.33% - 20px);
    }
}

@media only screen and (max-width: 600px) {
    .field-container {
        width: calc(50% - 20px);
    }
}

@media only screen and (max-width: 420px) {
    .field-container {
        width: calc(100% - 20px);
    }
}
</style>
