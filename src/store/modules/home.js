const state = {
    fields: [
        {
            letter: 'A',
            value: 3,
            condition: '',
            enable: true
        },
        {
            letter: 'B',
            value: 3,
            condition: '',
            enable: true
        },
        {
            letter: 'C',
            value: 3,
            condition: '',
            enable: true
        },
        {
            letter: 'D',
            value: 3,
            condition: '',
            enable: true
        },
        {
            letter: 'E',
            value: 3,
            condition: '',
            enable: true
        },
        {
            letter: 'F',
            value: 3,
            condition: '',
            enable: true
        },
        {
            letter: 'G',
            value: 3,
            condition: '',
            enable: true
        },
        {
            letter: 'H',
            value: 3,
            condition: '',
            enable: true
        },
        {
            letter: 'I',
            value: 3,
            condition: '',
            enable: true
        },
        {
            letter: 'J',
            value: 3,
            condition: '',
            enable: true
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
