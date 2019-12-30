const state = {
    fields: [
        {
            letter: 'A',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [3],
            seconds: [0]
        },
        {
            letter: 'B',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [3],
            seconds: [0]
        },
        {
            letter: 'C',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [3],
            seconds: [0]
        },
        {
            letter: 'D',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [3],
            seconds: [0]
        },
        {
            letter: 'E',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [3],
            seconds: [0]
        },
        {
            letter: 'F',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [3],
            seconds: [0]
        },
        {
            letter: 'G',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [3],
            seconds: [0]
        },
        {
            letter: 'H',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [3],
            seconds: [0]
        },
        {
            letter: 'I',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [3],
            seconds: [0]
        },
        {
            letter: 'J',
            condition: '',
            enable: true,
            currentValue: 3,
            values: [3],
            seconds: [0]
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
