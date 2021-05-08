const types = {
    COUNTRY_SELECTED: 'COUNTRY_SELECTED',
    UPDATE_STATE: 'UPDATE_STATE'
}

const actions = {
    changeCountry: (country) => {

        return {
            type: types.COUNTRY_SELECTED,
            payload: {country}
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