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
    
                <div class="disable-enable-button">
                    <button class="disable-button" @click="switchEnableDisable(field)" v-if="field.enable">Disable change</button>
                    <button class="enable-button" @click="switchEnableDisable(field)" v-if="!field.enable">Enable change</button>
                </div>
            </div>
        </div>
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
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    }
}
</script>

<style lang="scss">
@import 'src/scss/variables';
@import 'src/scss/mixins';

.fields-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    height: 80%;
    margin: 0 auto;
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
        border: 2px solid #67b26b;
        @include box-shadow(0 1px 7px 0px #67b26b);

        .field-letter {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            font-size: 18px;
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
        border: 2px solid $link-color;
        @include box-shadow(0 1px 7px 0px $link-color);
    }

    .disable-enable-button {
        width: 100%;
        height: 32px;

        .disable-button,
        .enable-button {
            width: 100%;
            line-height: 32px;
            color: #ffffff;
            cursor: pointer;
            border-radius: 4px;
            font-size: 14px;
            text-align: center;
            outline: none;
            border: none;
            background-color: $main-color;
            @include transition(all 0.4s ease 0s);

            &:hover {
                @include box-shadow(0px 5px 40px -10px rgba(0,0,0,0.57));
            }
        }
        
    }

}

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
    .fields-wrapper {
        width: 65%;
    }

    .field-container {
        width: calc(100% - 20px);
    }
}
</style>
