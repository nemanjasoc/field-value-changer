<template>
    <div class="container">
        <div class="fields-wrapper">
            <div class="field-container" v-for="field in fields" :key="field.letter">
                <div class="field">
                    <span class="field-letter">{{ field.letter }}</span>
                    <div class="value-arrow-container">
                        <span class="field-value">value: {{ field.value }}</span>
                        <span class="arrow-up" v-if="field.condition === '+'"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>
                        <span class="arrow-down" v-if="field.condition === '-'"><i class="fa fa-arrow-down" aria-hidden="true"></i></span>
                    </div>
                </div>      
                <button class="field-button" @click="switchEnableDisable(field)">Disable / Enable change</button>
            </div>
        </div>
        <router-link tag="button" class="next-page" :to="{ name: 'Statistics'}">Go to Statistics</router-link>
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
    mounted() {
        this.changeValue();
    },
    methods: {
        changeValue() {
            setInterval(() => {
                var possibleValues = [-2, -1, 1, 2];
                var newFieldsValues = [];
                
                for (var i = 0; i < this.fields.length; i++) {
                    var currentObject = this.fields[i];
                    var randomNum = possibleValues[Math.floor(Math.random() * possibleValues.length)];

                    if (currentObject.enable) {
                        currentObject.value += randomNum;
                    
                        if (randomNum > 0) {
                            currentObject.condition = '+';
                        } else if (randomNum < 0) {
                            currentObject.condition = '-';
                        }
                    }
                    newFieldsValues.push(currentObject);
                }
            },2000);
            this.$store.commit('setCurrentField', newFieldsValues);
        },
        switchEnableDisable(field) {
            field.enable = !field.enable;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;

    .field {
        width: 150px;
        height: 150px;
        margin: 15px;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .value-arrow-container {
            display: flex;
            justify-content: space-around;

            .field-value {
                margin: 20px 15px 0 0;
            }

            .arrow-up,
            .arrow-down {
                margin-top: 20px;
            }
        }
    }

    .field-button {
        width: 150px;
        height: 35px;
        cursor: pointer;
        border-radius: 4px;
    }
}

.next-page {
    width: 110px;
    height: 25px;
    margin: 15px;
    cursor: pointer;
    border-radius: 4px;
}
</style>
