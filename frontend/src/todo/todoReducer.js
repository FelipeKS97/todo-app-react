const INITIAL_STATE = {
    description: 'Ler livro',
    list:[{
        id: 1,
        description:'Paranaue pa para na naue' ,
        done: true
        },
    {
        id: 2,
        description:'wowowowe' ,
        done: false
    },
    {
        id: 3,
        description:'nana na e na na na' ,
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        case 'TODO_SEARCHED':
            return {...state, list: action.payload.data}
        default:
            return state
    }
    
}