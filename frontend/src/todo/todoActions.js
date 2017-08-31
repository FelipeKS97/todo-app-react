export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    request = axios.get(`${URL}?sort=-createdAt`)
    return ({
        type: 'TODO_SEARCHED',
        payload: request
    })
}