import React, { useReducer } from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
    switch(action.type){
        case 'add':
            return [...state, { title: `Blog Post #${state.length + 1}`}]
        default:
            return state
    }
}

export const Provider = ({ children }) => {
    const [posts, dispatch] = useReducer(reducer, [])

    const addPosts = () => {
        dispatch({type: 'add'})
    }

    return <Context.Provider value={{ data: posts, addPosts}}>
        {children}
    </Context.Provider>
}

export default Context