import { combineReducers } from 'redux'

 const rootReducer = combineReducers({
     todo: ()=> ({
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
     })
 })
 export default rootReducer