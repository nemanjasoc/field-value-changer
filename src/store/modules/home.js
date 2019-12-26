const state = {
    fields: [
        {
            letter: 'A',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [],
            seconds: []
        },
        {
            letter: 'B',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [],
            seconds: []
        },
        {
            letter: 'C',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [],
            seconds: []
        },
        {
            letter: 'D',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [],
            seconds: []
        },
        {
            letter: 'E',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [],
            seconds: []
        },
        {
            letter: 'F',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [],
            seconds: []
        },
        {
            letter: 'G',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [],
            seconds: []
        },
        {
            letter: 'H',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [],
            seconds: []
        },
        {
            letter: 'I',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [],
            seconds: []
        },
        {
            letter: 'J',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [],
            seconds: []
        }
    ]
}

const getters = {
    fields: function (state) {
        return state.fields;
    }
}

const mutations = {
    setCurrentField: function (state, payload) {
        state.fields = payload;
    }
}

export default {
    state,
    getters,
    mutations
}
