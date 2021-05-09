const types = {
    COUNTRY_SELECTED: 'COUNTRY_SELECTED',
    UPDATE_STATE: 'UPDATE_STATE',

    DEFAULT_SUMMARY: 'DEFAULT_SUMMARY'
}

const actions = {
    changeCountry: (country) => {
        return {
            type: types.COUNTRY_SELECTED,
            payload: {country}
        }
    },
    setDefaultSummary: () => {
        return{
            type: types.DEFAULT_SUMMARY,
            payload: {}
        }
    },
    updateState: state => {
        return {
            type: types.UPDATE_STATE,
            payload: {
                state
            }
        }
    }
}

export {
    types,
    actions
}